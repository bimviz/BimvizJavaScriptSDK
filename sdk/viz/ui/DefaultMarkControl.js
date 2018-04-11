
BIMVIZ.UI.DefaultMarkControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);


};

BIMVIZ.UI.DefaultMarkControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultMarkControl.constructor = BIMVIZ.UI.DefaultMarkControl;

BIMVIZ.UI.DefaultMarkControl.prototype.onProjectLoaded = function(project){
	
    var scope = this;
    var container = this.parentDiv;
    var CreateMode = { None: 0, Create: 1 };
    var workMode = CreateMode.None;
    var lastClickItem = null;
    var markers = [];
    var markerpath = scope.engine.ResourcePath;
    var markerDetailDialog = null;

    function init(){
        var controlHtml = '<div id="bv_markerbar" class="padding-20 border-bottom-1" style="width:100%;height:70px;">\
                <div class="input-group pull-left">\
                    <label class="switch switch-primary switch-round">\
                        <input type="checkbox" id="bv_markshowall">\
                        <span class="switch-label" data-on="" data-off=""></span>\
                        <span> 显示标注 </span>\
                    </label>\
                </div>\
                <span class="pull-right">\
                    <button class="btn btn-default  height-30" id="bv_btnMarkerBarCreate">创建</button>\
                </span>\
            </div>\
            <div id="markerdetail" class="padding-20 bottom-border-1" style="display:none;margin-bottom:30px;">\
                                    <label>名称：</label><input class="form-control bv_marker_input_name" type="text"  />\
                                    <label>描述：</label><input class="form-control bv_marker_input_desc" type="text" />\
                                    <label>开发数据：</label><input  class="form-control bv_marker_input_userdata" type="text" />\
                                    <label>坐标：</label><input  class="form-control bv_marker_input_position" type="text" />\
                                    <label>尺寸：</label><input  class="form-control bv_marker_input_size" type="text"  value="1000"/>\
                                    <label>图标：</label>\
                                    <select class="form-control bv_marker_input_icon">\
                                        <option value="images/markers/1.png"  selected = "selected">images/markers/1.png</option>\
                                        <option value="images/markers/2.png">images/markers/2.png</option>\
                                        <option value="images/markers/3.png">images/markers/3.png</option>\
                                        <option value="images/markers/4.png">images/markers/4.png</option>\
                                        <option value="images/markers/5.png">images/markers/5.png</option>\
                                    </select>\
                                    <button class="margin-top-10 btn btn-default pull-right bv_marker_btn_ok">确定</button>\
                                    <button class="margin-top-10 btn btn-default pull-right bv_marker_btn_pick">选点</button>\
                                    <button class="margin-top-10 btn btn-default pull-right bv_marker_btn_cancel">关闭</button>\
            </div>\
            <div id="bv_markeritems"></div>';

        container.html(controlHtml);

        markerDetailDialog = new BIMVIZ.UI.MarkerDetailPanel(scope.engine, $('#markerdetail'), scope);

        $('#bv_btnMarkerBarCreate').click(function (e) {
            markerDetailDialog.start();
        });

        $("#bv_markshowall").change(function () {
            var ch = $(this).prop("checked");
            scope.engine.showAllMarker(ch);
        });

        
        scope.engine.addListener(BIMVIZ.EVENT.OnPickMarker, onMarkerClicked);
    }
    
    function popupMarkers(newmarkers) {
        markers = [];
        var $container = $('#bv_markeritems');
        $container.html('');

        var template = $('#marker_template').html();
        newmarkers.forEach(function (item) {
            addMarkerToUi(item);
        });
    }

    function addMarkerToUi(item) {
        var $container = $('#bv_markeritems');
        var template = '<div class="border-bottom-1  bv_markeritem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-left:20px;">\
                                    <img class="bv_marker_icon" src="{3}" style="width:36px;height:auto;" />\
                                </div>\
                                <div class="col-md-7 col-sm-7 col-xs-7 padding-0">\
                                    <a style="text-decoration: none" class="bv_marker_href">\
                                        <div class="list-item-font bv_marker_name">名称:{1}</div>\
                                        <div class="list-item-fontsmall bv_marker_description">信息:{2}</div>\
                                    </a>\
                                </div\
                                <div class="col-md-3 col-sm-3 col-xs-3 col" style="">\
                                   <a><i class="ico-light ico-rounded ico-xs ico-hover fa fa-close bv_marker_btn_delete"></i></a>\
                                   <a><i class="ico-light ico-rounded ico-xs ico-hover fa fa-edit bv_marker_btn_edit"></i></a>\
                                </div>\
                            </div>\
                        </div>';

        var defaulticon = markerpath + "arts-crafts.png";
        if (item.icon) {
            defaulticon = markerpath + item.icon;
        }
        var text = template.format(item.id, item.title, item.description, defaulticon);
        $container.append(text);

        // For Click this marker
        $('.bv_markeritem[rel=' + item.id + '] .bv_marker_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_markeritem');
            var id = parent.attr('rel');

            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            scope.engine.flyToPosition(item.point, function(){
                scope.engine.animateMarker(id);
            });
            
        });

        // For Delete
        $('.bv_markeritem[rel=' + item.id + '] .bv_marker_btn_delete').click(function (e) {
            var toDelete = window.confirm('单击"确定"删除该标注。单击"取消"停止');
            if(toDelete){
               scope.onDelete(item.id);
            }
        });

        // For Edit
        $('.bv_markeritem[rel=' + item.id + '] .bv_marker_btn_edit').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_markeritem');
            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            markerDetailDialog.edit(item);
        });

        markers.push(item);
    }

    function onMarkerClicked(evt) {
        var data = evt.args;
        var marker = data.userdata;
       
        // remove this line, since $('.bv_markeritem[rel=' + item.id + '] .bv_marker_href').click will call
        // scope.engine.animateMarker(marker.id);

        $('.bv_markeritem[rel=' + marker.id + '] a').trigger('click');
    }

    this.onAddNew = function(marker){       
        scope.engine.createMarker(marker, function () {
            addMarkerToUi(marker);
            scope.engine.showMarker(marker.id, true);
            scope.engine.animateMarker(marker.id);
        });
    };

    this.onSave = function(marker){
        scope.engine.saveMarker(marker, function(){
            var div = $('.bv_markeritem[rel=' + marker.id + ']');
            div.find('.bv_marker_icon').attr('src', scope.engine.ResourcePath + marker.icon);
            div.find('.bv_marker_name').html('名称:'+marker.title);
            div.find('.bv_marker_description').html('信息:'+marker.description);
            scope.engine.animateMarker(marker.id);
        });
    };

    this.onDelete = function(id){
        scope.engine.removeMarker(id, function(){
            $('.bv_markeritem[rel=' + id + ']').remove();
        });
    };

    init();
    popupMarkers(project.markers);
};

