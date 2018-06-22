
BIMVIZ.UI.DefaultFileControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultFileControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultFileControl.constructor = BIMVIZ.UI.DefaultFileControl;

BIMVIZ.UI.DefaultFileControl.prototype.onProjectLoaded = function(project){

    var buttonDiv = '<div class="border-bottom-1 padding-20" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_file_check_all"><i class="fa fa-check-square-o"></i> 全选</a>\
                    <a class="btn" id="bv_file_uncheck_all"><i class="fa fa-square-o"></i> 清空</a>\
                    <a class="btn" id="bv_file_anticheck"><i class="fa fa-clone"></i> 反选</a>\
                </div>\
            </div>\
            <div class="padding-20 nopadding-top">\
                <div id="bv_fileTree"></div>\
            </div>';

    this.parentDiv.append(buttonDiv);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var treecontainer = $('#bv_fileTree');
	var template = '\
    <div class="border-bottom-1  bv_modelitem" rel="{0}" style="padding:10px 10px;">\
            <div class="row padding-0">\
                <div class="col-md-3 col-sm-3 col-xs-3 col padding-0" style="width:50px;">\
                    <img src="{4}" />\
                </div>\
                <div class="col-md-9 col-sm-9 col-xs-9 padding-0" style="width:300px;">\
                    <div style="float:left;padding-top:5px;">\
                        <div class="list-item-font">\{1}</div>\
                        <div class="list-item-fontsmall">\{2} | {3}</div>\
                    </div>\
                    <div style="float:right;padding-top:10px;">\
                        <label class="switch switch-primary switch-round">\
                            <input type="checkbox" class="bv_itemcheckbox" checked="" style="width:30px;">\
                            <span class="switch-label" data-on="" data-off="">\</span>\
                        </label>\
                    </div>\
                </div>\
            </div>\
        </div>\
    ';

    var icon = this.engine.ResourcePath + 'images/types/IFC.png';

    var files = project.files;
    for (var i = 0; i < files.length; i++) {
        var bimfile = files[i];

        var size = (bimfile.FileSize / 1024 / 1024).toFixed(1) + "MB";
        var text = template.format(bimfile.FileId, bimfile.FileName, bimfile.LastTime, size, icon);

        treecontainer.append(text);
    }

    var scope = this;
    $(".bv_itemcheckbox").change(function () {
        var modelid = $(this).parents('.bv_modelitem').attr("rel");
        var ch = $(this).prop("checked");
        scope.engine.showFile(modelid, ch);
        scope.engine.showType('IfcSpace', false);
    });

    $('#bv_file_check_all').click(function (e) {
        $(".bv_itemcheckbox").each(function(item){
            var modelid = $(this).parents('.bv_modelitem').attr("rel");
            $(this).prop("checked", true);
            scope.engine.showFile(modelid, true);
            scope.engine.showType('IfcSpace', false);
        });
    });

    $('#bv_file_uncheck_all').click(function (e) {
        $(".bv_itemcheckbox").each(function(item){
            var modelid = $(this).parents('.bv_modelitem').attr("rel");
            $(this).prop("checked", false);
            scope.engine.showFile(modelid, false);
        });
    });

    $('#bv_file_anticheck').click(function (e) {
        $(".bv_itemcheckbox").each(function(item){
            var modelid = $(this).parents('.bv_modelitem').attr("rel");
            var ch = !$(this).prop("checked");
            $(this).prop("checked", ch);
            scope.engine.showFile(modelid, ch);
            scope.engine.showType('IfcSpace', false);
        });
    });

};