BIMVIZ.UI.DefaultRoamingSettingControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultRoamingSettingControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultRoamingSettingControl.constructor = BIMVIZ.UI.DefaultRoamingSettingControl;

BIMVIZ.UI.DefaultRoamingSettingControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;

    var interactionhtml = '\
        <hr style="margin:5px;">\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" checked="" id="bv_groundShadow">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>地面阴影</span>\
            </label>\
        </div>\
        <hr style="margin:5px;">\
        <div class="padding-10 input-group">\
          <div class="row">\
            <div class="col-md-3" style="padding:10px 0 0 20px;width:60px;">主题\
           </div>\
            <div class="col-md-9" style="width:150px;">\
             <select class="form-control" id="bv_renderTheme">\
                <option value="Sketch"  selected = "selected">草图</option>\
                    <option value="AO">环境光影</option>\
                    <option value="White">白模</option>\
                    <option value="Pencil">素描</option>\
                </select>\
            </div>\
          </div>\
           <div class="row" style="margin-top:10px;">\
            <div class="col-md-3" style="padding:10px 0 0 20px;width:60px;">光照\
           </div>\
            <div class="col-md-9" style="width:150px;">\
             <select class="form-control" id="bv_lightingMode">\
                <option value="0" >关闭</option>\
                    <option value="1">稍暗</option>\
                    <option value="2" selected>明亮</option>\
                </select>\
            </div>\
          </div>\
        </div>\
        <hr style="margin:5px;">\
        <div id="bv_keymovementspeed" class="list-item-font padding-10">\
            <div class="margin-bottom-20">\
                <label for="txtspeed">键盘飞行速度（倍数）</label>\
                <input type="text" id="txtspeed" class="form-control">\
             </div>\
             <div class="slider-wrapper black-slider">\
                        <div id="bv_sliderspeed"></div>\
             </div>\
        </div>\
        <div id="bv_panspeed" class="list-item-font padding-10">\
            <div class="margin-bottom-20">\
                <label for="txtpanspeed">相机平移速度（倍数）</label>\
                <input type="text" id="txtpanspeed" class="form-control">\
             </div>\
             <div class="slider-wrapper black-slider">\
                        <div id="bv_sliderpanspeed"></div>\
             </div>\
        </div>\
         <div id="bv_zoomspeed" class="list-item-font padding-10">\
            <div class="margin-bottom-20">\
                <label for="txtzoomspeed">相机缩放速度（倍数）</label>\
                <input type="text" id="txtzoomspeed" class="form-control">\
             </div>\
             <div class="slider-wrapper black-slider">\
                        <div id="bv_sliderzoomspeed"></div>\
             </div>\
        </div>\
        <div id="bv_rotatespeed" class="list-item-font padding-10">\
            <div class="margin-bottom-20">\
                <label for="txtrotatespeed">相机旋转速度（倍数）</label>\
                <input type="text" id="txtrotatespeed" class="form-control">\
             </div>\
             <div class="slider-wrapper black-slider">\
                        <div id="bv_sliderrotatespeed"></div>\
             </div>\
        </div>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" checked="" id="bv_pickGrayScene">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>选中构件时场景全部透明</span>\
            </label>\
        </div>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
					<input type="checkbox" id="bv_pickWithCameraMove">\
					<span class="switch-label" data-on="YES" data-off="NO"></span>\
					<span>选中构件时相机跟随移动</span>\
			</label>\
        </div>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" id="bv_pickWithBox">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>选中构件时显示包围盒</span>\
            </label>\
        </div>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" id="bv_userFirstPersonView">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>使用第一视角观察</span>\
            </label>\
        </div>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" id="bv_enable1rdRoamingElevation">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>第一视角时，固定当前高度</span>\
            </label>\
        </div>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" id="bv_enable3rdViewFixedTarget">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>第三视角时，观察点位置固定</span>\
            </label>\
        </div>\
        <hr>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" id="bv_explodeMode">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>爆炸模式</span>\
            </label>\
        </div>\
        <div  class="list-item-font padding-10">\
             <div class="slider-wrapper black-slider">\
                <div id="bv_sliderExplodeFactor"></div>\
             </div>\
        </div>\
        ';

    var rate = 10000;
    container.html(interactionhtml);
    this.parentDiv.addClass("padding-15").removeClass("padding-20");
    container.css("width", "340px");
    $("#bv_sliderspeed").slider({
        value: scope.engine.getKeyControlMovementSpeed() / rate,
        animate: true,
        min: 0.1,
        max: 10,
        step: 0.1,
        range: "min",
        slide: function (event, ui) {
            $("#txtspeed").val(ui.value);
            scope.engine.setKeyControlMovementSpeed(ui.value * rate);
        }
    });

    $("#txtspeed").val($("#bv_sliderspeed").slider("value"));
    $("#txtspeed").change(function () {
        var value=$(this).val();
        if (value <= 0.1)
            value = 0.1;

        if (value >= 10)
            value = 10;

        $(this).val(value);
        $("#bv_sliderspeed").slider("value", value);
        scope.engine.setKeyControlMovementSpeed(value * rate);
    });

    $("#bv_sliderpanspeed").slider({
        value: scope.engine.getCameraPanSpeed(),
        animate: true,
        min: 0.1,
        max: 10,
        step: 0.1,
        range: "min",
        slide: function (event, ui) {
            $("#txtpanspeed").val(ui.value);
            scope.engine.setCameraPanSpeed(ui.value);
        }
    });

    $("#txtpanspeed").val($("#bv_sliderpanspeed").slider("value"));
    $("#txtpanspeed").change(function () {
        var value = $(this).val();
        if (value <= 0.1)
            value = 0.1;

        if (value >= 10)
            value = 10;

        $(this).val(value);
        $("#bv_sliderpanspeed").slider("value", value);
        scope.engine.setCameraPanSpeed(value);
    });

    $("#bv_sliderzoomspeed").slider({
        value: scope.engine.getCameraZoomSpeed(),
        animate: true,
        min: 0.1,
        max: 10,
        step: 0.1,
        range: "min",
        slide: function (event, ui) {
            $("#txtzoomspeed").val(ui.value);
            scope.engine.setCameraZoomSpeed(ui.value);
        }
    });

    $("#txtzoomspeed").val($("#bv_sliderzoomspeed").slider("value"));
    $("#txtzoomspeed").change(function () {
        var value = $(this).val();
        if (value <= 0.1)
            value = 0.1;

        if (value >= 10)
            value = 10;

        $(this).val(value);
        $("#bv_sliderzoomspeed").slider("value", value);
        scope.engine.setCameraZoomSpeed(value);
    });

    $("#bv_sliderrotatespeed").slider({
        value: scope.engine.getCameraRotateSpeed(),
        animate: true,
        min: 0.1,
        max: 10,
        step: 0.1,
        range: "min",
        slide: function (event, ui) {
            $("#txtrotatespeed").val(ui.value);
            scope.engine.setCameraRotateSpeed(ui.value);
        }
    });
    $("#txtrotatespeed").val($("#bv_sliderrotatespeed").slider("value"));
    $("#txtrotatespeed").change(function () {
        var value = $(this).val();
        if (value <= 0.1)
            value = 0.1;

        if (value >= 10)
            value = 10;

        $(this).val(value);
        $("#bv_sliderrotatespeed").slider("value", value);
        scope.engine.setCameraRotateSpeed(value);
    });

    $("#bv_pickWithCameraMove").change(function () {
        var ch = $(this).prop("checked");
         scope.engine.SelectSettings.cameraMove = ch;
    });

    $("#bv_pickGrayScene").change(function () {
        var ch = $(this).prop("checked");
         scope.engine.SelectSettings.grayScene = ch;
    });

    $("#bv_pickGrayScene").prop("checked", scope.engine.SelectSettings.grayScene);
    $("#bv_pickWithCameraMove").prop("checked", scope.engine.SelectSettings.cameraMove);

    $("#bv_pickWithBox").change(function () {
        var ch = $(this).prop("checked");
         scope.engine.getHighlightManager().setShowBox(ch);
    });

    $("#bv_userFirstPersonView").change(function () {
        var ch = $(this).prop("checked");
        var mode = ch ? 2 : 1;
        // MODE :
        // 1 -- Rotate to View Target
        // 2 -- Rotate to Camera Position
        scope.engine.setCameraRotateMode(mode);
    });

    $("#bv_enable3rdViewFixedTarget").change(function () {
        var ch = $(this).prop("checked");
       
        scope.engine.setCamera3rdViewFixedTarget(ch);
    });

    $("#bv_enable1rdRoamingElevation").change(function () {
        var ch = $(this).prop("checked");

        if(ch == true){
            var currentPosition = scope.engine.getCameraPosition();
            scope.engine.setCamera1rdRoamingFixedElevation(currentPosition.z);
        }
       
        scope.engine.enableCamera1rdRoamingFixedElevation(ch);
    });

    var explodeModeEnabled = false;
    var explodeDistanceFactor = {
        factor:0,
        step:0.5,
        max:10,
        list:null,
        center:null
    };
    $("#bv_explodeMode").change(function () {
        explodeModeEnabled = $(this).prop("checked");

        // Hide the ground
        scope.engine.showGround(!explodeModeEnabled);

        if(explodeModeEnabled){
            bimEngine.requestHighSpeed();
            var alllist = scope.engine.getElementNodeList();
            var elist = [];
            var box = new THREE.Box3();
            for (var i = 0; i < alllist.length; i++) {
                var node = alllist[i];
                if(node.Visible==true){
                    var transform = scope.engine.getElementTransform(node.Id);
                    if(transform){
                        transform.gid = node.Id;
                        elist.push(transform);
                        box.union(transform.box);
                    }
                }
            }

            explodeDistanceFactor = {
                factor:0,
                step:1,
                max:50,
                list:elist,
                center:box.getCenter()
            };

        }
        else{
            explodeDistanceFactor.factor = 0;
            onExplodeStep(0);
            bimEngine.removeHighSpeed();
        }

        
        $("#bv_sliderExplodeFactor").slider("value", explodeDistanceFactor.factor);
    });

    function onExplodeStep(factor){
        var elist = explodeDistanceFactor.list;
        var center = explodeDistanceFactor.center;

        var vec = new THREE.Vector3();
        for (var i = 0; i < elist.length; i++) {
            var transform = elist[i];

            vec.copy(transform.center).sub(center);
            vec.multiplyScalar(factor);
            transform.position.copy(vec);
            scope.engine.transformElement(transform.gid, transform);
            
        }
    }

    $("#bv_sliderExplodeFactor").slider({
        value: explodeDistanceFactor.factor,
        animate: false,
        min: 0,
        max: explodeDistanceFactor.max,
        step: explodeDistanceFactor.step,
        range: "min",
        slide: function (event, ui) {
            if(explodeModeEnabled==false){
                return;
            }
            explodeDistanceFactor.factor = ui.value;
            onExplodeStep(explodeDistanceFactor.factor);
        }
    });

    $("#bv_groundShadow").change(function () {
        var ch = $(this).prop("checked");
         scope.engine.setShowGroundShadow(ch);
    });

    $("#bv_groundShadow").prop("checked", scope.engine.isShowGroundShadow());

    $("#bv_renderTheme").change(function(){
       var mode = $(this).val();
       scope.engine.setRenderTheme(mode);
    });

     $("#bv_lightingMode").change(function(){
       var mode = $(this).val();
       scope.engine.setLightingMode(mode);
    });
};