
BIMVIZ.UI.DefaultFileLoadControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultFileLoadControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultFileLoadControl.constructor = BIMVIZ.UI.DefaultFileLoadControl;

BIMVIZ.UI.DefaultFileLoadControl.prototype.onProjectLoaded = function(project){

    var buttonDiv = '<div class="border-bottom-1 padding-20" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left" id="bv_fileloading_panel">\
                    <a class="btn" id="bv_fileload_check_all"><i class="fa fa-check-square-o"></i> 全选</a>\
                    <a class="btn" id="bv_fileload_uncheck_all"><i class="fa fa-square-o"></i> 清空</a>\
                    <a class="btn" id="bv_fileload_anticheck"><i class="fa fa-clone"></i> 反选</a>\
                </div>\
            </div>\
            <div class="padding-20 nopadding-top">\
                <div id="bv_fileloadTree"></div>\
            </div>';

    this.parentDiv.append(buttonDiv);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var treecontainer = $('#bv_fileloadTree');
	var template = '\
    <div class="border-bottom-1  bv_fileloaditem" rel="{0}" style="padding:10px 10px;">\
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
                            <input type="checkbox" class="bv_itemcheckbox_load"  style="width:30px;" {5}>\
                            <span class="switch-label" data-on="" data-off="">\</span>\
                        </label>\
                    </div>\
                </div>\
            </div>\
        </div>\
    ';

    var icon = this.engine.ResourcePath + 'images/types/IFC.png';
    var fileMgr = this.engine.getFileManager();

    if(fileMgr.enabled){
        var files = fileMgr.getFileList();
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var bimfile = file.info;
            var status = file.status;
            var statusChecked = status==BIMVIZ.FileStatus.Loaded?"checked":"";

            var size = (bimfile.FileSize / 1024 / 1024).toFixed(1) + "MB";
            var text = template.format(bimfile.FileId, bimfile.FileName, bimfile.LastTime, size, icon, statusChecked);

            treecontainer.append(text);
        }
    }
    else{
         treecontainer.append("<br>当前处于全部加载模式，控件不可用。<br>如果想使用该控件请先改变场景加载模式。");
    }

    var scope = this;
    $(".bv_itemcheckbox_load").change(function () {
        var fileId = $(this).parents('.bv_fileloaditem').attr("rel");
        var ch = $(this).prop("checked");
        if(ch){
            fileMgr.loadFile(fileId);
        }
        else{
            fileMgr.unloadFile(fileId);
        }
    });

    $('#bv_fileload_check_all').click(function (e) {
        $(".bv_itemcheckbox_load").each(function(item){
            var fileId = $(this).parents('.bv_fileloaditem').attr("rel");
            
            var ch = $(this).prop("checked");
            if(ch==true)
                return;

            $(this).prop("checked", true);
            fileMgr.loadFile(fileId);
        });
    });

    $('#bv_fileload_uncheck_all').click(function (e) {
        $(".bv_itemcheckbox_load").each(function(item){
            var fileId = $(this).parents('.bv_fileloaditem').attr("rel");

            var ch = $(this).prop("checked");
            if(ch==false)
                return;

            $(this).prop("checked", false);
            fileMgr.unloadFile(fileId);  
        });
    });

    $('#bv_fileload_anticheck').click(function (e) {
        $(".bv_itemcheckbox_load").each(function(item){
            var fileId = $(this).parents('.bv_fileloaditem').attr("rel");
            var ch = !$(this).prop("checked");
            $(this).prop("checked", ch);
            

            if(ch){
                fileMgr.loadFile(fileId);
            }
            else{
                fileMgr.unloadFile(fileId);
            }
        });
    });
};