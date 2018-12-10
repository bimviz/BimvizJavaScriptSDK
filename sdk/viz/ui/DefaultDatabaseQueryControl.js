BIMVIZ.UI.DefaultDatabaseQueryControl = function(name, iconClass){
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultDatabaseQueryControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultDatabaseQueryControl.constructor = BIMVIZ.UI.DefaultDatabaseQueryControl;

BIMVIZ.UI.DefaultDatabaseQueryControl.prototype.onProjectLoaded = function(project){

    var scope = this;
    var controlId = "bv_queryDataBaseDiv_" + scope.engine.id; 
    var control;
    var sceneContainer = $('#'+scope.engine.ContainerId);
    var highlightMgr = scope.engine.getHighlightManager();
    var resultList = null;

    function onresize(){
        var width = sceneContainer.width() * 0.8;
        var height = 600;

        var left = sceneContainer.position().left + (sceneContainer.width() - width) * 0.5;
        var top = sceneContainer.position().top + (sceneContainer.height() - height) * 0.5;
        
        control.css('left', left +'px');
        control.css('top',  top + 'px');
        control.css('width',  width + 'px');
        control.css('height',  height + 'px');
    }

    function showResult(result, text) {
    
        resultList = result;

        var summarydiv = $('#bv_divQueryExampleSearchSummary');

        summarydiv.html('为您搜索到 '+result.total+' 项结果');

        var container = $('#bv_divQueryExampleSearchResult');
        container.html('');

        var template = '<tr>\
                            <td>{0}</td>\
                            <td>{1}</td>\
                            <td>{2}</td>\
                            <td>{3}</td>\
                            <td>{4}</td>\
                            <td>{5}</td>\
                        </tr>';

        
        var len = result.list.length;
        if (len == 0)
            return;

        for (var i = 0; i < len; i++) {
            var item = result.list[i];
            var key = item.Element.GlobalId;
            var name = item.Element.Name;
            var location = item.BuildingStorey;
            var typename = item.Element.IfcType;

            var text = template.format((i+1)+'',key, name, typename, location, item.HitMessage);

            container.append(text);
        }
    }

    function init(){
        var controlHtml = '<div id="'+controlId+'" style="position: absolute;left: 100px;top:100px;width: 80%;height: 600px;background: white;background-color:rgba(1, 1, 1, 0.76)" class="panel">\
            <div class="input-group">\
                        <input class="form-control"  style="color:white" placeholder="请输入词语" id="bv_QueryExampleSearchtext" value="((txtvalue like \'%沙发%\') & (name=\'floor\' and txtvalue like \'1f%\'))" />\
                        <span class="input-group-btn">\
                            <button class="btn btn-default" id="bv_btnQueryExampleSearch">搜索</button>\
                            <button class="btn btn-default" id="bv_btnQueryExampleSetColor">高亮</button>\
                        </span>\
            </div>\
            <div  id="bv_divQueryExampleSearchSummary" style="color: white;margin:10px;"></div>\
            <div style="overflow-y: auto;height: 500px;">\
                    <div  class="table-responsive">\
                   <table class="table table-bordered">\
                       <thead>\
                            <tr>\
                                <th style="width: 80px">序号</th>\
                                <th style="width: 250px">Id</th>\
                                <th style="width: 200px">名称</th>\
                                <th style="width: 200px">类型</th>\
                                <th style="width: 100px">位置</th>\
                                <th>属性查询结果</th>\
                            </tr>\
                        </thead>\
                        <tbody id="bv_divQueryExampleSearchResult">\
                            <tr>\
                                <td>{0}</td>\
                                <td>{1}</td>\
                                <td>{2}</td>\
                                <td>{3}</td>\
                                <td>{4}</td>\
                                <td>{5}</td>\
                            </tr>\
                        </tbody>\
                   </table>\
                </div>\
            </div>\
        </div>';


        scope.parentDiv.css('width', '0px');
        scope.parentDiv.css('height', '0px');
        scope.parentDiv.removeClass("padding-20");
        scope.parentDiv.html(controlHtml);

        control = $('#'+controlId);

        $(window).resize(onresize);
        onresize();

        $('#bv_btnQueryExampleSearch').click(function(){
            var text = $('#bv_QueryExampleSearchtext').val();
            scope.engine.searchElementsBySql(text, showResult);
        });

        $('#bv_btnQueryExampleSetColor').click(function(){
            if(resultList){
                var len = resultList.list.length;
                for (var i = 0; i < len; i++) {
                    var item = resultList.list[i];
                    var key = item.Element.GlobalId;

                    highlightMgr.highlightElement(key);
                    scope.show(false);
                }
            }
            
        });

    };

   

    init();

};