BIMVIZ.UI.MarkerDetailPanel = function(bimEngine, container, parentPanel){
    this.marker = null;
    
    var isCreateMode = false;
    var scope = this;
    var isInPickPoint = false;
    var inputName = container.find('.bv_marker_input_name');
    var inputDesc = container.find('.bv_marker_input_desc');
    var inputUserdata = container.find('.bv_marker_input_userdata');
    var inputPosition = container.find('.bv_marker_input_position');
    var inputSize = container.find('.bv_marker_input_size');
    var inputIcon = container.find('.bv_marker_input_icon');


    container.find('.bv_marker_btn_cancel').click(function(){
        scope.hide();
        if(isInPickPoint){
            bimEngine.cancelAcquireSpacePoint();
        }
    });

    container.find('.bv_marker_btn_ok').click(function(){
        if(isInPickPoint){
            bimEngine.cancelAcquireSpacePoint();
            isInPickPoint = false;
        }

        if(inputName.val()==''){
            alert("请填写名称");
            return;
        }

        if(inputDesc.val()==''){
            alert("请填写描述");
            return;
        }

        if(inputIcon.val()==''){
            alert("请选择图标");
            return;
        }

        if(inputPosition.val()=='0,0,0'){
            alert("请选择三维坐标");
            return;
        }

        scope.marker.title = inputName.val();
        scope.marker.description = inputDesc.val();
        scope.marker.userdata = inputUserdata.val();
        scope.marker.icon = inputIcon.val();
        scope.marker.width = Number(inputSize.val());

        if(isCreateMode){
            parentPanel.onAddNew(scope.marker);
            scope.start();
        }
        else{
            parentPanel.onSave(scope.marker);
        }
        
    });

    container.find('.bv_marker_btn_pick').click(function(){
        if(!isInPickPoint){
            // Start pick a mouse position in 3d scene, when get, framework will call the callback function
            bimEngine.acquireSpacePoint(function(data){
                scope.marker.point = data.point;
                inputPosition.val(scope.marker.point.x.toFixed(2)+","+scope.marker.point.y.toFixed(2)+","+scope.marker.point.z.toFixed(2));
                isInPickPoint = false;
            });

            isInPickPoint = true;
        }
    })
    
    this.clear = function(){
        container.find('input').val('');
    };

    this.show = function(){ 
        container.show();
    };

    this.hide = function(){ 
        container.hide();
        bimEngine.getTransformControl().finish();
        bimEngine.requestAnyOneUpdate();
    };

    this.start = function(){
        isCreateMode = true;

        this.clear();
        this.show();

        // Create an empty marker for ui
        var emptymarker = new BIMVIZ.Entity.Marker(new Date().getTime(), "", null, "", "", null);

        // Show the marker data
        this.attachMarker(emptymarker);
    };

    this.edit = function(marker){
        isCreateMode = false;

        this.clear();
        this.show();
        this.attachMarker(marker);
    };

    this.attachMarker = function(marker){
        this.marker = marker;
        inputName.val(marker.title);
        inputDesc.val(marker.description);
        inputUserdata.val(marker.userdata);
        inputPosition.val(marker.point.x+","+marker.point.y+","+marker.point.z);
        inputSize.val(marker.width);

        if(marker.icon){
            inputIcon.val(marker.icon);
        }

        if(isCreateMode==false){
            var control = bimEngine.getTransformControl();
            control.transform3dMarker(marker.id, function(transoformData){
                inputPosition.val(transoformData.position.x+","+transoformData.position.y+","+transoformData.position.z);
                marker.point.copy(transoformData.position);
            });
        }

        bimEngine.requestAnyOneUpdate();
    };
};