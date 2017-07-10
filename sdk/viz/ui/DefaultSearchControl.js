
BIMVIZ.UI.DefaultSearchControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);

    this.lastClickItem = null;
};

BIMVIZ.UI.DefaultSearchControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultSearchControl.constructor = BIMVIZ.UI.DefaultSearchControl;

BIMVIZ.UI.DefaultSearchControl.prototype.onProjectLoaded = function(project){
    
    var scope = this;
    var container = this.parentDiv;
    var highlightMgr = scope.engine.getHighlightManager();

    var searchhtml = '<div id="bv_searchbar" class="padding-10">\
                    <div class="input-group">\
                        <a class="input-group-addon glink"><i class="fa fa-bars"></i> 楼层</a>\
                        <a class="input-group-addon glink"><i class="fa fa-text-height"></i> 类型</a>\
                        <input class="form-control"  style="color:white" placeholder="请输入词语" id="bv_searchtext" value="wall 2F" />\
                        <span class="input-group-btn">\
                            <button class="btn btn-default" id="bv_btnSearchBarSearch">搜索</button>\
                        </span>\
                    </div>\
                </div>\
                <div id="bv_searchsummary" class="list-item-font border-bottom-1 padding-10">搜索结果:</div>\
                <div id="bv_searchitems"></div>';

    container.html(searchhtml);

    $('#bv_btnSearchBarSearch').click(function (e) {
            var text = $('#bv_searchtext').val();
            
            scope.engine.searchElementsByText(text, showResult);
    });

    function showResult(result, text) {
        var summarydiv = $('#bv_searchsummary');
        if(result.list.length<result.total){
            summarydiv.html('为您搜索到 '+result.total+' 项结果, 显示匹配最前的 '+result.list.length+' 项');
        }
        else{
            summarydiv.html('为您搜索到 '+result.list.length+' 项结果');
        }

        var container = $('#bv_searchitems');
        container.html('');

        var template = '<div class="border-bottom-1  bv_resultitem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-3 col-sm-3 col-xs-3 col">\
                                    <img src="{1}"  style="width:64px;height:64px;margin-left:10px" />\
                                </div>\
                                <div class="col-md-9 col-sm-9 col-xs-9 padding-0">\
                                    <a style="text-decoration: none">\
                                        <div class="row">\
                                            <div class="list-item-font col-md-6">位置:{2}</div>\
                                            <div class="list-item-font col-md-6">类型:{3}</div>\
                                        </div>\
                                        <div class="list-item-font">名称:{4}</div>\
                                        <div class="list-item-fontsmall">信息:{5}</div>\
                                    </a>\
                                </div>\
                            </div>\
                        </div>';

        var icondict = {
            Wall: 'wall.png',
            Door: 'door.png',
            Slab: 'slab.png',
            Beam: 'beam.png',
            Stair: 'stair.png',
            WallStandardCase: 'wall.png',
            Window: 'window.png',
            Railing: 'railing.png',
            BuildingElementProxy: 'default.png',
            Column: 'column.png',
            StairFlight: 'stair.png',
            FlowTerminal: 'default.png',
            FurnishingElement: 'Furnishing.png'
        };

        var imagepath = scope.engine.ResourcePath + 'images/types/';
        var len = result.list.length;
        if (len == 0)
            return;
        for (var i = 0; i < len; i++) {
            var item = result.list[i];
            var key = item.Element.GlobalId;
            var name = item.Element.Name;
            var location = item.BuildingStorey;
            var typename = item.Element.IfcType.replace(/Ifc/, '');

            var defaulticon = imagepath + "default.png";
            if (icondict[typename] != undefined) {
                defaulticon = imagepath + icondict[typename];
            }

            var text = template.format(key, defaulticon, location, typename, name, item.HitMessage);

            container.append(text);
        }

        $('.bv_resultitem a').click(function (e) {
            if (scope.lastClickItem)
                scope.lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_resultitem');
            var id = parent.attr('rel');

            if(id){
                highlightMgr.clearHighlightElementList();
                highlightMgr.highlightElement(id);
                bimEngine.flyToElement(id);
            }

            parent.addClass("resultSelectedBackground");
            scope.lastClickItem = parent;
        });
    }
};