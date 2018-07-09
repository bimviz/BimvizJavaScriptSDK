BIMVIZ.UI.DefaultMarkupControl = function(name, iconClass){
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultMarkupControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultMarkupControl.constructor = BIMVIZ.UI.DefaultMarkupControl;

BIMVIZ.UI.DefaultMarkupControl.prototype.onProjectLoaded = function(project){
    var init={
        borderWidth:2,
        borderColor:"#FF2A2A",
        fontSize:18
    };
    var scope = this;
    var $body=$("body");
    var mgr = scope.engine.getMarkupManager();
    var flag=0;
    var layer=0;
    var inputNumber=0;
    var layerGroupNumber=0;
    var layerArray=[];
    var undoLayerArray=[];
    var visualAngleArray=[]; // visualAngle
    var borderWidth=init.borderWidth;
    var borderColor=init.borderColor;
    var fontSize=init.fontSize;
    var thumbnail;
    var position;
    var target;
    var machineType;

    var machine=machineJudge();
    machineType=machine.machine;
    if(machine.machine=="mobile"){
        if(machine.width<400){
            scope.parentDiv.css("width",machine.width);
        }
    }

    var itemTemplate="<div id='{0}' class='markup-item'>\
                                <p class='markup-item-name'>名称：{1}</p>\
                                <p class='markup-item-description'>备注：{2}</p>\
                                <div class='markup-item-thumbnail-img'>\
                                    <img src='{3}' style='width: 100%;height: 100%;'/>\
                                    <span>\
                                        <a class='markup-item-visualAngle'><i class='fa fa-camera bimviz_markup_item_visualAngle'></i></a>\
                                        <a class='markup-item-modify'><i class='fa fa-edit bimviz_markup_item_modify'></i></a>\
                                        <a class='markup-item-delete'><i class='fa fa-trash bimviz_markup_item_delete'></i></a>\
                                    </span>\
                                </div>\
                                <hr />\
                              </div>";

    var createHtml="<div class='border-bottom-1 padding-20' style='width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);'>\
                        <button id='CreateMarkup' style='padding: 5px;color: #ffffff;'><i class='fa fa-plus' style='margin-right: 5px;'></i>创建</button>\
                     </div>\
                     <div id='markupImgLists' style='margin-bottom: 20px;'></div>";
    scope.parentDiv.append(createHtml);
    scope.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20").css("width","320px");

    // Initialization markup lists
    markupUiLists();

    $body.find("#CreateMarkup").unbind().click(function(){
        flag=0;
        markupInit(flag,0);
    });
    $body.find("#CreateMarkup").mouseover(function(){ $(this).css("color","#373737"); });
    $body.find("#CreateMarkup").mouseout(function(){ $(this).css("color","#ffffff"); });


    // Initialization markup lists
    function markupUiLists(){
        mgr.getList(function(success, list){
            if(success){
                for(var i=0;i<list.length;i++){
                    visualAngleArray.push({id:list[i].id,position:list[i].position,target:list[i].target});
                    addItemToUi(list[i]);
                }
            }
        });
    }

    // Initialization markup panel
    function markupPanelInit() {
        var paintListClass;
        if(machineType=="mobile"){
            paintListClass="paint-lists-moblie";
        }else{
            paintListClass="paint-lists-pc";
        }
        var markupPanel = "<div id='markupPanel'>\
                                    <div id='markupPanelNav'>\
                                        <div id='buttons' style='display: inline-block; float: right;'>\
                                            <button id='Redo'><i class='fa fa-reply fa-lg'></i></button>\
                                            <button id='Undo'><i class='fa fa-share fa-lg'></i></button>\
                                            <button id='saved'><i class='ico-light fa fa-check fa-lg' aria-hidden='true'></i></button>\
                                            <button id='markupPanelClose'><i class='ico-light fa fa-times fa-lg'></i></button>\
                                            </div>\
                                    </div>\
                                    <div id='PaintLists' class='"+paintListClass+"'>\
                                        <ul>\
                                            <li id='pointer' data-flag='painterLis'><i class='ico-light fa fa-hand-paper-o'></i></li>\
                                            <li id='drawPencil' data-flag='painterLis'><i class='ico-light fa fa-pencil' aria-hidden='true'></i></li>\
                                            <li data-flag='painterLis'>\
                                                <i class='fa fa-long-arrow-up' aria-hidden='true' style='transform: rotate(45deg);margin:12px -5px 0 0;font-size: 24px;color: #DCDCDC;'></i>\
                                                <span class='copllese'><i class='ico-light fa fa-caret-down' aria-hidden='true'></i></span>\
                                                <ul id='LineTools' class='tools'>\
                                                    <li id='drawArrow'><i class='fa fa-long-arrow-up' aria-hidden='true' style='transform: rotate(45deg);margin:12px -5px 0 0;font-size: 24px;color: #DCDCDC;'></i></li>\
                                                    <li id='drawLine'><i class='fa fa-minus' aria-hidden='true' style='transform: rotate(-45deg);margin: 20px -5px 0 0;font-size: 24px;color: #DCDCDC;'></i></li>\
                                                </ul>\
                                            </li>\
                                            <li data-flag='painterLis'>\
                                                <span style='border:2px solid #DCDCDC;width: 20px;height: 15px;display: inline-block;margin: 18px -5px 0 0;'></span>\
                                                <span class='copllese'><i class='ico-light fa fa-caret-down' aria-hidden='true'></i></span>\
                                                <ul id='AreaSelection' class='tools'>\
                                                    <li id='drawRect'><span style='border:2px solid #DCDCDC;width: 20px;height: 15px;display: inline-block;'></span></li>\
                                                    <li id='drawCircle'><i class='ico-light fa fa-circle-thin' aria-hidden='true'></i></li>\
                                                </ul>\
                                            </li>\
                                            <li id='drawText' data-flag='painterLis'><i class='ico-light fa fa-font' aria-hidden='true'></i><span></span></li>\
                                            <li id='fontSize' class='notchangebgd' data-flag='bgdchange'>\
                                                <i class='ico-light fa fa-text-width' aria-hidden='true'></i>\
                                                <span class='copllese'><i class='ico-light fa fa-caret-down' aria-hidden='true'></i></span>\
                                                <ul id='fontSizetools' class='tools'>\
                                                    <li id='font12'>12</li>\
                                                    <li id='font14'>14</li>\
                                                    <li id='font16'>16</li>\
                                                    <li id='font18' class='li-dark'>18</li>\
                                                    <li id='font20'>20</li>\
                                                    <li id='font22'>22</li>\
                                                </ul>\
                                            </li>\
                                            <li id='lineSize' class='notchangebgd' data-flag='bgdchange'>\
                                                <p id='lineSizeIcon'>\
                                                    <span class='line-size'></span>\
                                                    <span class='line-size'></span>\
                                                    <span class='line-size'></span>\
                                                    <span class='line-size'></span>\
                                                </p>\
                                                <span class='copllese'><i class='ico-light fa fa-caret-down' aria-hidden='true'></i></span>\
                                                <ul id='LineSizeTools' class='tools'>\
                                                    <li id='drawLineSize1'><span></span></li>\
                                                    <li id='drawLineSize2' class='li-dark'><span></span></li>\
                                                    <li id='drawLineSize3'><span></span></li>\
                                                    <li id='drawLineSize4'><span></span></li>\
                                                </ul>\
                                            </li>\
                                            <li id='palette' data-flag='bgdchange'>\
                                                <div style='display: inline-block;color: #DCDCDC;'><span id='changeColor' style='display: inline-block;width: 20px;height: 15px;background: #FF2A2A;margin-bottom: -3px;'></span></div>\
                                                <span class='copllese'><i class='ico-light fa fa-caret-down' aria-hidden='true'></i></span>\
                                            </li>\
                                        </ul>\
                                    </div>\
                                    <div id='paintingCanvas'>\
                                        <div id='canvasContainer'>\
                                            <canvas id='canvas' style='display: block;position: absolute;left: 0;top: 0;background: rgba(0,0,0,0);z-index: 1000;'></canvas>\
                                        </div>\
                                    </div>\
                          </div>";
        return markupPanel;
    }

    function addItemToUi(item){
        var text = itemTemplate.format(item.id, item.name, item.description,item.imageurl);
        scope.parentDiv.find("#markupImgLists").append(text);
        if(item.name==""){ $("#"+item.id).find(".markup-item-name").css("height","22px"); }
        if(item.description==""){ $("#"+item.id).find(".markup-item-description").css("height","17px"); }

        // For Delete
        $("#markupImgLists").find("#"+item.id).find(".bimviz_markup_item_delete").click(function(event){
            event.stopPropagation();
            onDelete(item);
            for(var i=0;i<visualAngleArray.length;i++){
                if(visualAngleArray[i].id==item.id){
                    visualAngleArray.splice(i,1);
                }
            }
        });

        // For visualAngle
        $("#markupImgLists").find("#"+item.id).find(".bimviz_markup_item_visualAngle").click(function(event){
            event.stopPropagation();
            for(var i=0;i<visualAngleArray.length;i++){
                if(visualAngleArray[i].id==item.id){
                    scope.engine.flyFromTo(visualAngleArray[i].position, visualAngleArray[i].target);
                }
            }
        });

        // For Edit
        $("#markupImgLists").find("#"+item.id).find(".bimviz_markup_item_modify").click(function(event){
            event.stopPropagation();
            var editTemplateDialog="<div id='editEleWarpper'>\
                                        <div id='editMarkupDialog'>\
                                            <div class='editMarkupDialogTitle'>更改批阅</div>\
                                            <div class='editMarkupDialogBody'>\
                                                <span>名称</span>\
                                                <input id='editname' value='"+item.name+"' />\
                                                <span>描述</span>\
                                                <textarea id='editdescription' rows='3' cols='10'>"+item.description+"</textarea>\
                                            </div>\
                                            <div class='editMarkupDialogFooter'>\
                                                <button id='editMarkupBtn' data-id='\"+dataid+\"'><i class='fa fa-check' style='margin-right: 10px'></i>确定</button>\
                                                <button id='editMarkupCancel'><i class='fa fa-trash' style='margin-right: 10px'></i>取消</button>\
                                            </div>\
                                            <div id='changeMarkupmarker' class='changeMarkupmarker' flag='0'><button>替换批阅标签</button></div>\
                                        </div>\
                                    </div>";
            $body.append(editTemplateDialog);

            $("#editMarkupCancel").click(function(){
                $("#editEleWarpper").remove();
            });
            $("#changeMarkupmarker").click(function(){
                flag=1;
                markupInit(flag,item);
                $("#editEleWarpper").remove();
            });

            $("#editMarkupBtn").click(function(){
                var newName=$("#editname").val();
                if(newName==""){
                    newName=item.name;
                }
                var newDescription=$("#editdescription").val();
                if(newDescription==""){
                    newDescription=item.description;
                }
                var position;
                var target;
                for(var a=0;a<visualAngleArray.length;a++){
                    if(visualAngleArray[a].id==item.id){
                        position=visualAngleArray[a].position;
                        target=visualAngleArray[a].target;
                    }
                }
                imgTobase64(item.imageurl,function(url){
                    onEdit(item,newName,newDescription,url,position,target);
                });
                $("#editEleWarpper").remove();
            });
        });

        // For thumbnail Click
        $("#markupImgLists").find("#"+item.id).find(".markup-item-thumbnail-img").click(function(){
            for(var i=0;i<visualAngleArray.length;i++){
                if(visualAngleArray[i].id==item.id){
                    scope.engine.flyFromTo(visualAngleArray[i].position, visualAngleArray[i].target);
                }
            }
            var html="<div id='markupImgShowWarpper'>\
                        <i id='markupImgShowCloseBtn' class='ico-light fa fa-times fa-lg'></i>\
                        <img id='markupImgShow' src='"+item.imageurl+"'/>\
                       </div>";
            $body.append(html);
            var image=document.getElementById("markupImgShow");
            var machine=machineJudge();
            if(image!=null){ DrawImage(image,machine.width,machine.height); }
            $("#markupImgShowCloseBtn").click(function(){
                $("#markupImgShowWarpper").remove();
            });
        });
    }

    function onAdd(item, name, description, url, pos, target){
        item = new BIMVIZ.Markup(name, description, url, pos, target);
        mgr.create(item, function(markup){
            item.id = markup.id;
            scope.parentDiv.find("#markupImgLists").html("");
            markupUiLists()
        });
    };

    function onDelete(item){
        mgr.delete(item.id, function(){
            scope.parentDiv.find("#markupImgLists #"+item.id).remove();
        });
    };

    function onEdit(item, name, description,url,position,target){
        item.imageurl = url;
        item.name=name;
        item.description=description;
        item.position=position;
        item.target=target;
        mgr.update(item, function(){
            console.log(item);
            $("#markupImgLists").find("#"+item.id).find(".markup-item-name").html(name);
            $("#markupImgLists").find("#"+item.id).find(".markup-item-thumbnail-img img").attr("src",url);
            $("#markupImgLists").find("#"+item.id).find(".markup-item-description").html(description);
        });
    };

    function imgTobase64(url,callback){
        var html="<div id='imgTobase64CanvasWarpper' style='visibility: hidden;'>\
                    <img id='tobase64Img' crossorigin='anonymous' src='"+url+"' />\
                   </div>";
        scope.parentDiv.append(html);
        var image=document.getElementById("tobase64Img");
        image.onload=function(){
            var createCanvas="<canvas id='tobase64Canvas' width='"+image.width+"' height='"+image.height+"'></canvas>";
            $("#imgTobase64CanvasWarpper").append(createCanvas);
            var canvas=document.getElementById("tobase64Canvas");
            var ctx=canvas.getContext("2d");
            ctx.drawImage(image,0,0,image.width,image.height);
            var dataURL=canvas.toDataURL("image/png");
            $("#imgTobase64CanvasWarpper").remove();
            return callback(dataURL);
        }
    };

    // Draw Paint brush
    function canvasPencil(){
        CanvasExt= {
            drawPencil: function (canvasId) {
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                //画图坐标原点
                var sourceX = 0;
                var sourceY = 0;

                var layerIndex = layer;
                var layerName = "pencilLayer";
                var layerNameN;

                //鼠标点击按下事件，画图准备
                canvas.onmousedown = function (e) {
                    var color = borderColor;
                    var width = borderWidth;

                    //设置原点坐标
                    sourceX = e.clientX - canvasLeft;
                    sourceY = e.clientY - canvasTop;

                    canvas.onmousemove = function (e) {
                        layerIndex++;
                        layer++;
                        layerNameN = layerName + layerIndex;
                        //当前坐标
                        var currX = e.clientX - canvasLeft;
                        var currY = e.clientY - canvasTop;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'line',
                            dragGroups:"pencilLayerGroup"+layerNameN,
                            strokeStyle: color,
                            strokeWidth: width,
                            name: layerNameN,
                            x1: sourceX,
                            y1: sourceY,
                            x2: currX,
                            y2: currY
                        }).drawLayers().saveCanvas();
                        //设置原点坐标
                        sourceX = currX;
                        sourceY = currY;

                        $("#"+canvasId).addLayerToGroup(layerNameN,'pencilLayerGroup'+layerGroupNumber);
                    }
                };
                canvas.onmouseup = function (e) {
                    $("#" + canvasId).drawLayers().saveCanvas();
                    canvas.onmousemove = null;
                    layerArray.push($('#'+canvasId).getLayerGroup('pencilLayerGroup'+layerGroupNumber));
                    layerGroupNumber++;
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawPencil("canvas");  }
    };
    function canvasPencilTouch(){
        CanvasExt= {
            drawPencil: function (canvasId) {
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                //画图坐标原点
                var sourceX = 0;
                var sourceY = 0;

                var layerIndex = layer;
                var layerName = "pencilLayer";
                var layerNameN;

                //鼠标点击按下事件，画图准备
                canvas.ontouchstart = function (e) {
                    var e=e.touches[0];
                    var color = borderColor;
                    var width = borderWidth;

                    //设置原点坐标
                    sourceX = e.clientX - canvasLeft;
                    sourceY = e.clientY - canvasTop;

                    canvas.ontouchmove = function (e) {
                        var e=e.touches[0];
                        layerIndex++;
                        layer++;
                        layerNameN = layerName + layerIndex;
                        //当前坐标
                        var currX = e.clientX - canvasLeft;
                        var currY = e.clientY - canvasTop;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'line',
                            dragGroups:"pencilLayerGroup"+layerNameN,
                            strokeStyle: color,
                            strokeWidth: width,
                            name: layerNameN,
                            x1: sourceX,
                            y1: sourceY,
                            x2: currX,
                            y2: currY
                        }).drawLayers().saveCanvas();
                        //设置原点坐标
                        sourceX = currX;
                        sourceY = currY;

                        $("#"+canvasId).addLayerToGroup(layerNameN,'pencilLayerGroup'+layerGroupNumber);
                    }
                };
                canvas.ontouchend = function (e) {
                    $("#" + canvasId).drawLayers().saveCanvas();
                    canvas.ontouchmove = null;
                    layerArray.push($('#'+canvasId).getLayerGroup('pencilLayerGroup'+layerGroupNumber));
                    layerGroupNumber++;
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawPencil("canvas");  }
    };

    // Draw rectangle
    function canvasRect(){
        CanvasExt = {
            drawRect:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer; // 0
                var layerName="rectLayer";
                var layerNameN;

                var x=0;
                var y=0;
                var width;
                var height;

                //鼠标点击按下事件，画图准备
                canvas.onmousedown=function(e){
                    //设置颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x = e.clientX-canvasLeft;  // 鼠标相对于浏览器窗口可视区域的X坐标
                    y = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'rectangle',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: 1,
                        height: 1
                    }).drawLayers().saveCanvas();

                    //鼠标移动事件，画图
                    canvas.onmousemove=function(e){
                        width = e.clientX-canvasLeft-x;
                        height = e.clientY-canvasTop-y;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'rectangle',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            x: x,
                            y: y,
                            width: width,
                            height: height
                        }).drawLayers().saveCanvas();
                    };
                };

                canvas.onmouseup=function(e){
                    //设置颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerArray.push(layerNameN);

                    canvas.onmousemove=null; // 清除onmousemove事件

                    width = e.clientX-canvasLeft-x;
                    height = e.clientY-canvasTop-y;

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'rectangle',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x, y: y,
                        width: width,
                        height: height
                    }).drawLayers().saveCanvas();
                };
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawRect("canvas"); }
    };
    function canvasRectTouch(){
        CanvasExt = {
            drawRect:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer; // 0
                var layerName="rectLayer";
                var layerNameN;

                var x=0;
                var y=0;
                var width;
                var height;

                //鼠标点击按下事件，画图准备
                canvas.ontouchstart=function(e){
                    var e=e.touches[0];
                    //设置颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x = e.clientX-canvasLeft;  // 鼠标相对于浏览器窗口可视区域的X坐标
                    y = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'rectangle',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: 1,
                        height: 1
                    }).drawLayers().saveCanvas();

                    //鼠标移动事件，画图
                    canvas.ontouchmove=function(e){
                        var e=e.touches[0];
                        width = e.clientX-canvasLeft-x;
                        height = e.clientY-canvasTop-y;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'rectangle',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            x: x,
                            y: y,
                            width: width,
                            height: height
                        }).drawLayers().saveCanvas();
                    };
                };

                canvas.ontouchend=function(e){
                    //设置颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerArray.push(layerNameN);

                    canvas.ontouchmove=null; // 清除onmousemove事件

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'rectangle',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x, y: y,
                        width: width,
                        height: height
                    }).drawLayers().saveCanvas();
                };
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawRect("canvas"); }
    }

    // Draw circle
    function canvasCircle(){
        CanvasExt = {
            drawRect:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer; // 0
                var layerName="ellipseLayer";
                var layerNameN;
                var x=0;
                var y=0;
                var width;
                var height;

                //鼠标点击按下事件，画图准备
                canvas.onmousedown=function(e){
                    //设置颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x = e.clientX-canvasLeft;  // 鼠标相对于浏览器窗口可视区域的X坐标
                    y = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'ellipse',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: 1,
                        height: 1
                    }).drawLayers().saveCanvas();

                    //鼠标移动事件，画图
                    canvas.onmousemove=function(e){
                        width = e.clientX-canvasLeft-x;
                        height = e.clientY-canvasTop-y;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'ellipse',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            x: x,
                            y: y,
                            width: width,
                            height: height
                        }).drawLayers();
                    }
                };

                canvas.onmouseup=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;
                    layerArray.push(layerNameN);

                    canvas.onmousemove=null; // 清除onmousemove事件

                    width = e.clientX-canvasLeft-x;
                    height = e.clientY-canvasTop-y;

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'ellipse',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    }).drawLayers().saveCanvas();
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawRect("canvas"); }
    };
    function canvasCircleTouch(){
        CanvasExt = {
            drawRect:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer; // 0
                var layerName="ellipseLayer";
                var layerNameN;
                var x=0;
                var y=0;
                var width;
                var height;

                //鼠标点击按下事件，画图准备
                canvas.ontouchstart=function(e){
                    var e=e.touches[0];
                    //设置颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x = e.clientX-canvasLeft;  // 鼠标相对于浏览器窗口可视区域的X坐标
                    y = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'ellipse',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: 1,
                        height: 1
                    }).drawLayers().saveCanvas();

                    //鼠标移动事件，画图
                    canvas.ontouchmove=function(e){
                        var e=e.touches[0];
                        width = e.clientX-canvasLeft-x;
                        height = e.clientY-canvasTop-y;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'ellipse',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            x: x,
                            y: y,
                            width: width,
                            height: height
                        }).drawLayers();
                    }
                };

                canvas.ontouchend=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;
                    layerArray.push(layerNameN);

                    canvas.ontouchmove=null; // 清除onmousemove事件

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'ellipse',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    }).drawLayers().saveCanvas();
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawRect("canvas"); }
    }

    // Draw arrows
    function canvasArrow(){
        CanvasExt = {
            drawArrow:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer;
                var layerName="arrowLayer";
                var layerNameN;
                var x=0;
                var y=0;
                var x2;
                var y2;

                //鼠标点击按下事件，画图准备
                canvas.onmousedown=function(e){
                    //设置画笔颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x = e.clientX-canvasLeft;
                    y = e.clientY-canvasTop;

                    x2 = e.clientX-canvasLeft;
                    y2 = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        rounded: true,
                        endArrow: true,
                        arrowRadius: 15,
                        arrowAngle: 90,
                        x1: x,
                        y1: y,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();

                    //鼠标移动事件，画图
                    canvas.onmousemove=function(e){
                        x2=e.clientX-canvasLeft;
                        y2=e.clientY-canvasTop;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'line',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            rounded: true,
                            endArrow: true,
                            arrowRadius: 15,
                            arrowAngle: 90,
                            x1: x,
                            y1: y,
                            x2: x2,
                            y2: y2
                        }).drawLayers();
                    }
                };

                canvas.onmouseup=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;
                    layerArray.push(layerNameN);

                    x2=e.clientX-canvasLeft;
                    y2=e.clientY-canvasTop;

                    canvas.onmousemove=null;

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        rounded: true,
                        endArrow: true,
                        arrowRadius: 15,
                        arrowAngle: 90,
                        x1: x,
                        y1: y,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawArrow("canvas"); }
    };
    function canvasArrowTouch(){
        CanvasExt = {
            drawArrow:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer;
                var layerName="arrowLayer";
                var layerNameN;
                var x=0;
                var y=0;
                var x2;
                var y2;

                //鼠标点击按下事件，画图准备
                canvas.ontouchstart=function(e){
                    var e=e.touches[0];
                    //设置画笔颜色和宽度
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x = e.clientX-canvasLeft;
                    y = e.clientY-canvasTop;

                    x2 = e.clientX-canvasLeft;
                    y2 = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        rounded: true,
                        endArrow: true,
                        arrowRadius: 15,
                        arrowAngle: 90,
                        x1: x,
                        y1: y,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();

                    //鼠标移动事件，画图
                    canvas.ontouchmove=function(e){
                        var e=e.touches[0];
                        x2=e.clientX-canvasLeft;
                        y2=e.clientY-canvasTop;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'line',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            rounded: true,
                            endArrow: true,
                            arrowRadius: 15,
                            arrowAngle: 90,
                            x1: x,
                            y1: y,
                            x2: x2,
                            y2: y2
                        }).drawLayers();
                    }
                };

                canvas.ontouchend=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;
                    layerArray.push(layerNameN);

                    canvas.ontouchmove=null;

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        rounded: true,
                        endArrow: true,
                        arrowRadius: 15,
                        arrowAngle: 90,
                        x1: x,
                        y1: y,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawArrow("canvas"); }
    };

    // Draw line
    function canvasLine() {
        CanvasExt = {
            drawLine:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer; // 0
                var layerName="lineLayer";
                var layerNameN;
                var x1=0;
                var y1=0;
                var x2;
                var y2;

                canvas.onmousedown=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x1 = e.clientX-canvasLeft;  // 鼠标相对于浏览器窗口可视区域的X坐标
                    y1 = e.clientY-canvasTop;

                    x2 = e.clientX-canvasLeft;
                    y2 = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();

                    canvas.onmousemove=function(e){
                        x2=e.clientX-canvasLeft;
                        y2=e.clientY-canvasTop;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'line',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            x1: x1,
                            y1: y1,
                            x2: x2,
                            y2: y2
                        }).drawLayers();
                    }
                };

                canvas.onmouseup=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;
                    layerArray.push(layerNameN);

                    canvas.onmousemove=null; // 清除onmousemove事件

                    x2=e.clientX-canvasLeft;
                    y2=e.clientY-canvasTop;

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawLine("canvas"); }
    };
    function canvasLineTouch() {
        CanvasExt = {
            drawLine:function(canvasId){
                var canvas=document.getElementById(canvasId);// 画布
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var layerIndex=layer; // 0
                var layerName="lineLayer";
                var layerNameN;
                var x1=0;
                var y1=0;
                var x2;
                var y2;

                canvas.ontouchstart=function(e){
                    var e=e.touches[0];
                    var color=borderColor;
                    var penWidth=borderWidth;

                    layerIndex++;
                    layer++;
                    layerNameN=layerName+layerIndex;
                    x1 = e.clientX-canvasLeft;  // 鼠标相对于浏览器窗口可视区域的X坐标
                    y1 = e.clientY-canvasTop;

                    x2 = e.clientX-canvasLeft;
                    y2 = e.clientY-canvasTop;

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();

                    canvas.ontouchmove=function(e){
                        var e=e.touches[0];
                        x2=e.clientX-canvasLeft;
                        y2=e.clientY-canvasTop;

                        $("#"+canvasId).removeLayer(layerNameN);

                        $("#"+canvasId).addLayer({
                            type: 'line',
                            strokeStyle: color,
                            strokeWidth: penWidth,
                            name:layerNameN,
                            fromCenter: false,
                            x1: x1,
                            y1: y1,
                            x2: x2,
                            y2: y2
                        }).drawLayers();
                    }
                };

                canvas.ontouchend=function(e){
                    var color=borderColor;
                    var penWidth=borderWidth;
                    layerArray.push(layerNameN);

                    canvas.ontouchmove=null; // 清除onmousemove事件

                    $("#"+canvasId).removeLayer(layerNameN);

                    $("#"+canvasId).addLayer({
                        type: 'line',
                        strokeStyle: color,
                        strokeWidth: penWidth,
                        name:layerNameN,
                        fromCenter: false,
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2
                    }).drawLayers().saveCanvas();
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawLine("canvas"); }
    };

    // Draw text
    function canvasText(){
        CanvasExt = {
            drawText:function(canvasId) {
                var canvas=document.getElementById(canvasId);// 画布
                canvas.onmousedown=canvas.onmousemove=canvas.onmouseup=null;
                canvas.ontouchstart=canvas.ontouchmove=canvas.ontouchend=null;
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var x=0;
                var y=0;
                var textflag=true;

                // 鼠标点击按下事件，画图准备
                canvas.onmousedown=function(e){
                    if(textflag){
                        x = e.clientX - canvasLeft;
                        y = e.clientY - canvasTop;
                        ++inputNumber;

                        var textareahtml="<div class='text-warpper' id='textWarpper"+inputNumber+"' style='left: "+x+"px;top: "+y+"px;'>\
                                <textarea id='textarea"+inputNumber+"' rows='3' cols='25' autofocus style='font-size: "+fontSize+"px;color: "+borderColor+";'></textarea>\
                                <span  class='textarea-button' id='textBtn"+inputNumber+"'></span>\
                               </div>";
                        $("#canvasContainer").append(textareahtml);
                        setTimeout(function(){
                            $('#textarea' + inputNumber).focus();
                        }, 0);
                        textflag=false;
                    } else{
                        $("#canvasContainer .text-warpper").css("border","1px dashed rgba(0,0,0,0)");
                        var textareas=$("#canvasContainer textarea");
                        for(var i=0;i<textareas.length;i++){
                            if($(textareas[i]).val()==""){
                                $(textareas[i]).parent().remove();
                            }
                        }
                        textflag=true;
                    }

                    $(".textarea-button").mouseover(function(){
                        $(this).css("cursor","Crosshair");
                    });

                    $(".textarea-button").mousedown(function(ev){
                        canvas.onmousedown=null;
                        var that=this;
                        ev=ev||event;
                        var disX=ev.clientX-$(that)[0].offsetLeft;
                        var disY=ev.clientY-$(that)[0].offsetTop;
                        document.onmousemove=function (ev){
                            ev=ev||event;
                            $(that).parent()[0].style.width=ev.clientX-disX+$(that)[0].offsetWidth+'px';
                            $(that).parent()[0].style.height=ev.clientY-disY+$(that)[0].offsetHeight+'px';
                            $(that).prev()[0].style.width=ev.clientX-disX+$(that)[0].offsetWidth+'px';
                            $(that).prev()[0].style.height=ev.clientY-disY+$(that)[0].offsetHeight+'px';
                            $(that).parent()[0].style.border='1px dashed #000000';
                            document.onmouseup=function (){
                                $(that).parent().css("border","1px dashed rgba(0,0,0,0)");
                                document.onmousemove = document.onmouseup = null;
                                canvasText();
                            };
                            return false;
                        };
                        textWHChangeFlag=false;
                    });

                    $('#canvasContainer textarea').bind('input propertychange', function(){
                        $(this).parent()[0].style.height = $(this)[0].scrollHeight+ 'px';
                        $(this)[0].style.height = $(this)[0].scrollHeight+ 'px';
                    });

                    $("#canvasContainer textarea").on("focus",function(){
                        if($(this).val()!=""){
                            $(this).parent().css({
                                "border":"1px dashed #000000"
                            });
                        }
                        if(layerArray.indexOf($(this).attr("id"))==-1){
                            layerArray.push($(this).attr("id"));
                        }
                    });

                    $("#canvasContainer textarea").on("blur",function(){
                        $(this).parent().css("border","1px dashed rgba(0,0,0,0)");
                    });
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawText("canvas"); }
    };
    function canvasTextTouch(){
        CanvasExt = {
            drawText:function(canvasId) {
                var canvas=document.getElementById(canvasId);// 画布
                canvas.ontouchstart=canvas.ontouchmove=canvas.ontouchend=null;
                var canvasLeft=getCanvasInfo("canvas").canvasLeft;
                var canvasTop=getCanvasInfo("canvas").canvasTop;

                var x=0;
                var y=0;
                var textflag=true;

                // 鼠标点击按下事件，画图准备
                canvas.ontouchstart=function(e){
                    var e=e.touches[0];
                    if(textflag){
                        x = e.clientX - canvasLeft;
                        y = e.clientY - canvasTop;
                        ++inputNumber;

                        var textareahtml="<div class='text-warpper' id='textWarpper"+inputNumber+"' style='left: "+x+"px;top: "+y+"px;'>\
                                <textarea id='textarea"+inputNumber+"' rows='3' cols='25' autofocus style='font-size: "+fontSize+"px;color: "+borderColor+";'></textarea>\
                                <span  class='textarea-button' id='textBtn"+inputNumber+"'></span>\
                               </div>";
                        $("#canvasContainer").append(textareahtml);
                        textflag=false;
                    } else{
                        $("#canvasContainer .text-warpper").css("border","1px dashed rgba(0,0,0,0)");
                        var textareas=$("#canvasContainer textarea");
                        for(var i=0;i<textareas.length;i++){
                            if($(textareas[i]).val()==""){
                                $(textareas[i]).parent().remove();
                            }
                        }
                        textflag=true;
                    }

                    $(".textarea-button").mouseover(function(){
                        $(this).css("cursor","Crosshair");
                    });

                    $(".textarea-button").on("touchstart",function(ev){
                        // 判断默认行为是否可以被禁用
                        if (ev.cancelable) {
                            // 判断默认行为是否已经被禁用
                            if (!ev.defaultPrevented) {
                                ev.preventDefault();
                            }
                        }
                        canvas.ontouchstart=null;
                        var that=this;
                        ev=ev||event;
                        var disX=ev.clientX-$(that)[0].offsetLeft;
                        var disY=ev.clientY-$(that)[0].offsetTop;
                        document.ontouchmove=function (ev){
                            ev=ev||event;
                            $(that).parent()[0].style.width=ev.clientX-disX+$(that)[0].offsetWidth+'px';
                            $(that).parent()[0].style.height=ev.clientY-disY+$(that)[0].offsetHeight+'px';
                            $(that).prev()[0].style.width=ev.clientX-disX+$(that)[0].offsetWidth+'px';
                            $(that).prev()[0].style.height=ev.clientY-disY+$(that)[0].offsetHeight+'px';
                            $(that).parent()[0].style.border='1px dashed #000000';
                            document.ontouchend=function (){
                                $(that).parent().css("border","1px dashed rgba(0,0,0,0)");
                                document.ontouchmove = document.ontouchend = null;
                                canvasText();
                            };
                            return false;
                        };
                        textWHChangeFlag=false;
                    });

                    $('#canvasContainer textarea').bind('input propertychange', function(){
                        $(this).parent()[0].style.height = $(this)[0].scrollHeight+ 'px';
                        $(this)[0].style.height = $(this)[0].scrollHeight+ 'px';
                    });

                    $("#canvasContainer textarea").on("focus",function(){
                        if($(this).val()!=""){
                            $(this).parent().css({
                                "border":"1px dashed #000000"
                            });
                        }
                        if(layerArray.indexOf($(this).attr("id"))==-1){
                            layerArray.push($(this).attr("id"));
                        }
                    });

                    $("#canvasContainer textarea").on("blur",function(){
                        $(this).parent().css("border","1px dashed rgba(0,0,0,0)");
                    });
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawText("canvas"); }
    };

    // Shapes drag
    function Draggable(){
        CanvasExt= {
            drawPointer: function (canvasId) {
                var canvas=document.getElementById(canvasId);
                for(var i=0;i<layerArray.length;i++){
                    if(layerArray[i] instanceof Array){
                        $(""+canvasId).setLayerGroup(layerArray[i].name, {
                            dragGroups: [layerArray[i].name],
                            bringToFront: true
                        }).drawLayers();
                    }else{
                        $(""+canvasId).setLayer(layerArray[i], {
                            draggable: true,
                            bringToFront: true
                        }).drawLayers();
                    }
                }
                if(machineType=="mobile"){
                    canvas.ontouchstart = function (e) {};
                    canvas.ontouchend = function (e) {
                        canvas.ontouchstart = null;
                        canvas.ontouchmove = null;
                    }
                }else{
                    canvas.onmousedown = function (e) {};
                    canvas.onmouseup = function (e) {
                        canvas.onmousedown = null;
                        canvas.onmousemove = null;
                    }
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.drawPointer("canvas"); }
        $('canvas').setLayers({
            cursors: {
                mouseover: 'move',
                mouseout: 'default'
            }
        });
    };

    // Shapes cannot be dragged
    function noDraggable(){
        CanvasExt= {
            NoDraggable: function (canvasId) {
                for(i=0;i<layerArray.length;i++){
                    if(layerArray[i] instanceof Array){
                        $(""+canvasId).setLayerGroup(layerArray[i].name, {
                            dragGroups: null,
                            bringToFront: false
                        }).drawLayers();
                    }else{
                        $(""+canvasId).setLayer(layerArray[i], {
                            draggable: false,
                            bringToFront: false
                        }).drawLayers();
                    }
                }
            }
        };
        drawPen();
        function drawPen(){ CanvasExt.NoDraggable("canvas"); }
        $('canvas').setLayers({
            cursors: {
                mouseover: 'default',
                mouseout: 'default'
            }
        });
    };

    // Text dragging
    function textDraggable(textareaEle){
        var dragging = false;
        var iX, iY;
        textareaEle.bind("mousedown",function(e){
            dragging = true;
            iX = e.clientX - this.offsetLeft;
            iY = e.clientY - this.offsetTop;
            this.setCapture && this.setCapture();
            return false;
        });
        $("#canvasContainer").bind("mousemove",function(e){
            if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                var oY = e.clientY - iY;
                textareaEle.css({"left":oX + "px", "top":oY + "px"});
                return false;
            }
        });
        $("#canvasContainer").bind("mouseup",function(e){
            dragging = false;
            e.cancelBubble = true;
        });
    };
    function textDraggableTouch(textareaEle){
        var dragging = false;
        var iX, iY;

        textareaEle[0].ontouchstart=function(e){
            var e=e.touches[0];
            dragging = true;
            iX = e.clientX - this.offsetLeft;
            iY = e.clientY - this.offsetTop;
            this.setCapture && this.setCapture();
            return false;
        };
        $("#canvasContainer")[0].ontouchmove=function(e){
            var e=e.touches[0];
            if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                var oY = e.clientY - iY;
                textareaEle.css({"left":oX + "px", "top":oY + "px"});
                return false;
            }
        };
        $("#canvasContainer")[0].ontouchend=function(e){
            dragging = false;
            e.cancelBubble = true;
        };
    };

    // Text can't be dragged
    function textNoDraggable(textareaEle) {
        if(machineType=="mobile"){
            textareaEle[0].ontouchstart=null;
            $("#canvasContainer")[0].ontouchmove=null;
            $("#canvasContainer")[0].ontouchend=null;
        }else{
            textareaEle.unbind("mousedown");
            $("#canvasContainer").unbind("mousemove");
            $("#canvasContainer").unbind("mouseup");
        }
    }

    function getCanvasInfo(canvasEleId){
        var canvas=document.getElementById(canvasEleId);// 画布
        var canvasPositon = canvas.getBoundingClientRect();//获取元素位置
        var canvasLeft=canvasPositon.left;// 画布元素左边距离页面的距离
        var canvasTop=canvasPositon.top; // 画布元素上边距离页面的距离
        return {
            "canvasLeft":canvasLeft,
            "canvasTop":canvasTop
        }
    };

    function markupInit(flag,item){
        var markupPanel=markupPanelInit();
        $body.append(markupPanel);
        var canvasEle=$body.find('#canvasContainer #canvas')[0];
        var PaintListsHeight=$("#PaintLists").height();
        var markupPanelNavHeight=$("#markupPanelNav").height();
        var canvasHeight=$body.height()-92;
        var canvasWidth;
        var imgwidth;
        var imgheight;
        if(machineType=="mobile"){
            canvasWidth=$body.width();
            imgwidth=canvasWidth-20;
            imgheight=canvasHeight-20-PaintListsHeight+14;
        }else{
            canvasWidth=$body.width()-130;
            imgwidth=canvasWidth;
            imgheight=canvasHeight;
        }
        scope.engine.getSnapShot(imgwidth,imgheight,function(url){
            position=scope.engine.getCameraPosition();
            target=scope.engine.getCameraTarget();
            $body.find("#canvasContainer").append("<img src='"+url+"' style='position: absolute;z-index: 1;'/>");
            if(machineType=="mobile"){
                $body.find("#canvasContainer").css({width:canvasWidth,height:canvasHeight-PaintListsHeight+14});
                canvasEle.setAttribute("width",(canvasWidth)+"px");
                canvasEle.setAttribute("height",(canvasHeight-PaintListsHeight+14)+"px");
                var paddingValue=($body.height()-PaintListsHeight-markupPanelNavHeight-31-22-$("#canvasContainer").height())/2;
                $("#paintingCanvas").css({"padding-top":markupPanelNavHeight+31+paddingValue+"px","padding-bottom": PaintListsHeight+paddingValue+"px"});
            }else{
                $body.find("#canvasContainer").css({width:canvasWidth+20,height:canvasHeight+20});
                $body.find("#paintingCanvas").css("margin-left","110px");
                canvasEle.setAttribute("width",(canvasWidth+20)+"px");
                canvasEle.setAttribute("height",(canvasHeight+20)+"px");
            }
        });

        $body.find("#markupPanelClose").unbind().click(function(){
            layerArray=[];
            layer=0;
            $("#markupPanel").remove();
            borderWidth=init.borderWidth;
            borderColor=init.borderColor;
            fontSize=init.fontSize;
        });
        $body.find("#saved").unbind().click(function(){
            layerArray=[];
            layer=0;
            var createMarkupDialog;
            if(flag==0){
                createMarkupDialog="<div id='createMarkupDialogWarpper'>\
                                        <div id='createMarkupDialog'>\
                                            <div class='createMarkupDialogTitle'>创建批阅</div>\
                                            <div class='createmarkupDialogBody'>\
                                                <span>名称</span>\
                                                <input id='name'placeholder='name'/>\
                                                <span>描述</span>\
                                                <textarea id='description' rows='3' cols='10' placeholder='description'></textarea>\
                                            </div>\
                                            <div class='createMarkupDialogFooter'>\
                                                <button id='createMarkupBtn'><i class='fa fa-check' style='margin-right: 10px'></i>确定</button>\
                                                <button id='createMarkupCancel'><i class='fa fa-trash' style='margin-right: 10px'></i>取消</button>\
                                            </div>\
                                        </div>\
                                      </div>";
            }else{
                createMarkupDialog="<div id='createMarkupDialogWarpper'>\
                                        <div id='createMarkupDialog'>\
                                            <div class='createMarkupDialogTitle'>创建批阅</div>\
                                            <div class='createmarkupDialogBody'>\
                                                <span>名称</span>\
                                                <input id='name'placeholder='name' value='"+item.name+"'/>\
                                                <span>描述</span>\
                                                <textarea id='description' rows='3' cols='10' placeholder='description'>"+item.description+"</textarea>\
                                            </div>\
                                            <div class='createMarkupDialogFooter'>\
                                                <button id='createMarkupBtn'><i class='fa fa-check' style='margin-right: 10px'></i>确定</button>\
                                                <button id='createMarkupCancel'><i class='fa fa-trash' style='margin-right: 10px'></i>取消</button>\
                                            </div>\
                                        </div>\
                                      </div>";
            }
            $body.find("#markupPanel").append(createMarkupDialog);

            $body.find("#createMarkupCancel").unbind().click(function(){
                $body.find("#createMarkupDialogWarpper").remove();
            });

            $body.find("#createMarkupBtn").unbind().click(function() {
                var name = $body.find("#createMarkupDialog #name").val();
                var description = $body.find("#createMarkupDialog #description").val();
                html2canvas($("#canvasContainer"), {
                    onrendered: function (canvas) {
                        var canvasImg = canvas.toDataURL();
                        thumbnail = canvasImg;
                        if(flag==0){
                            onAdd(null, name, description, thumbnail, position, target);
                        }else{
                            for(var i=0;i<visualAngleArray.length;i++){
                                if(visualAngleArray[i].id==item.id){
                                    visualAngleArray[i].position=position;
                                    visualAngleArray[i].target=target;
                                }
                            }
                            onEdit(item,name,description,thumbnail,position,target);
                        }
                        $body.find("#createMarkupDialogWarpper").remove();
                        $("#markupPanel").remove();
                        borderWidth=init.borderWidth;
                        borderColor=init.borderColor;
                        fontSize=init.fontSize;
                    }
                });
            });
        });

        $body.find("#Redo").unbind().click(function() {
            document.getElementById("canvas").onmousedown=null;
            document.getElementById("canvas").onmousemove=null;
            document.getElementById("canvas").onmouseup=null;
            var length=layerArray.length;
            if(length>0){
                var layernanme=layerArray[length-1];
                if(layernanme instanceof Array){
                    $('#canvas').setLayerGroup(layernanme.name, {
                        visible: false
                    }).drawLayers();
                }else if(layernanme.indexOf("textarea")>=0){
                    $("#"+layernanme).parent().css("display","none");
                }else{
                    $body.find('#canvasContainer canvas').setLayer(layernanme, {
                        visible: false
                    }).drawLayers();
                }
                undoLayerArray.push(layernanme);
                layerArray.pop(layernanme);
            }
        });
        $body.find("#Undo").unbind().click(function(){
            document.getElementById("canvas").onmousedown=null;
            document.getElementById("canvas").onmousemove=null;
            document.getElementById("canvas").onmouseup=null;
            var length=undoLayerArray.length;
            if(length>0){
                var layernanme=undoLayerArray[length-1];
                if(layernanme instanceof Array){
                    $('#canvas').setLayerGroup(layernanme.name, {
                        visible: true
                    }).drawLayers();
                }else if(layernanme.indexOf("textarea")>=0){
                    $("#"+layernanme).parent().css("display","block");
                }else{
                    $body.find('#canvasContainer canvas').setLayer(layernanme, {
                        visible: true
                    }).drawLayers();
                }
                layerArray.push(layernanme);
                undoLayerArray.pop(layernanme);
            }
        });

        $body.find("#PaintLists>ul>li").unbind().click(function(){
            if($(this).attr("data-flag")=="painterLis"){
                $("[data-flag='painterLis']").removeClass("li-dark");
                $(this).addClass("li-dark");
            }

            if($(this).find(".copllese").length>0){
                if($(this).find(".tools").css("display")=="block"){
                    $(this).find(".tools").css("display","none");
                }else{
                    $("#PaintLists").find(".tools").css("display","none");
                    $(this).find(".tools").css("display","block");
                }
            }else{
                $("#PaintLists").find(".tools").css("display","none");
            }

            if($(this).attr("id")=="drawPencil"){
                $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
                if(machineType=="pc"){
                    canvasPencil();
                }else{
                    canvasPencilTouch();
                }
                noDraggable();
                if(machineType=="mobile"){
                    $("#canvasContainer textarea").on("touchstart",function(){
                        $(this).css({"cursor":"text"});
                        textNoDraggable($(this).parent());
                    });
                }else{
                    $("#canvasContainer textarea").mouseover(function(){
                        $(this).css({"cursor":"text"});
                        textNoDraggable($(this).parent());
                    });
                }
            }
            if($(this).attr("id")=="drawText"){
                $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
                if(machineType=="mobile"){
                    canvasTextTouch();
                }else{
                    canvasText()
                }
                // canvasText();
                if(machineType=="mobile"){
                    $("#canvasContainer textarea").on("touchstart",function(){
                        $(this).css({"cursor":"text"});
                        textNoDraggable($(this).parent());
                    });
                }else{
                    $("#canvasContainer textarea").mouseover(function(){
                        $(this).css({"cursor":"text"});
                        textNoDraggable($(this).parent());
                    });
                }
                noDraggable();
            }
            if($(this).attr("id")=="pointer"){
                $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
                Draggable();
                // text
                if(machineType=="mobile"){
                    $("#canvasContainer textarea").on("touchstart",function(){
                        $(this).css({"cursor":"move"});
                        textDraggableTouch($(this).parent());
                    });
                }else{
                    $("#canvasContainer textarea").mouseover(function(){
                        $(this).css({"cursor":"move"});
                        textDraggable($(this).parent());
                    });
                }
            }
        });

        $body.find("#drawRect").unbind().click(function(){
            $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
            $(this).addClass("li-dark");
            if(machineType=="pc"){
                canvasRect();
            }else{
                canvasRectTouch();
            }
            noDraggable();
            if(machineType=="mobile"){
                $("#canvasContainer textarea").on("touchstart",function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }else{
                $("#canvasContainer textarea").mouseover(function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }
        });
        $body.find("#drawCircle").unbind().click(function(){
            $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
            $(this).addClass("li-dark");
            if(machineType=="pc"){
                canvasCircle();
            }else{
                canvasCircleTouch();
            }
            noDraggable();
            if(machineType=="mobile"){
                $("#canvasContainer textarea").on("touchstart",function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }else{
                $("#canvasContainer textarea").mouseover(function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }
        });
        $body.find("#drawArrow").unbind().click(function(){
            $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
            $(this).addClass("li-dark");
            if(machineType=="pc"){
                canvasArrow();
            }else{
                canvasArrowTouch();
            }
            noDraggable();
            if(machineType=="mobile"){
                $("#canvasContainer textarea").on("touchstart",function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }else{
                $("#canvasContainer textarea").mouseover(function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }
        });
        $body.find("#drawLine").unbind().click(function(){
            $("#PaintLists>ul>li:not('.notchangebgd') li").removeClass("li-dark");
            $(this).addClass("li-dark");
            if(machineType=="pc"){
                canvasLine();
            }else{
                canvasLineTouch();
            }
            noDraggable();
            if(machineType=="mobile"){
                $("#canvasContainer textarea").on("touchstart",function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }else{
                $("#canvasContainer textarea").mouseover(function(){
                    $(this).css({"cursor":"text"});
                    textNoDraggable($(this).parent());
                });
            }
        });
        $body.find("#LineSizeTools li").unbind().click(function(){
            $("#lineSize").removeClass("li-dark");
            $(this).siblings().removeClass("li-dark");
            $(this).addClass("li-dark");
            if($(this).attr("id")=="drawLineSize1"){
                borderWidth=1;
            }else if($(this).attr("id")=="drawLineSize2"){
                borderWidth=2;
            }else if($(this).attr("id")=="drawLineSize3"){
                borderWidth=3;
            }else{
                borderWidth=4;
            }
        });
        $body.find("#fontSizetools li").unbind().click(function(){
            $("#fontSize").removeClass("li-dark");
            $(this).siblings().removeClass("li-dark");
            $(this).addClass("li-dark");
            if($(this).attr("id")=="font12"){
                fontSize=12;
            }else if($(this).attr("id")=="font14"){
                fontSize=14;
            } else if($(this).attr("id")=="font16"){
                fontSize=16;
            } else if($(this).attr("id")=="font18"){
                fontSize=18;
            } else if($(this).attr("id")=="font20"){
                fontSize=20;
            } else{
                fontSize=22;
            }
        });
        $body.find("#palette").colpick({
            colorScheme:"dark",
            color:"#FF2A2A",
            onChange:function(hsb,hex,rgb,el,bySetColor){
                borderColor="#"+hex;
                $("#changeColor").css("background","#"+hex);
            },
            onSubmit:function(flat){
                $(".colpick").css("display","none");
                $("#palette").removeClass("li-dark");
            }
        });
    };

    // Judge mobile or PC
    function machineJudge(){
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return {"machine":"mobile","width":document.body.offsetWidth,"height":document.body.offsetHeight};
        }else{
            return {"machine":"pc","width":document.body.offsetWidth,"height":document.body.offsetHeight};
        }
    }

    //Judge mobile Horizontal or Vertical
    function hengshuping(){
        var image=document.getElementById("markupImgShow");
        var PaintListsHeight=$("#PaintLists").height();
        var markupPanelNavHeight=$("#markupPanelNav").height();
        var machineType=machineJudge();
        if(machineType.machine=="mobile"){
            var imgwidth=machineType.height;
            var imgheight=machineType.width;
            if(image!=null){ DrawImage(image,imgwidth,imgheight);}
            if(machine.width<400){
                scope.parentDiv.css("width",machine.width);
            }
            var paddingValue=($body.height()-PaintListsHeight-markupPanelNavHeight-31-22-$("#canvasContainer").height())/2;
            $("#paintingCanvas").css({"padding-top":markupPanelNavHeight+31+paddingValue+"px","padding-bottom": PaintListsHeight+paddingValue+"px"});
            $("#markupPanelNav").css("top","0");
            $("#PaintLists").css("bottom","0");
        }
    }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

    function DrawImage(ImgD,kw,kh) {
        var image=new Image();
        image.src=ImgD.src;
        if(image.height<image.width){  // 说明 宽>高 ----> 以宽为标准
            if(image.width>kw) {
                ImgD.width=kw-20;
                ImgD.height=(image.height*kw)/image.width;
                $(ImgD).css({"margin-top":-(ImgD.height/2),"margin-left":-(ImgD.width/2)});
            } else {
                ImgD.width=image.width-20;
                ImgD.height=image.height;
                $(ImgD).css({"margin-top":-(ImgD.height/2),"margin-left":-(ImgD.width/2)});
            }
        }else{ // 以高为标准
            if(image.height>kh) {
                ImgD.height=kh;
                ImgD.width=(image.width*kh)/image.height-20;
                $(ImgD).css({"margin-top":-(ImgD.height/2),"margin-left":-(ImgD.width/2)});
            } else {
                ImgD.width=image.width-20;
                ImgD.height=image.height;
                $(ImgD).css({"margin-top":-(ImgD.height/2),"margin-left":-(ImgD.width/2)});
            }
        }
    };
};

