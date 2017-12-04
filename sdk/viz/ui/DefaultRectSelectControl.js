BIMVIZ.UI.DefaultRectSelectControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultRectSelectControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultRectSelectControl.constructor = BIMVIZ.UI.DefaultRectSelectControl;


BIMVIZ.UI.DefaultRectSelectControl.prototype.onShow = function(){
    this.shiftKeyEnabled = true;
};

BIMVIZ.UI.DefaultRectSelectControl.prototype.onHide = function(){
    this.shiftKeyEnabled = false;
    this.engine.getRectSelectManager().end();
};

BIMVIZ.UI.DefaultRectSelectControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;
    var MULTIP_SELECT_SET_UNION_MODE = {RESET:"reset", UNION:"union", INTERSET:"interset", REMOVE:"remove"};
    var MULTIP_SELECT_SET_SHOW_MODE = {ALWAYS:"always", ORDER:"order"};

    var multipSelectSetUnionMode = MULTIP_SELECT_SET_UNION_MODE.RESET;
    var multipSelectSetShowMode = MULTIP_SELECT_SET_SHOW_MODE.ALWAYS;
    var isCtrlPressed = false;

    var interactionhtml = '\
        <div class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                 <div class="input-group pull-left">\
                    <div class="pull-right" >\
                        <a style="padding-top:4px;" class="btn" id="bv_switchToRectSelectOnce"><i class="fa fa-object-ungroup"></i> 拉框选择 (或按住SHIFT)</a>\
                    </div>\
                </div>\
        </div>\
        <hr style="margin-top:0px;margin-bottom:0px;">\
        <div id="bv_measure_settings_mode" class="list-item-font padding-20">\
            <div style="padding:0px 0px 0px 0px;">\
                <div style="margin-bottom:10px;">结果处理方式</div>\
                <div style="width:25px;float:left;"><input name="bv_rselect_result_mode" checked value="reset" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">重置</div>\
                <div style="width:25px;float:left;"><input name="bv_rselect_result_mode" value="union" type="radio"  style="width:20px;"></div>\
                <div style="width:40px;float:left;">并集</div>\
                <div style="width:25px;float:left;"><input name="bv_rselect_result_mode" value="interset" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">交集</div>\
                <div style="width:25px;float:left;"><input name="bv_rselect_result_mode" value="remove" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">减去</div>\
            </div>\
        </div>\
        <hr style="margin-top:0px;margin-bottom:0px;">\
        <div id="bv_measure_settings_mode" class="list-item-font padding-20">\
            <div style="padding:0px 0px 0px 0px;">\
                <div style="margin-bottom:10px;">高亮显示次序</div>\
                <div style="width:25px;float:left;"><input name="bv_rselect_result_show_mode" checked value="always" type="radio" style="width:20px;"></div>\
                <div style="width:70px;float:left;">穿透模式</div>\
                <div style="width:25px;float:left;"><input name="bv_rselect_result_show_mode" value="order" type="radio"  style="width:20px;"></div>\
                <div style="width:70px;float:left;">顺序模式</div>\
            </div>\
        </div>\
        <hr style="margin-top:0px;margin-bottom:0px;">\
        <div id="bv_rselect_selectset_overview" class="list-item-font padding-20" style="padding-top:5px;">\
            <div class="bv_rselect_selectset_overview_this">本选择个数：</div>\
            <div class="bv_rselect_selectset_overview_all">总结果个数：</div>\
        </div>\
        ';


    container.html(interactionhtml);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    container.css("width", "400px");

    $("#bv_switchToRectSelectOnce").click(function () {
        scope.engine.getRectSelectManager().start();
    });

    $("input[name='bv_rselect_result_mode']").click(function(){
       var mode = $("input[name='bv_rselect_result_mode']:checked").val();
       
       multipSelectSetUnionMode = mode;
    });

    $("input[name='bv_rselect_result_show_mode']").click(function(){
        var mode = $("input[name='bv_rselect_result_show_mode']:checked").val();
       
        multipSelectSetShowMode = mode;
        switch(mode){
            case MULTIP_SELECT_SET_SHOW_MODE.ALWAYS:
            scope.engine.getHighlightManager().setHighlightShowOrder(BIMVIZ.HightlightShowOrderMode.Always);
            break;

            case MULTIP_SELECT_SET_SHOW_MODE.ORDER:
            scope.engine.getHighlightManager().setHighlightShowOrder(BIMVIZ.HightlightShowOrderMode.Order);
            break;
        };

        scope.engine.requestOneUpdate();
    });

    function updateStaticOverview(changed, all){
        $('#bv_rselect_selectset_overview .bv_rselect_selectset_overview_this').text("本选择个数：" + changed);
        $('#bv_rselect_selectset_overview .bv_rselect_selectset_overview_all').text("总结果个数：" + all);
    }

    // BIMVIZ Sysetm Quick Rect Select Event
    // BIMVIZ will handle it, always add result idlist into hightlight list;
    function OnQuickRectSelectExecuted(event){
        var selectSet = event.args;
        var changedIdList = selectSet.idlist;
        var hmgr = scope.engine.getHighlightManager();

        var finalIdList = [];
        var currentIdList = hmgr.cloneHighlightElementList();
        for(var i=0, j=changedIdList.length; i<j;i++){
            var gid = changedIdList[i];
            finalIdList.push(gid); 
        }

        for(var i=0, j=currentIdList.length; i<j;i++){
            var gid = currentIdList[i];
            var index = finalIdList.indexOf(gid);
            if(index < 0){
                finalIdList.push(gid);
            }  
        }

        updateStaticOverview(changedIdList.length, finalIdList.length);
        console.log("quick rect select count:", changedIdList.length);
    }

    // Custom Rect Select Event by business requirements.
    // It used to be handled by developer: reset ,union, inteset, or subtract
    function OnRectSelectExecuted(event){

        var selectSet = event.args;
        var changedIdList = selectSet.idlist;
        var hmgr = scope.engine.getHighlightManager();

        var currentIdList = hmgr.cloneHighlightElementList();
        var finalIdList = [];

        switch(multipSelectSetUnionMode){
            case MULTIP_SELECT_SET_UNION_MODE.RESET:
            {
                for(var i=0, j=changedIdList.length; i<j;i++){
                    var gid = changedIdList[i];
                    finalIdList.push(gid); 
                }
            }
            
            break;

            case MULTIP_SELECT_SET_UNION_MODE.UNION:
            {
                for(var i=0, j=changedIdList.length; i<j;i++){
                    var gid = changedIdList[i];
                    finalIdList.push(gid); 
                }

                for(var i=0, j=currentIdList.length; i<j;i++){
                    var gid = currentIdList[i];
                    var index = finalIdList.indexOf(gid);
                    if(index < 0){
                        finalIdList.push(gid);
                    }  
                }
            }
            break;

            case MULTIP_SELECT_SET_UNION_MODE.INTERSET:
            {
                for(var i=0, j=currentIdList.length; i<j;i++){
                    var gid = currentIdList[i];
                    var index = changedIdList.indexOf(gid);
                    if(index >= 0){
                        finalIdList.push(gid);
                    }  
                }
            }
            break;

            case MULTIP_SELECT_SET_UNION_MODE.REMOVE:
            {
                for(var i=0, j=currentIdList.length; i<j;i++){
                    var gid = currentIdList[i];
                    var index = changedIdList.indexOf(gid);
                    if(index < 0){
                        finalIdList.push(gid);
                    }  
                }
            }
            break;

        };

        hmgr.clearHighlightElementList();
        hmgr.highlightElementList(finalIdList);

        updateStaticOverview(changedIdList.length, finalIdList.length);
    };

    // Use for custom keydown
    function _keydown(event){   
        if(scope.shiftKeyEnabled==true && event.keyCode == 16){ // SHIFT KEY
            if(!scope.engine.getRectSelectManager().isInProcess())
            {
                scope.engine.getRectSelectManager().start();
            }
            
        }
    }

    // Use for custom keyup
    function  _keyup(event) { // SHIFT KEY
        if(event.keyCode == 16){// Even if shiftKeyEnabled is false, it should be off
            scope.engine.getRectSelectManager().end();
        }
    }

    // Listen to the CTRL KEY from DOM
    var canvasDom = document.getElementById(scope.engine.startSettings.renderDomId);
    canvasDom.addEventListener('keydown', _keydown, false);
    canvasDom.addEventListener('keyup', _keyup, false);

    // Listen to the RectSelect Message from BIMVIZ
    scope.engine.addListener(BIMVIZ.EVENT.OnRectSelectExecuted, OnRectSelectExecuted);

    // Listen to the System Quick RectSelect Message from BIMVIZ, generally, it can not be handled.
    scope.engine.addListener(BIMVIZ.EVENT.OnQuickRectSelectExecuted, OnQuickRectSelectExecuted);

    // Listen to the Unselected Event From Stystem
    scope.engine.addListener(BIMVIZ.EVENT.OnElementsUnSelected, function(event){
        updateStaticOverview(0, 0);
    });
};