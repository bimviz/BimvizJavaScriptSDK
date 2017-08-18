BIMVIZ.UI.DefaultFixedClipControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultFixedClipControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultFixedClipControl.constructor = BIMVIZ.UI.DefaultFixedClipControl;

BIMVIZ.UI.DefaultFixedClipControl.prototype.onShow = function(){
    var mgr = this.engine.getClipManager();
    var ch = $("#bv_fixed_clip_section_enable").prop("checked");
    mgr.setClipSectionVisible(ch);
};

BIMVIZ.UI.DefaultFixedClipControl.prototype.onHide = function(){
    var mgr = this.engine.getClipManager();
    mgr.setClipSectionVisible(false);
};

BIMVIZ.UI.DefaultFixedClipControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;
    var mgr = scope.engine.getClipManager();
    var itemlist = [];

    var interactionhtml = '\
         <hr>\
        <div id="bv_fixed_clip" class="list-item-font padding-10">\
            <div style="padding:0px 0px 0px 0px;">\
                <div style="width:15px;float:left;">X:</div>\
                <div style="width:30px;float:left;"><input id="bv_fixed_clip_range_x_enable" type="checkbox" style="width:20px;"></div>\
                <div style="width:180px;float:left;padding-top:7px;">\
                    <div class="slider-wrapper black-slider">\
                        <div id="bv_fixed_clip_range_x"></div>\
                    </div>\
                </div>\
            </div>\
            <br>\
            <br>\
            <div style="padding:0px 0px 0px 0px;">\
                <div style="width:15px;float:left;">Y:</div>\
                <div style="width:30px;float:left;"><input id="bv_fixed_clip_range_y_enable" type="checkbox" style="width:20px;"></div>\
                <div style="width:180px;float:left;padding-top:7px;">\
                    <div class="slider-wrapper black-slider">\
                        <div id="bv_fixed_clip_range_y"></div>\
                    </div>\
                </div>\
            </div>\
            <br>\
            <br>\
            <div style="padding:0px 0px 0px 0px;">\
                <div style="width:15px;float:left;">Z:</div>\
                <div style="width:30px;float:left;"><input id="bv_fixed_clip_range_z_enable" type="checkbox" style="width:20px;"></div>\
                <div style="width:180px;float:left;padding-top:7px;">\
                    <div class="slider-wrapper black-slider">\
                        <div id="bv_fixed_clip_range_z"></div>\
                    </div>\
                </div>\
            </div>\
            <br>\
            <br>\
            <div style="padding:0px 0px 0px 18px;">\
                <div class="pull-left">\
                    <div style="width:25px;float:left;"><input id="bv_fixed_clip_section_enable" type="checkbox" checked="checked" ></div>\
                    <div style="width:95px;float:left;">显示辅助剖面</div>\
                </div>\
            </div>\
            <br>\
            <br>\
            <hr style="margin:0px;">\
            <div style="padding:0px 0px 0px 5px;">\
                <div class="pull-left">\
                    <a class="btn" id="bv_fixed_clip_save"><i class="fa fa-save"></i> 保存当前剖面</a>\
                </div>\
            </div>\
        </div>\
        <hr style="margin:0px;">\
        <div id="bv_fixed_clip_items" style="margin:0px 0px 0px 0px;">\
        </div>\
        ';


    container.html(interactionhtml);
    this.parentDiv.addClass("padding-15").removeClass("padding-20");
    container.css("width", "300px");

    $("#bv_fixed_clip_range_x").slider({
        animate: true,
        min: -1,
        max: 1,
        step: 0.01,
        range: true,
        values:[-1, 1],
        slide: function (event, ui) {
            mgr.setRangeX(ui.values[0], ui.values[1]);
        }
    });


    $("#bv_fixed_clip_range_x_enable").change(function () {
        var ch = $(this).prop("checked");
         mgr.enableX(ch);
    });

    $("#bv_fixed_clip_range_y").slider({
        animate: true,
        min: -1,
        max: 1,
        step: 0.01,
        range: true,
        values:[-1, 1],
        slide: function (event, ui) {
            mgr.setRangeY(ui.values[0], ui.values[1]);
        }
    });


    $("#bv_fixed_clip_range_y_enable").change(function () {
        var ch = $(this).prop("checked");
         mgr.enableY(ch);
    });


     $("#bv_fixed_clip_range_z").slider({
        animate: true,
        min: -1,
        max: 1,
        step: 0.01,
        range: true,
        values:[-1, 1],
        slide: function (event, ui) {
            mgr.setRangeZ(ui.values[0], ui.values[1]);
        }
    });


    $("#bv_fixed_clip_range_z_enable").change(function () {
        var ch = $(this).prop("checked");
         mgr.enableZ(ch);
    });

    $("#bv_fixed_clip_section_enable").change(function () {
        var ch = $(this).prop("checked");
         mgr.setClipSectionVisible(ch);
    });

    $("#bv_fixed_clip_save").click(function(e){
        e.stopPropagation();

        var name = window.prompt("请输入名称","");
        if(name && name!=""){
            scope.engine.getSnapShot(600, 300, function(url){
                var pos = scope.engine.getCameraPosition();
                var target = scope.engine.getCameraTarget();
                var settings = mgr.getClipSettings();
                
                 var clipItem = new BIMVIZ.ClipItem(name, pos, target, url, settings);
                mgr.createClipItem(clipItem, function(newitem){
                    addClipItem(newitem);
                });
            });
        }


    });

     var itemTemplate = '<div class="bimviz_fixed_clip_item" rel="{0}">\
                            <div class="bimviz_fixed_clip_item_img" style="background:url({1});background-size:cover;">\
                                <span>\
                                    <a><i class="fa fa-trash bimviz_fixed_clip_item_delete"></i></a>\
                                    <a><i class="fa fa-edit bimviz_fixed_clip_item_edit"></i></a>\
                                </span>\
                            </div>\
                            <div class="bimviz_fixed_clip_item_span">{2}</div>\
                        </div>';

     function popupItems(){
        mgr.getClipItemList(function(success, list){
            if(success){
                itemlist = [];

                $('#bv_fixed_clip_items').find(".bimviz_fixed_clip_item").remove();
                list.forEach(function (item) {
                    addClipItem(item);
                });
            }
        });
     }

     function addClipItem(item){
        var txt = itemTemplate.format(item.id, item.imageurl, item.name);
        $('#bv_fixed_clip_items').append(txt);

            // For Click
        $('.bimviz_fixed_clip_item[rel=' + item.id + '] .bimviz_fixed_clip_item_img').click(function (e) {
            var pos = item.position;
            var target = item.target;

            mgr.applyClipSettings(item.settings);

            $('#bv_fixed_clip_range_x_enable').prop("checked", item.settings.enableX);
            $('#bv_fixed_clip_range_y_enable').prop("checked", item.settings.enableY);
            $('#bv_fixed_clip_range_z_enable').prop("checked", item.settings.enableZ);

            $("#bv_fixed_clip_range_x").slider("values", 0, item.settings.xmin);
            $("#bv_fixed_clip_range_x").slider("values", 1, item.settings.xmax);

            $("#bv_fixed_clip_range_y").slider("values", 0, item.settings.ymin);
            $("#bv_fixed_clip_range_y").slider("values", 1, item.settings.ymax);

            $("#bv_fixed_clip_range_z").slider("values", 0, item.settings.zmin);
            $("#bv_fixed_clip_range_z").slider("values", 1, item.settings.zmax);

            $("#bv_fixed_clip_section_enable").prop("checked", item.settings.show);
            
            scope.engine.flyFromTo(pos, target, function(){
                
                scope.engine.requestOneUpdate();
            });
        });

        // For Delete
        $('.bimviz_fixed_clip_item[rel=' + item.id + '] .bimviz_fixed_clip_item_delete').click(function (e) {
            e.stopPropagation();

            var toDelete = window.confirm('单击"确定"删除该标签。单击"取消"停止');
            if(toDelete){
                mgr.deleteClipItem(item.id, function(){
                    $('.bimviz_fixed_clip_item[rel=' + item.id + ']').remove();
                    itemlist.remove(item);
                });
            }
        });

        // For Edit
        $('.bimviz_fixed_clip_item[rel=' + item.id + '] .bimviz_fixed_clip_item_edit').click(function (e) {
            e.stopPropagation();

            var name = window.prompt("请输入名称","");
            if(name && name!=""){
                item.name = name;
                mgr.updateClipItem(item, function(){
                    $('.bimviz_fixed_clip_item[rel=' + item.id + '] .bimviz_fixed_clip_item_span').html(item.name);
                });
            }

        });

        itemlist.push(item);
     };


     popupItems();
};