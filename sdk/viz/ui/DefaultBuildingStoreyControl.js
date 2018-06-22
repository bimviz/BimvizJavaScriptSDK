
BIMVIZ.UI.DefaultBuildingStoreyControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);

    this.enabled = false;
};

BIMVIZ.UI.DefaultBuildingStoreyControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultBuildingStoreyControl.constructor = BIMVIZ.UI.DefaultBuildingStoreyControl;

BIMVIZ.UI.DefaultBuildingStoreyControl.prototype.onProjectLoaded = function(project){
	var scope = this;
    var html = '<div id="bv_storeybar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="input-group pull-left">\
                    <label class="switch switch-primary switch-round" >\
                        <input type="checkbox" id="bv_storeymode">\
                        <span class="switch-label" data-on="" data-off=""></span>\
                        <span style="color:white"> 楼层模式 </span>\
                    </label>\
                </div>\
            </div>\
            <div id="bv_storeyitems">\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    this.parentDiv.css("width", "200px");
    var template = '<div class="border-bottom-1 bv_storeyitem" rel="{0}">\
                        <a style="text-decoration: none">\
                            <div class="row padding-20">\
                                <center>\
                                    <span style="color:white;">{1}</span>\
                                </center>\
                            </div>\
                        </a>\
                    </div>';


    var storeys = project.spaces;
    var container = $('#bv_storeyitems');

    container.html('');
    storeys.forEach(function (item) {
        var text = template.format(item.Id, item.Name);
        container.append(text);
    });

     $("#bv_storeymode").change(function () {
            scope.enabled = $(this).prop("checked");

            if (scope.enabled == false) {
                storeys.forEach(function (other) {
                    bimEngine.showBuildingStorey(other.Id, true);     
                });

                bimEngine.resetCameraLook(true);
            }

            scope.engine.showType('IfcSpace', false);
        });

    $('.bv_storeyitem a').click(function (e) {
        var parent = $(this).parents('.bv_storeyitem');
        var id = parseInt(parent.attr('rel'));

        if (scope.enabled == false)
            return;

        scope.engine.showBuildingStorey(id, true);
        scope.engine.showType('IfcSpace', false);
        
        scope.engine.watchBuildingStorey(id, function () {
            storeys.forEach(function (other) {
                if (other.Id != id) {
                    scope.engine.showBuildingStorey(other.Id, false);
                }
            });
        });
    });

};