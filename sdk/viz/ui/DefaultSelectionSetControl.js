
BIMVIZ.UI.DefaultSelectionSetControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);


};

BIMVIZ.UI.DefaultSelectionSetControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultSelectionSetControl.constructor = BIMVIZ.UI.DefaultSelectionSetControl;

BIMVIZ.UI.DefaultSelectionSetControl.prototype.onProjectLoaded = function(project){
	
    var scope = this;
    var container = this.parentDiv;

    var lastClickItem = null;
    var itemlist = [];

    var selectionSetManager = scope.engine.getSelectionSetManager();
    var highlightMgr = scope.engine.getHighlightManager();

    var template = '<div class="border-bottom-1  bv_selectionitem" rel="{0}" style="padding:15px 15px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-left:10px;">\
                                    <img class="bv_selection_icon" src="{3}" style="width:36px;height:auto;" />\
                                </div>\
                                <div class="col-md-7 col-sm-7 col-xs-7 padding-0" >\
                                    <a style="text-decoration: none" class="bv_selection_href" >\
                                        <div class="list-item-font bv_selection_name">名称:<span>{1}</span></div>\
                                        <div class="list-item-font bv_selection_description">描述:<span>{2}</span></div>\
                                        <div class="list-item-font bv_selection_count">构件数:<span>{4}</span></div>\
                                    </a>\
                                </div\
                                <div class="col-md-3 col-sm-3 col-xs-3 col">\
                                   <a><i class="ico-light ico-rounded ico-xs ico-hover fa fa-close bv_selection_btn_delete"></i></a>\
                                   <a><i class="ico-light ico-rounded ico-xs ico-hover fa fa-edit bv_selection_btn_edit"></i></a>\
                                </div>\
                            </div>\
                        </div>';

    function init(){
        var controlHtml = '<div id="bv_markerbar" class="padding-20 border-bottom-1" style="width:100%;height:70px;">\
                <div class="input-group pull-left">\
                </div>\
                <span class="pull-right">\
                    <button class="btn btn-default  height-30" id="bv_btnSelectionSetCreate">创建</button>\
                </span>\
            </div>\
            <div id="selectionsetdetail" class="padding-20 bottom-border-1" style="display:none;">\
                                    <label>名称：</label><input class="form-control" id="bv_selectionset_input_name" type="text"  />\
                                    <label>描述：</label><input class="form-control" id="bv_selectionset_input_desc" type="text" />\
                                    <div style="margin-top:20px;">\
                                        <input  id="bv_selectionset_input_updatelist" type="checkbox" > 使用当前高亮构件作为选择集</input>\
                                    </div>\
            </div>\
            <div id="bv_selectionsetitems"></div>';

        container.html(controlHtml);

        

        $('#bv_btnSelectionSetCreate').click(function (e) {
            showDialog('创建选择集', '', '', true, function(name, desc, isupdate){
                onAdd(name, desc, isupdate);
            });
            
        });

        selectionSetManager.getList(function(success, list){
            if(success){
                popupSelectionSets(list);
            }
        });
    }

    function showDialog(dialogTitle, name, desc, isupdate, callback){
            $('#bv_selectionset_input_name').val(name);
            $('#bv_selectionset_input_desc').val(desc);
            $('#bv_selectionset_input_updatelist').prop("checked", isupdate);
            $("#selectionsetdetail").dialog({
                resizable: false,
                width: '400',
                modal: true,
                title: dialogTitle,
                buttons: [
                    {
                        html: "<i class='fa fa-check'></i>&nbsp; 确定",
                        "class": "btn btn-default btn-minier",
                        click: function () {
                            $(this).dialog("close");
                            var newname = $('#bv_selectionset_input_name').val();
                            var newdesc = $('#bv_selectionset_input_desc').val();
                            var newisupdate = $('#bv_selectionset_input_updatelist').prop("checked");
                            callback(newname, newdesc, newisupdate);
                        }
                    }
                    ,
                    {
                        html: "<i class='fa fa-trash'></i>&nbsp; 取消",
                        "class": "btn btn-default",
                        click: function () {
                            $(this).dialog("close");
                        }
                    }
                ]
            });
        }
    
    function popupSelectionSets(list) {
        itemlist = [];
        var $container = $('#bv_selectionsetitems');
        $container.html('');

        list.forEach(function (item) {
            addSelectionSetToUi(item);
        });
    }

    function addSelectionSetToUi(item) {
        var $container = $('#bv_selectionsetitems');
        

        var defaulticon = scope.engine.ResourcePath + "images/contact.png";
        var text = template.format(item.id, item.name, item.description, defaulticon, item.list.length);
        $container.append(text);

        // For Click
        $('.bv_selectionitem[rel=' + item.id + '] .bv_selection_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_selectionitem');
            var id = parent.attr('rel');

            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            highlightMgr.clearHighlightElementList();
            highlightMgr.highlightElementList(item.list);

        });

        // For Delete
        $('.bv_selectionitem[rel=' + item.id + '] .bv_selection_btn_delete').click(function (e) {
            var toDelete = window.confirm('单击"确定"删除该标注。单击"取消"停止');
            if(toDelete){
               onDelete(item);
            }
        });

        // For Edit
        $('.bv_selectionitem[rel=' + item.id + '] .bv_selection_btn_edit').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_selectionitem');
            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            showDialog('编辑选择集', item.name, item.description, true, function(name, desc, isupdate){
                onEdit(item, name, desc, isupdate);
            });
        });

        itemlist.push(item);
    }

    function onAdd(name, description, isupdate){
        var item = new BIMVIZ.Selection(0, name, description, []);

        if(isupdate){
            item.list = highlightMgr.cloneHighlightElementList();
        }
        item.list = highlightMgr.cloneHighlightElementList();

        selectionSetManager.create(item, function(newitem){
            addSelectionSetToUi(item);
        });

    };

    function onEdit(item, name, description, isupdate){

        item.name = name;
        item.description = description;

        if(isupdate){
            item.list = highlightMgr.cloneHighlightElementList();
        }

        selectionSetManager.update(item, isupdate, function(){
            $('.bv_selectionitem[rel=' + item.id + '] .bv_selection_name span').html(name);
            $('.bv_selectionitem[rel=' + item.id + '] .bv_selection_description span').html(description);
            $('.bv_selectionitem[rel=' + item.id + '] .bv_selection_count span').html(item.list.length);
        });

    };

    function onDelete(item){

        selectionSetManager.delete(item.id, function(){
            $('.bv_selectionitem[rel=' + item.id + ']').remove();
            itemlist.remove(item);
        });
        
    };


    init();
};