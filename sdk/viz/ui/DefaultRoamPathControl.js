BIMVIZ.UI.DefaultRoamPathControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultRoamPathControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultRoamPathControl.constructor = BIMVIZ.UI.DefaultRoamPathControl;

BIMVIZ.UI.DefaultRoamPathControl.prototype.onHide = function(){
    this.end();
};

BIMVIZ.UI.DefaultRoamPathControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;

    var pathMgr = scope.engine.getPathManager();
    var cameraBookmarkMgr=scope.engine.getCameraBookmarkManager();
    
    var curRoamPath=null;
    var curRoamPathId=null;
    var curPos=null;
    var curTarget=null;
    var curUrl=null;
    var model=1;
    var playModel=0;

    var pathEditor=pathMgr.getPathEditor();
    var pathPlayer=pathMgr.getPathPlayer();
    var createHtml="<div class='border-bottom-1 padding-20' style='width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);'>\
                        <button id='createRoamPathBtn' style='padding: 5px;color: #ffffff;'><i class='fa fa-plus' style='margin-right: 5px;'></i>创建</button>\
                     </div>\
                     <div style='margin-bottom: 200px;'>\
                        <ul id='roamPathList'></ul>\
                     </div>";
    container.append(createHtml).removeClass("padding-20").css({"width":"320px", "overflow-y": "auto"});

    var inputName="<div id='createPathNamePanel' class='padding-20 bottom-border-1'>" +
                        "<p class='createPathNamePanel-title'>创建漫游路径</p>" +
                        "<label>请输入名称：</label><input id='createNameInput' class='form-control' id='' type='text'  />" +
                        "<div style='float: right;margin-top: 30px;margin-bottom: 10px;'>" +
                            "<button id='createPathNnameOK' type='button' class='btn btn-default' style='margin-right: 5px;'><i class='fa fa-check'></i>确定</button>" +
                            "<button id='createPathNnameClose' type='button' class='btn btn-default'><i class='fa fa-trash'></i>取消</button>" +
                        "</div>" +
                  "</div>";
    $("#"+scope.engine.ContainerId).append(inputName);

    // 创建按钮
    $("#createRoamPathBtn").unbind().click(function(){
        $("#createPathNamePanel").show();
    });

     $("#createPathNnameOK").unbind().click(function(){
        var name=$("#createNameInput").val();
        if(name==""){
            alert("请输入漫游路径名称！");
            return;
        }

        var positions = new Array();

        var path = new BIMVIZ.Path(name, -1, true, true, true, positions, 2000, 1498, 400, 200, 2, 5, 90);
         pathMgr.create(path, function (newPath) {
            var html="<li id='"+newPath.id+"' class='roamPath-item-click li-border-bottom'>" +
                        "<div class='roamPath-item-warpper'>" +
                            "<span class='roamPath-item-name text-ellipsis'>"+newPath.name+"</span>" +
                            "<div class='roamitem-btns'>" +
                                "<span class='roamPath-item-delete' rel='"+newPath.id+"'><i class='fa fa-trash fa-lg'></i></span>" +
                                "<span class='roamPath-item-setup' rel='"+newPath.id+"'><i class='fa fa-cog fa-lg'></i></span>" +
                                "<span class='roamPath-item-stop' rel='"+newPath.id+"'><i class='fa fa-stop' aria-hidden='true'></i></span>"+
                                "<span class='roamPath-item-paly' rel='"+newPath.id+"'><i class='fa fa-play'></i></span>" +
                            "</div>" +
                        "</div>" +
                    "</li>" +
                    "<li class='roamPath-item-panel'></li>";
            $("#roamPathList").append(html);

            $("#roamPathList li").removeClass("li-active");
            $("#roamPathList #"+newPath.id).addClass("li-active");
            $(".roamitem-btns span").removeClass("icon-active");
            $("#roamPathList #"+newPath.id).find(".roamPath-item-setup").addClass("icon-active");

            hideCreatePanel();// 关闭创建漫游路径面板

            pathEditor.release();
            pathPlayer.release();

            curRoamPath=newPath;
            curRoamPathId=newPath.id;

            pathEditor.setPath(newPath);

            var panelEle=$("#roamPathList #"+newPath.id).next();
            updateRoamPathPanel(panelEle,newPath);

            clickPathItem(); // click path item
            roamPathPlay();
            roamPathStop();
            setUp();
            deletePathItem();
        });
    });

    // 关闭创建漫游路径面板
    $("#createPathNnameClose").unbind().click(function(){
        hideCreatePanel();
    });

    function hideCreatePanel(){
        $("#createNameInput").val("");
        $("#createPathNamePanel").hide();
    }

    function init(){
        $("#roamPathList").html("");

        pathMgr.getList(function(success,list){
            if(success){
                if(list.length>0){
                    list.forEach(function(cValue, index, list){
                        var html="<li id='"+cValue.id+"' class='roamPath-item-click li-border-bottom'>" +
                                    "<div class='roamPath-item-warpper'>" +
                                        "<span class='roamPath-item-name text-ellipsis'>"+cValue.name+"</span>" +
                                        "<div class='roamitem-btns'>" +
                                            "<span class='roamPath-item-delete' rel='"+cValue.id+"'><i class='fa fa-trash fa-lg'></i></span>" +
                                            "<span class='roamPath-item-setup' rel='"+cValue.id+"'><i class='fa fa-cog fa-lg'></i></span>" +
                                            "<span class='roamPath-item-stop' rel='"+cValue.id+"'><i class='fa fa-stop'></i></span>"+
                                            "<span class='roamPath-item-paly' rel='"+cValue.id+"'><i class='fa fa-play'></i></span>" +
                                        "</div>" +
                                    "</div>" +
                                "</li>" +
                                "<li class='roamPath-item-panel'></li>";
                        $("#roamPathList").append(html);

                        clickPathItem(); // click path item
                        roamPathPlay(); // roanPath player
                        roamPathStop();
                        setUp();
                        deletePathItem();  // delete path item
                    });
                }
            }
        });
    }

    init();

    // click roamPath item
    function clickPathItem(){
        scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

        $("#roamPathList .roamPath-item-click").unbind().click(function(){
            var pathId=$(this).attr("id");
            $(".roamPath-item-panel").html("");
            $("#roamPathList li").removeClass("li-active");
            $(this).addClass("li-active");
            $("#roamPathList .roamPath-item-click").addClass("li-border-bottom");
            $(".roamitem-btns span").removeClass("icon-active");
            $(".roamPath-item-paly").html("<i class='fa fa-play'></i>");

            pathMgr.getById(pathId, function(success, path) {
                if (success) {
                    pathEditor.release();
                    pathPlayer.release();

                    if (path.positions.length < 2){
                        alert("请设置路径节点！");
                        return;
                    } 

                    // 跳转视角
                    if(path.carmeraId!=-1){
                        cameraBookmarkMgr.getList(function(success,list){
                            if(success){
                                if(list.length>0){
                                    list.forEach(function(item,list){
                                        if(item.id==path.carmeraId){
                                            scope.engine.flyFromTo(item.position, item.target);
                                        }
                                    });
                                }
                            }
                        });
                    }                    

                    curRoamPath=path; // 设置当前漫游路径对象
                    curRoamPathId=path.id;
                    playModel=0;

                    pathPlayer.setPath(curRoamPath);                   
                }
            });
        });
    }

    function roamPathPlay(){
        $(".roamPath-item-paly").unbind().click(function(e){
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);
            window.event? window.event.cancelBubble = true : e.stopPropagation();

            var id=$(this).attr("rel");
            if ($("#roamPathPanel").is(':visible')){
                alert("请先保存漫游路径！");
                return;
            }

            if(curRoamPathId==null || curRoamPathId!=id){
                alert("请点击漫游路径显示漫游路径！");
                return;
            }
            if(curRoamPath.positions.length<=0){
                alert("请设置路径节点！");
                return;
            }

            $(".roamitem-btns span").removeClass("icon-active");
            $(this).addClass("icon-active");
            if(playModel==0) { // 播放
                pathEditor.release();
                pathPlayer.release();

                if(curRoamPath.positions.length>1){    
                    pathPlayer.setPath(curRoamPath);                
                    pathPlayer.play(); 

                    playModel = 1;  // 暂停、继续

                    $(this).html("<i class='fa fa-pause'></i>");
                    pathPlayer.complete = function(){
                        playModel = 0;
                        $(".roamPath-item-paly").html("<i class='fa fa-play'></i>");                            
                    };                     
                }
            }else if(playModel==1){ // 暂停、继续
                pathPlayer.pause();
                var flag=$(this).find("i").hasClass("fa-play");
                if(flag){
                    $(this).html("<i class='fa fa-pause'></i>");
                }else{
                    $(this).html("<i class='fa fa-play'></i>");
                }
            }
                

        });
    }

    function roamPathStop(){
        $(".roamPath-item-stop").unbind().click(function(e){
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);
            window.event? window.event.cancelBubble = true : e.stopPropagation();

            var id=$(this).attr("rel");

            if(curRoamPathId==null || curRoamPathId!=id){
                alert("请点击漫游路径显示漫游路径！");
                return;
            }
            if(curRoamPath.positions.length<=0){
                alert("请设置路径节点！");
                return;
            }

            pathPlayer.stop();
            $(".roamPath-item-paly").html("<i class='fa fa-play'></i>");
            playModel=0;

            $(".roamitem-btns span").removeClass("icon-active");
            $(this).addClass("icon-active");
        });
    }

    function setUp(){
        $(".roamPath-item-setup").unbind().click(function(e){
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);
            window.event? window.event.cancelBubble = true : e.stopPropagation();

            var roamPathId=$(this).attr("rel");
            var panelEle=$("#roamPathList #"+roamPathId).next();

            $(".roamitem-btns span").removeClass("icon-active");

            if(panelEle.html()==""){
                $("#roamPathList .roamPath-item-click").addClass("li-border-bottom").removeClass("li-active");
                $("#roamPathList #"+roamPathId).removeClass("li-border-bottom").addClass("li-active");

                $(this).addClass("icon-active");

                pathEditor.release();
                pathPlayer.release();

                pathMgr.getById(roamPathId, function(success, path) {
                    if (success) {                        
                        updateRoamPathPanel(panelEle,path);

                        pathEditor.setPath(path);                        
                        
                        // 跳转视角
                        if(path.carmeraId!=-1){
                            cameraBookmarkMgr.getList(function(success,list){
                                if(success){
                                    if(list.length>0){
                                        list.forEach(function(item,list){
                                            if(item.id==path.carmeraId){
                                                scope.engine.flyFromTo(item.position, item.target);
                                            }
                                        });
                                    }
                                }
                            });
                        }

                        curRoamPath=path;
                        curRoamPathId=path.id;
                        playModel=0;
                    }
                });
            }else{
                panelEle.html("");
                $("#roamPathList .roamPath-item-click").addClass("li-border-bottom");
            }
        });
    }

    function deletePathItem(){
        scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

        $(".roamPath-item-delete").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();

            if (!confirm('确实要删除该路径吗?')){
                return;
            }

            pathEditor.release();
            pathPlayer.release();

            var pathId=$(this).attr("rel");
            pathMgr.getById(pathId, function(success, path) {
                if (success){
                     delCamera(path.carmeraId);
                    delPath(path.id);     
                }
            });                  

            function delPath(roamPathId){
                pathMgr.delete(roamPathId, function () {
                    $("#roamPathList #"+pathId).remove();
                    $("#roamPathPanel").slideUp("slow");
                    console.log("delete success!");
                    curRoamPath=null;
                    playModel=0;
                });
            }
            function delCamera(cameraId){
                cameraBookmarkMgr.delete(cameraId, function(){ });
            }
        });
    }

    function updateRoamPathPanel(panelEle,path){
        $(".roamPath-item-panel").html("");

        var carmeraFlag="checked";
        if(path.carmeraId==-1)
            carmeraFlag="";

        var showPath = "";
        if (path.showPath){
            showPath = ' checked="checked" '; 
        };

        var showNavigation = "";
        if (path.showNavigation){
            showNavigation = ' checked="checked" ';
        };

        var animateNavagation = "";
        if (path.animateNavagation){
            animateNavagation = ' checked="checked" ';
        };

        var panel="<div id='roamPathPanel'>" +
            "                        <div class='roamPath-item'> " +
            "                            <p class='path-item-title'><span>名称：</span></p> " +
            "                            <p><input id='nameInput' type='text' class='path-item-input' value='"+path.name+"'></p> " +
            "                        </div> " +
            "                        <div class='roamPath-item'> " +
            "                            <p class='visualAngle-btns'>" +
            "                               <a id='SetupVisualangleBtn' style='margin-right: 10px;'>设置默认视角</a>" +
            "                               <a id='flyToVisualangleBtn'>跳转</a>" +
            "                           </p> " +
            "                        </div> " +
            "                        <div class='roamPath-item'> " +
            "                            <p class='path-item-title'>路径节点设置</p> " +
            "                            <p> " +
            "                                <button id='addPointBtn' class='path-item-btn'>增加节点</button> " +
            "                                <button id='deletePointBtn' class='path-item-btn'>移除节点</button> " +
            "                                <button id='insertPointBtn' class='path-item-btn'>插入节点</button> " +
            "                            </p> " +
            "                        </div> " +
            "                        <div class='roamPath-item'> " +
            "                            <p class='path-item-title'><span>自动漫游速度(mm/s)：</span></p> " +
            "                            <p><input id='speedInput' type='text' class='path-item-input' value='"+path.speed+"'></p> " +
            "                        </div> " +
            "                       <div class='roamPath-item'> " +
            "                            <p class='path-item-title'><input id='pathCheckbox' class='checkbox-input roamline-checkbox' style='margin-right:10px;' type='checkbox' name='roadLine'" + showPath + "/><span>显示视觉引导线</span></p> "  +
            "                        </div> " +
            "                       <div class='roamPath-item'> " +
            "                            <p class='path-item-title'><input id='roadLineCheckbox' class='checkbox-input roamline-checkbox' style='margin-right:10px;' type='checkbox' name='roadLine'" + showNavigation + "/><span>启用导航线</span></p> "  +
            "                        </div> " +
            "                        <div class='roamPath-roadLine'> " +
            "                            <p class='path-item-roadLine'><span>宽度(mm)：</span><input class='roadLine-para' id='roadwidthInput' type='text' value='"+path.roadwidth+"' /></p> " +
            "                        </div> " +
            "                        <div class='roamPath-roadLine'> " +
            "                            <p class='path-item-roadLine'><span>偏移(mm)：</span><input class='roadLine-para' id='zdeltaInput' type='text' value='"+path.zdelta+"' /></p> " +
            "                        </div> " +
            "                        <div class='roamPath-roadLine'> " +
            "                            <p class='path-item-roadLine'><span>轴向旋转(°)：</span><input class='roadLine-para' id='roadangleInput' type='text' value='"+path.roadangle+"' /></p> " +
            "                        </div> " +
            "                        <div class='roamPath-roadLine'> " +
            "                            <p class='path-item-roadLine'><span>横向平铺(个)：</span><input class='roadLine-para' id='roadrepeatyInput' type='text' value='"+path.roadrepeaty+"' /></p> " +
            "                        </div> " +
            "                        <div class='roamPath-roadLine'> " +
            "                            <p class='path-item-roadLine'><span>纵向平铺(个)：</span><input class='roadLine-para' id='roadrepeatxInput' type='text' value='"+path.roadrepeatx+"' /></p> " +
            "                        </div> " +
            "                        <div class='roamPath-roadLine'> " +
            "                            <p class='path-item-roadLine'><span>动画速度(mm/s)：</span><input class='roadLine-para' id='roadspeedxInput' type='text' value='"+path.roadspeedx+"' /></p> " +
            "                        </div> " +
            "                        <div class='roamPath-item-footerBtns'> " +
            "                            <button id='roamPathPanelOKBtn' style='border: 1px solid #ffffff;'>保存</button> " +
            "                            <button id='roamPathPanelCloseBtn'>取消</button> " +
            "                        </div> " +
            "                     </div> ";
        panelEle.append(panel);

        setUpVisualAngle();
        flyToVisualangle();

        addPoint();
        insertPoint();
        deletePoint();

        cancel();
        update();

        clickRoadLine(); // 监听导航条是启用
        lineSetUp();

        $("#roamPathPanel").slideDown("slow");
    }

    function cancel(){
        $("#roamPathPanelCloseBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            $(".roamitem-btns span").removeClass("icon-active");
            $("#roamPathList .roamPath-item-click").addClass("li-border-bottom");
            $("#roamPathPanel").remove();

            pathEditor.release();
        });
    };

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function saveRoamPath(){
         if($("#nameInput").val()==''){
            alert("请填写名称");
            return;
        }

        if($("#speedInput").val()=='' || !isNumber($("#speedInput").val())){
            alert("请填写正确的漫游速度");
            return;
        }

        if($("#roadwidthInput").val()=='' || !isNumber($("#roadwidthInput").val())){
            alert("请填写正确的导航线宽度");
            return;
        }

        if($("#zdeltaInput").val()=='' || !isNumber($("#zdeltaInput").val())){
            alert("请填写正确的导航线高差");
            return;
        }

        if($("#roadrepeatxInput").val()=='' || !isNumber($("#roadrepeatxInput").val())){
            alert("请填写正确的导航线平铺X次数");
            return;
        }

        if($("#roadrepeatyInput").val()=='' || !isNumber($("#roadrepeatyInput").val())){
            alert("请填写正确的导航线平铺Y次数");
            return;
        }

        if($("#roadspeedxInput").val()=='' || !isNumber($("#roadspeedxInput").val())){
            alert("请填写正确的导航线动画速度");
            return;
        }

        if($("#roadangleInput").val()=='' || !isNumber($("#roadangleInput").val())){
            alert("请填写正确的导航线旋转角度");
            return;
        }

        curRoamPath.name=$("#nameInput").val();
        curRoamPath.showPath = $("#pathCheckbox").prop("checked");
        curRoamPath.showNavigation = $("#roadLineCheckbox").prop("checked");
        curRoamPath.animateNavagation = $("#roadLineAnimationCheckbox").prop("checked");
        curRoamPath.speed=$("#speedInput").val(); // 速度
        curRoamPath.zdelta=$("#zdeltaInput").val(); //导航线高差
        curRoamPath.roadwidth=$("#roadwidthInput").val(); //导航线宽度
        curRoamPath.roadrepeatx=$("#roadrepeatxInput").val(); //平铺X个数
        curRoamPath.roadrepeaty=$("#roadrepeatyInput").val(); //平铺Y个数
        curRoamPath.roadspeedx=$("#roadspeedxInput").val(); //平铺滚动速度
        curRoamPath.roadangle=$("#roadangleInput").val(); //导航线角度

        curRoamPath.positions=pathEditor.getPositions();
        if (curRoamPath.positions.length < 1){
            alert("请设置路径节点！");
            return;
        }

        $(".roamitem-btns span").removeClass("icon-active");

        if(curPos!=null && curTarget!=null && curUrl!=null){
            if(curRoamPath.carmeraId==-1){
                createCameraBook();
            }else{
                cameraBookmarkMgr.getList(function(success,list){
                    if(success) {
                        if (list.length > 0) {
                            for (var i = 0; i < list.length; i++) {
                                if (list[i].id == curRoamPath.carmeraId) {
                                    updateCameraBook(list[i]);
                                }else{
                                }
                            }
                        }else{
                            createCameraBook();
                        }
                    }
                });
            }
        }else{
            updateRoamPath();
        }
    };

    function update(){
        $("#roamPathPanelOKBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            saveRoamPath();   

            pathEditor.release();        
        });
    };

    function setUpVisualAngle(){
        $("#SetupVisualangleBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            var pos = scope.engine.getCameraPosition();
            var target = scope.engine.getCameraTarget();
            curPos=pos;
            curTarget=target;
            scope.engine.getSnapShot(500, 330, function(url){
                curUrl=url;
                alert("设置视角成功!");
            });
        });
    }

    function flyToVisualangle(){
        $("#flyToVisualangleBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            if(curPos==null && curTarget==null){
                cameraBookmarkMgr.getList(function(success,list){
                    if(success){
                        if(list.length>0){
                            list.forEach(function(item,list){
                                if(item.id==curRoamPath.carmeraId){
                                    scope.engine.flyFromTo(item.position, item.target);
                                    return;
                                }
                            });
                        }
                    }
                });
            }else{
                scope.engine.flyFromTo(curPos, curTarget);
            }
        });
    }

    function addPoint(){
        $("#addPointBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            model=1;
            scope.engine.addListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);
        });
    }

    function deletePoint(){
        $("#deletePointBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            pathEditor.removeCurrentPosition();
            curRoamPath.positions=pathEditor.getPositions();
        });
    }

    function insertPoint(){
        $("#insertPointBtn").unbind().click(function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

            model=2;
            scope.engine.addListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);
        });
    }

    function OnPickElement(evt){
        evt.args.cancel = true;

        var pos = evt.args.point.clone();
        pos.z += 1500;

        pos=pos.sub(scope.engine.CenterPosition);

        if(model==1){
            pathEditor.addPosition(pos);
        }else{
            pathEditor.insertPosition(pos);
        }
        curRoamPath.positions=pathEditor.getPositions();

        scope.engine.requestOneUpdate();
    }

    // 启用导航条复选框
    function clickRoadLine(){
        $("#pathCheckbox").click(function(){
            var flag=$(this).prop('checked');
            pathEditor.showPath(flag);
        });

        $("#roadLineCheckbox").click(function(){
            var flag=$(this).prop('checked');
            pathEditor.showNavigation(flag);   
        });
    };

    // 监听 导航条设置
    function lineSetUp(){
        // 宽度
        $("#roadwidthInput").watch(function(value) {
            pathEditor.setRoadWidth(value);
            scope.engine.requestOneUpdate();
        });

        // 偏移
        $("#zdeltaInput").watch(function(value) {
            pathEditor.setRoadZDelta(value);
            scope.engine.requestOneUpdate();
        });

        // 轴向旋转
        $("#roadangleInput").watch(function(value) {
            pathEditor.setRoadAngle(value);
            scope.engine.requestOneUpdate();
        });

        // 纵向平铺
        $("#roadrepeatyInput").watch(function(value) {
            pathEditor.setRoadRepeatY(value);
            scope.engine.requestOneUpdate();
        });

        // 横向平铺
        $("#roadrepeatxInput").watch(function(value) {
            pathEditor.setRoadRepeatX(value);
            scope.engine.requestOneUpdate();
        });

        // 动画速度
        $("#roadspeedxInput").watch(function(value) {
            pathEditor.roadPlay(true, value);        
        });
    }

    function createCameraBook(){
        var cameraBookmark=new BIMVIZ.CameraBookmark(curRoamPath.name, curRoamPath.name, curUrl, curPos, curTarget);
        cameraBookmarkMgr.create(cameraBookmark, function(bookmark){
            curRoamPath.carmeraId=bookmark.id;
            updateRoamPath();
        });
    }

    function updateCameraBook(item){
        item.name=curRoamPath.name;
        item.description=curRoamPath.name;
        item.imageurl=curUrl;
        item.position=curPos;
        item.target=curTarget;
        cameraBookmarkMgr.update(item, true, function(){
            updateRoamPath();
        });
    }

    function updateRoamPath(){
        pathMgr.update(curRoamPath, function () {
            $("#roamPathList").find("#"+curRoamPath.id+" .roamPath-item-name").html($("#nameInput").val());
            $("#roamPathList .roamPath-item-click").addClass("li-border-bottom");
            $("#roamPathPanel").slideUp("slow");
            alert("保存成功!");
            curPos=null;
            curTarget=null;
            curUrl=null;
        });
    }

    $.fn.watch = function (callback) {
        return this.each(function () {
            //缓存以前的值
            $.data(this, 'originVal', $(this).val());

            //event
            $(this).on('keyup paste', function () {
                var originVal = $.data(this, 'originVal');
                var currentVal = $(this).val();

                if (originVal !== currentVal) {
                    $.data(this, 'originVal', $(this).val());
                    callback(currentVal);
                }
            });
        });
    }

    scope.end=function(){
        scope.engine.removeListener(BIMVIZ.EVENT.OnPickElement, OnPickElement);

        $("#roamPathList li").removeClass("li-active");
        $(".roamitem-btns span").removeClass("icon-active");
        $("#roamPathPanel").remove();

        pathEditor.release();  
        pathPlayer.release();

        curRoamPathId=null;
        curRoamPath=null;
        curPos=null;
        curTarget=null;
        curUrl=null;
        model=1;
        playModel=0;
    };

};