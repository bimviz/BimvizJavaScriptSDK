
BIMVIZ.UI.DefaultHtmlMarkerControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);


};

BIMVIZ.UI.DefaultHtmlMarkerControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultHtmlMarkerControl.constructor = BIMVIZ.UI.DefaultHtmlMarkerControl;

BIMVIZ.UI.DefaultHtmlMarkerControl.prototype.onShow = function(){
    if(this.hintIconMarker != null){
        this.hintIconMarker.show(true);
    }
};

BIMVIZ.UI.DefaultHtmlMarkerControl.prototype.onHide = function(){
    if(this.hintIconMarker != null){
        this.hintIconMarker.show(false);
    }
};

BIMVIZ.UI.DefaultHtmlMarkerControl.prototype.onProjectLoaded = function(project){
	
    var scope = this;
    var container = this.parentDiv;

    var lastClickItem = null;
    var itemlist = [];

    var markerManager = scope.engine.getMarkerManager();

    var markerTypes = {};

    markerTypes["icon"] = {
            html:'<div id="{0}" style="position:absolute;">\
                <img src="'+scope.engine.ResourcePath + '/images/markers/business.png" style="cursor: pointer;">\
            </div>',
            text:'图标',
            icon:'type_icon.png'
        };


    markerTypes["textbox"] = {
            html:'<div id="{0}" style="position:absolute;">\
            <div class="panel panel-info" style="width:200px;">\
                <div class="panel-heading">\
                    <h2 class="panel-title">{1}</h2>\
                </div>\
                <div class="panel-body list-item-font">\
                    {2}\
                </div>\
            </div>\
            </div>',
            text:'提示框',
            icon:'type_textbox.png'
        };

    markerTypes["progress"] = {
            html:'<div id="{0}" class="panel panel-info" style="position:absolute;">\
            <label style="color:white;margin:5px;">{1}</label>\
            <div class="progress" style="width:150px;margin:0px">\
                    <div class="progress-bar progress-bar-success" style="width: 35%">\
                        <span class="sr-only">35% Complete (success)</span>\
                    </div>\
                    <div class="progress-bar progress-bar-warning" style="width: 20%">\
                        <span class="sr-only">20% Complete (warning)</span>\
                    </div>\
                    <div class="progress-bar progress-bar-danger" style="width: 10%">\
                        <span class="sr-only">10% Complete (danger)</span>\
                    </div>\
            </div>\
            </div>',
            text:'进度框',
            icon:'type_progress.png'
        };

    markerTypes["gif"] = {
            html:'<div id="{0}" style="position:absolute;width:36px;height:36px;padding:3px;background-color:white;" class="panel">\
                <img src="'+scope.engine.ResourcePath + '/images/markers/clock.gif" style="cursor: pointer;width:28px;height:28px;">\
            </div>',
            text:'GIF',
            icon:'type_gif.png'
        };

    markerTypes["switch"] = {
        html:'<div id="{0}" style="position:absolute;padding-left:10px;" class="panel panel-info" >\
                <label style="color:white;">{1}</label>\
               <label class="switch switch-success switch-round">\
                    <input type="checkbox" checked="">\
                    <span class="switch-label" data-on="开" data-off="关"></span>\
                </label>\
            </div>',
        text:'开关',
        icon:'type_switch.png'
        };

    markerTypes["text-green"] = {
        html:'<div id="{0}" style="position:absolute;">\
                <a href="#" class="btn btn-3d btn-success"><i class="et-trophy"></i>{1}</a>\
            </div>',
        text:'文字(green)',
        icon:'type_text.png' 
    };

    markerTypes["text-blue"] = {
        html:'<div id="{0}" style="position:absolute;">\
                                <a href="#" class="btn btn-3d btn-blue">\
                                    <i class="glyphicon glyphicon-cog"></i>{1}</a>\
                            </div>',
        text:'文字(blue)',
        icon:'type_text.png' 
    };

    markerTypes["text-yellow"] = {
        html:'<div id="{0}" style="position:absolute;">\
                                <a href="#" class="btn btn-3d btn-amber">\
                                    <i class="glyphicon glyphicon-flash"></i>{1}</a>\
                            </div>',
        text:'文字(yellow)',
        icon:'type_text.png' 
    };

    markerTypes["text-red"] = {
        html:'<div id="{0}" style="position:absolute;">\
                                <a href="#" class="btn btn-3d btn-red">\
                                    <i class="glyphicon glyphicon-fire"></i>{1}</a>\
                            </div>',
        text:'文字(red)',
        icon:'type_text.png' 
    };

    markerTypes["text-white"] = {
        html:'<div id="{0}" style="position:absolute;">\
                                <a href="#" class="btn btn-3d btn-white">\
                                    <i class="glyphicon glyphicon-leaf"></i>{1}</a>\
                            </div>',
        text:'文字(white)',
        icon:'type_text.png' 
    };


    markerTypes["textbox-y"] = {
        html:'<div id="{0}" style="position:absolute;">\
               <label class="textboxY">\
                    <p class="textboxY-box">\
                        <span>{1}</span>\
                        <span class="textboxY-triangle"></span>\
                    </p>\
                    <img class="textboxY-icon" src="'+scope.engine.ResourcePath + '/images/markers/1.png" style="width: 33px; height: 33px;">\
                </label>\
            </div>',
        text:'textbox-y',
        icon:'type_text.png' 
    };

    markerTypes["textbox-x"] = {
        html:'<div id="{0}" style="position:absolute;">\
               <label class="textboxX">\
                    <p class="textboxX-box">\
                        <span class="textboxX-text"><img src="'+scope.engine.ResourcePath + '/images/markers/turning.gif" />{1}</span>\
                        <span class="textboxX-triangle"></span>\
                    </p>\
                </label>\
            </div>',
        text:'textbox-x',
        icon:'type_text.png' 
    };

    this.hintIconMarker = null;

    var template = '<div class="border-bottom-1  bv_htmlmarkeritem" rel="{0}" style="padding:15px 15px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-left:10px;">\
                                    <img class="bv_selection_icon" src="{3}" style="width:36px;height:auto;" />\
                                </div>\
                                <div class="col-md-7 col-sm-7 col-xs-7 padding-0" >\
                                    <a style="text-decoration: none" class="bv_htmlmarker_href" >\
                                        <div class="list-item-font bv_htmlmarker_name">名称:<span>{1}</span></div>\
                                        <div class="list-item-font bv_htmlmarker_usertype">类别:<span>{2}</span></div>\
                                    </a>\
                                </div\
                                <div class="col-md-3 col-sm-3 col-xs-3 col">\
                                   <a><i class="ico-light ico-rounded ico-xs ico-hover fa fa-close bv_htmlmarker_btn_delete"></i></a>\
                                   <a><i class="ico-light ico-rounded ico-xs ico-hover fa fa-edit bv_htmlmarker_btn_edit"></i></a>\
                                </div>\
                            </div>\
                        </div>';

    function init(){
        var controlHtml = '<div id="bv_htmlmarkerbar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                            <div class="input-group pull-left">\
                    <label class="switch switch-primary switch-round">\
                        <input type="checkbox" id="bv_htmlmarkshowall">\
                        <span class="switch-label" data-on="" data-off=""></span>\
                        <span> 显示标注 </span>\
                    </label>\
                </div>\
                <span class="pull-right">\
                    <button class="btn btn-default  height-30" id="bv_btnHtmlMarkerCreate">创建</button>\
                </span>\
            </div>\
            <div id="htmlmarkerdetail" class="padding-20 bottom-border-1" style="display:none;">\
                                    <label>名称：</label><input class="form-control" id="bv_htmlmarker_input_name" type="text"  />\
                                    <label style="margin-top:20px;">类型：</label>\
                                    <div class="fancy-form fancy-form-select" >\
                                        <select class="form-control"  id="bv_htmlmarker_input_type">\
                                            <option value="icon">图标</option>\
                                            <option value="textbox">提示框</option>\
                                            <option value="progress">进度框</option>\
                                            <option value="gif">GIF计时器</option>\
                                            <option value="switch">开关</option>\
                                            <option value="text-green">文字(green)</option>\
                                            <option value="text-blue">文字(blue)</option>\
                                            <option value="text-yellow">文字(yellow)</option>\
                                            <option value="text-red">文字(red)</option>\
                                            <option value="text-white">文字(white)</option>\
                                        </select>\
                                        <i class="fancy-arrow"></i>\
                                    </div>\
                                     <label style="margin-top:20px;">对齐方式：</label>\
                                    <div class="fancy-form fancy-form-select" >\
                                        <select class="form-control"  id="bv_htmlmarker_input_align">\
                                            <option value="0">顶部左侧</option>\
                                            <option value="1">顶部中心</option>\
                                            <option value="2">顶部右侧</option>\
                                            <option value="3">中部左侧</option>\
                                            <option value="4">中部中心</option>\
                                            <option value="5">中部右侧</option>\
                                            <option value="6">底部左侧</option>\
                                            <option value="7">底部中心</option>\
                                            <option value="8">底部右侧</option>\
                                        </select>\
                                        <i class="fancy-arrow"></i>\
                                    </div>\
                                    <label style="margin-top:20px;">可见距离：(单位m,0表示永远可见)</label><input class="form-control" id="bv_htmlmarker_input_visibleDistance" type="text"  value="0" />\
                                    <div  style="margin-top:20px;" >\
                                    <label>描述：</label>\
                                    <textarea class="form-control" rows="3"  id="bv_htmlmarker_input_userdata"></textarea>\
                                    </div>\
            </div>\
            <div id="bv_htmlmarkeritems"  class="padding-20 nopadding-top disabledui"></div>';

        container.html(controlHtml);
        scope.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

        $('#bv_btnHtmlMarkerCreate').click(function (e) {
            var para = {
                name:"Name",
                userdata:"构件简单介绍说明",
                visibleDistance:0,
                type:"icon",
                align:7,
            };
            showDialog('创建HTML标记', para, function(parameters){
                onAdd(parameters);
            });
            
        });

        $("#bv_htmlmarkshowall").change(function () {
            var ch = $(this).prop("checked");
            markerManager.showAllHtmlMarker(ch);

            if(ch==false){
                $('#bv_htmlmarkeritems').addClass("disabledui");
            }
            else{
                 $('#bv_htmlmarkeritems').removeClass("disabledui");
            }
            
        });


        var hintIconId = "bv_hintIconMarker";
        var hintIconUrl = scope.engine.ResourcePath + "images/markers/bluedock.png";
        var hintIconMarkerHtml = '<div id="'+hintIconId+'" style="position:absolute;">\
                <img src="'+hintIconUrl+'" style="cursor: pointer;width:20px;height:auto;">\
            </div>';

        var pos = new THREE.Vector3();
        scope.hintIconMarker = new BIMVIZ.HtmlMarker(hintIconId, hintIconId, hintIconId, pos, 
            hintIconMarkerHtml, BIMVIZ.Align2D.BottomCenter, +Infinity,
            "System:HintIcon", "System");
        scope.hintIconMarker.show(false);
        markerManager.addHintHtmlMarker(scope.hintIconMarker);

        scope.engine.addListener(BIMVIZ.EVENT.OnPickElement,function(evt){

            // If we are in add mode, then hint icon is show
            if(scope.hintIconMarker && scope.hintIconMarker.visible==true){
                var pos = evt.args.point;
                scope.hintIconMarker.position = pos.clone().sub(scope.engine.CenterPosition);
                scope.engine.requestOneUpdate();

                // Get the pick point is enough in this mode.
                // Cancel this pick, otherwise hightlight will occur
                evt.args.cancel = true;
            }
        });

        scope.engine.addListener(BIMVIZ.EVENT.OnSceneLoadCompleted, function(event){
            markerManager.createHtmlMarkerListFromDb(function(list){
                popupHtmlMarkers(list);
        });
    });
    }

    function showDialog(dialogTitle, parameters, callback){
            $('#bv_htmlmarker_input_name').val(parameters.name);
            $('#bv_htmlmarker_input_userdata').val(parameters.userdata);
            $('#bv_htmlmarker_input_type').val(parameters.type);
            $('#bv_htmlmarker_input_align').val(parameters.align+'');
            $('#bv_htmlmarker_input_visibleDistance').val(parameters.visibleDistance+'');

            if(parameters.edit){
                $('#bv_htmlmarker_input_type').attr("disabled","disabled");
            }
            else{
                 $('#bv_htmlmarker_input_type').removeAttr("disabled");
            }

            $("#htmlmarkerdetail").dialog({
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
                            var newParameters = {
                                name:$('#bv_htmlmarker_input_name').val(),
                                type:$('#bv_htmlmarker_input_type').val(),
                                userdata:$('#bv_htmlmarker_input_userdata').val(),
                                align:parseInt($('#bv_htmlmarker_input_align').val()),
                                visibleDistance:parseFloat($('#bv_htmlmarker_input_visibleDistance').val()),
                            };

                            callback(newParameters);
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
    
    function popupHtmlMarkers(list) {
        itemlist = [];
        var $container = $('#bv_htmlmarkeritems');
        $container.html('');

        list.forEach(function (item) {
            item.show(false);
            addToListUi(item);
        });
    }

    function addToListUi(item) {
        var $container = $('#bv_htmlmarkeritems');
        
        var typeinfo = markerTypes[item.usertype];

        var defaulticon = scope.engine.ResourcePath + "images/markers/" + typeinfo.icon;
        var text = template.format(item.id, item.name, typeinfo.text, defaulticon);
        $container.append(text);

        // For Click
        $('.bv_htmlmarkeritem[rel=' + item.id + '] .bv_htmlmarker_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_htmlmarkeritem');
            var id = parent.attr('rel');

            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;


            var dom = $("#"+item.domId);
            dom.hide(100);
            dom.fadeIn(500);

            var bimPosition = item.position.clone().add(scope.engine.CenterPosition);
            scope.engine.flyToPositionByDistance(bimPosition, 20000, function(){
                    
            });
           
        });

        // For Delete
        $('.bv_htmlmarkeritem[rel=' + item.id + '] .bv_htmlmarker_btn_delete').click(function (e) {
            var toDelete = window.confirm('单击"确定"删除该标注。单击"取消"停止');
            if(toDelete){
               onDelete(item);
            }
        });

        // For Edit
        $('.bv_htmlmarkeritem[rel=' + item.id + '] .bv_htmlmarker_btn_edit').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_htmlmarkeritem');
            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            var para = {
                name:item.name,
                type:item.usertype,
                align:item.align,
                userdata:item.userdata,
                visibleDistance:item.visibleDistance,
                edit:true
            };

            if(para.visibleDistance==+Infinity){
                para.visibleDistance = 0;
            }

            para.visibleDistance /= 1000;

            showDialog('编辑HTML标记', para, function(parameters){
                onEdit(item, parameters);
            });
        });

        itemlist.push(item);
    }

    function onAdd(parameters){
        var pos = scope.hintIconMarker.position;
        var id = new Date().getTime();
        var domId = "div_test_html_marker_" + id;
        var htmlText = markerTypes[parameters.type].html.format(domId, parameters.name, parameters.userdata);
        var usertype = parameters.type;
        var align = parameters.align;
        var visibleDistance = parameters.visibleDistance;

        if(visibleDistance<=0)
            visibleDistance = +Infinity;
        else
            visibleDistance *= 1000; // From M to mm

        var marker = new BIMVIZ.HtmlMarker(id, parameters.name, domId, pos, htmlText, align, visibleDistance, usertype, parameters.userdata);
        markerManager.addHtmlMarker(marker);
        markerManager.saveDbHtmlMarker(marker, function(){
            addToListUi(marker);
        });

        scope.engine.requestOneUpdate();
    };

    function onEdit(item, parameters){
       
        item.name = parameters.name;
        item.userdata = parameters.userdata;

        var typeinfo = markerTypes[item.usertype];
        item.html = typeinfo.html.format(item.domId, item.name, item.userdata);

        $('.bv_htmlmarkeritem[rel=' + item.id + '] .bv_htmlmarker_name span').html(item.name);
        $('.bv_htmlmarkeritem[rel=' + item.id + '] .bv_htmlmarker_usertype span').html(typeinfo.text);

        var visibleDistance = parameters.visibleDistance;

        if(visibleDistance<=0)
            visibleDistance = +Infinity;
        else
            visibleDistance *= 1000; // From M to mm

        item.visibleDistance = visibleDistance;
        item.align = parameters.align;

        markerManager.updateHtmlMarker(item);
        markerManager.saveDbHtmlMarker(item);

        scope.engine.requestOneUpdate();
    };

    function onDelete(item){
        markerManager.removeDbHtmlMarker(item.id, function(){
            markerManager.removeHtmlMarker(item.id);
            $('.bv_htmlmarkeritem[rel=' + item.id + ']').remove();
        });
    };


    init();

};