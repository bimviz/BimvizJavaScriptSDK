BIMVIZ.UI.DefaultRoamingSettingControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultRoamingSettingControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultRoamingSettingControl.constructor = BIMVIZ.UI.DefaultRoamingSettingControl;

BIMVIZ.UI.DefaultRoamingSettingControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;

    var interactionhtml = '\
         <hr>\
        <div id="bv_panspeed" class="list-item-font padding-10">\
            <div class="margin-bottom-20">\
                <label for="txtspeed">漫游飞行速度（倍数）</label>\
                <input type="text" id="txtspeed" class="form-control">\
             </div>\
             <div class="slider-wrapper black-slider">\
                        <div id="bv_sliderspeed"></div>\
             </div>\
        </div>\
        <hr>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" checked="" id="bv_pickGrayScene">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>选中构件时场景全部透明</span>\
            </label>\
        </div>\
        <hr>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
					<input type="checkbox" checked="" id="bv_pickWithCameraMove">\
					<span class="switch-label" data-on="YES" data-off="NO"></span>\
					<span>选中构件时相机跟随移动</span>\
			</label>\
        </div>\
        <hr>\
        <div class="padding-10 input-group">\
            <label class="switch switch-default switch-round">\
                    <input type="checkbox" id="bv_pickWithBox">\
                    <span class="switch-label" data-on="YES" data-off="NO"></span>\
                    <span>选中构件时显示包围盒</span>\
            </label>\
        </div>\
        <hr>\
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
};