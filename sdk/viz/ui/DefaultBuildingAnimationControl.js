BIMVIZ.UI.DefaultBuildingAnimationControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultBuildingAnimationControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultBuildingAnimationControl.constructor = BIMVIZ.UI.DefaultBuildingAnimationControl;

BIMVIZ.UI.DefaultBuildingAnimationControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;
    var transformListX1 = [];
    var transformListX2 = [];

    var isStart = false;
    var interactionhtml = '\
        <div class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                 <div class="input-group pull-left">\
                    <div class="pull-right" >\
                        <a style="padding-top:4px;" class="btn" id="bv_startBuildingAnimation"><i class="fa fa-desktop"></i> 开始</a>\
                    </div>\
                </div>\
        </div>\
        ';

    container.html(interactionhtml);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    container.css("width", "400px");

    function xAscSort( a, b ) {

        return a.center.x - b.center.x;

    };

    function xDscSort( a, b ) {

        return b.center.x - a.center.x;

    };

    $("#bv_startBuildingAnimation").click(function () {
        var elist = scope.engine.getElementNodeList();
        console.log("Total Element Count:", elist.length);

        var center = scope.engine.CenterPosition;

        for (var i = 0; i < elist.length; i++) {
            var node = elist[i];
            var gid = node.Id;
            var transform = scope.engine.getElementTransform(gid);
            if(transform){
                transform.gid = gid;
                transform.flag = 0;

                if(transform.center.x < center.x)
                    transformListX1.push(transform);
                else
                    transformListX2.push(transform);
            }
        }

        transformListX1.sort(xDscSort);
        transformListX2.sort(xAscSort);

        var hideDistance = 100000;
        for (var i = 0; i < transformListX1.length; i++) {
            var transform = transformListX1[i];
            transform.position.x = -100000;
            scope.engine.transformElement(transform.gid, transform);
        }

        for (var i = 0; i < transformListX2.length; i++) {
            var transform = transformListX2[i];
            transform.position.x = 100000;
            scope.engine.transformElement(transform.gid, transform);
        }

        scope.engine.requestOneUpdate();

        isStart = true;

        bimEngine.requestHighSpeed('testElementAnimation');
    });

    function onAnimation(event){
        if(isStart == false)
            return;

        var speed = 10000;
        var finishCount = 0;
        var countPerFrame = 0;
        var countPerFrameMax = 20;
        for (var i = 0; i < transformListX1.length; i++) {
            var transform = transformListX1[i];
            if(transform.flag==0){
                transform.position.x += speed;
                scope.engine.transformElement(transform.gid, transform);

                if(transform.position.x >= 0){
                    transform.position.x = 0;
                    transform.flag = 1;
                }

                countPerFrame++;

                if(countPerFrame >= countPerFrameMax)
                    break;
            }
            

            if(transform.flag == 1)
                finishCount++;
        }

        countPerFrame = 0;
        for (var i = 0; i < transformListX2.length; i++) {
            var transform = transformListX2[i];
            if(transform.flag==0){
                transform.position.x -= speed;
                scope.engine.transformElement(transform.gid, transform);

                if(transform.position.x <= 0){
                    transform.position.x = 0;
                    transform.flag = 1;
                }

                countPerFrame++;

                if(countPerFrame >= countPerFrameMax)
                    break;
            }

            if(transform.flag == 1)
                finishCount++;
        }

        if(finishCount == transformListX1.length + transformListX2.length){
            isStart = false;
            bimEngine.removeHighSpeed('testElementTranslate');
        }

    };

    scope.engine.addListener(BIMVIZ.EVENT.OnCustomAnimiationUpdate, onAnimation);
};