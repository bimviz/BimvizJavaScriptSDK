BIMVIZ.UI.DefaultPlanViewControl = function(name, iconClass){
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultPlanViewControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultPlanViewControl.constructor = BIMVIZ.UI.DefaultPlanViewControl;

BIMVIZ.UI.DefaultPlanViewControl.prototype.onShow = function(){
    if(this.manager && this.selectedId){
        this.manager.switchPlanView(this.selectedId);
    }
};

BIMVIZ.UI.DefaultPlanViewControl.prototype.onHide = function(){
    if(this.manager){
        this.manager.clear();
    }
};

BIMVIZ.UI.DefaultPlanViewControl.prototype.onProjectLoaded = function (project) {
    var itemTemplate = "<div class='planview_item' rel='{0}'>\
                                <div class='planview_item_thumbnail'><img src='{2}'style='width: 140px;'/></div>\
                                <p class='planview_item_name'>{1}</p>\
                              </div>";

    var control;
    var parentContainer;
    var buttonPanelDiv;
    var planviewsDiv;
    var planviewDisplayerDiv;
    var scope = this;
    var controlId = "bv_planviewDiv_" + scope.engine.id;

    scope.manager = scope.engine.getPlanViewManager();

    function addItemToUi(item) {
        var text = itemTemplate.format(item.id, item.name, item.thumbnailurl);
        planviewsDiv.append(text);

        // For Click
        $('.planview_item[rel=' + item.id + ']').click(function (e) {
            scope.manager.switchPlanView(item.id);
        });
    }

    function onresize(){
        var width = parentContainer.width() - 20;
        var height = parentContainer.height() -  buttonPanelDiv.height() - 20;
        if (height < 20 || width < 185)
            return;

        control.css('top',  (buttonPanelDiv.height() + 10) + 'px');
        control.css('width',  width + 'px');
        control.css('height',  height + 'px');

        planviewDisplayerDiv.css('left', '175px');
        planviewDisplayerDiv.css('width', width -177);
        planviewDisplayerDiv.css('height',height-2);

        $('#planviewList').css('height', height-2);
    }

    function init() {
        var controlHtml = '<div id="'+controlId+'" style="position: absolute;left: 10px;background-color:white; border: 1px dotted black;" class="panel">\
                                <div id="planviewList" class="planview_panel_nofloat" style="overflow:auto;width:165px;">\
                                    <div class="pull-left" style="width:100%;height:45px;background-color:rgba(0, 0, 0, 0.7);">\
                                        <label style="margin:10px 10px 5px 10px;">\
                                            <span id="sp_planview_summary" style="color:white;"> 图纸张数：0 </span>\
                                        </label>\
                                    </div>\
                                </div>\
                                <div id="planviewdisplayer" style="position: absolute;background-color: white;">\
                                </div>\
                            </div>';

        parentContainer = $('#'+scope.engine.ContainerId);
        buttonPanelDiv = $('#bv_DefaultToolBar_Button');

        var width = parentContainer.width() - 20;
        var height = parentContainer.height() - buttonPanelDiv.height() - 20;

        scope.parentDiv.css('width', '0px');
        scope.parentDiv.css('height', '0px');
        scope.parentDiv.removeClass("padding-20");
        scope.parentDiv.html(controlHtml);

        control = $('#'+controlId);
        control.css('top', (buttonPanelDiv.height() + 10) + 'px');
        control.css('width', width+ 'px');
        control.css('height', height+ 'px');

        planviewsDiv = $('#planviewList');
        planviewDisplayerDiv = $('#planviewdisplayer');

        $(window).resize(function () {
            onresize();
        });
        onresize();

        scope.manager.setParentContainer('planviewdisplayer');
        scope.manager.getList(function (success, list) {
            if (success) {
                if (list.length > 0){
                    scope.selectedId = list[0].id;
                    list.forEach(function (item) {
                        addItemToUi(item);
                    });
                }
                
                $('#sp_planview_summary').html(' 图纸张数：' + list.length);
            }
        });
    }

    if (scope.manager) {
        init();
    }    
};