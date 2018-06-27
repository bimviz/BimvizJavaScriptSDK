
BIMVIZ.UI.DefaultStoreyGridControl = function (name, iconClass) {
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);

    this.enabled = false;
};

BIMVIZ.UI.DefaultStoreyGridControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultStoreyGridControl.constructor = BIMVIZ.UI.DefaultStoreyGridControl;

BIMVIZ.UI.DefaultStoreyGridControl.prototype.onProjectLoaded = function (project) {
	var scope = this;
    var html = '<div id="bv_storeybar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="input-group pull-left">\
                    <label class="switch switch-primary switch-round" >\
                        <span style="color:white"> 轴网 </span>\
                    </label>\
                </div>\
            </div>\
            <div id="bv_storeygrids">\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    this.parentDiv.css("width", "200px");
    var template = '<div class="border-bottom-1">\
                        <a style="text-decoration: none">\
                            <div class="row padding-20">\
                                <input type="checkbox" class="bv_gridcheckbox" style="width:30px;">\
                                <span class="switch-label" data-on="YES" data-off="NO">\</span>\
                                <span style="color:white;" class="bv_storeygrid">{0}</span>\
                            </div>\
                        </a>\
                    </div>';


    var container = $('#bv_storeygrids');
    container.html('');
    var storeys = project.spaces;
    var floorGridMgr = scope.engine.getFloorGridManager();
    floorGridMgr.getFloorGrids(function (success, list) {
        if (success) {
            list.forEach(function (item) {
                var existStorey = storeys.find(function (storey) {
                    return storey.Name == item.levelName;
                });

                if (existStorey){
                    var text = template.format(item.levelName);
                    container.append(text);
                }
            });

            $('.bv_gridcheckbox').click(function (e) {
                var ch = $(this).prop("checked");
                var sibling = $(this).siblings('.bv_storeygrid');
                var levelName = sibling.text();
                if (ch) {
                    floorGridMgr.showStoreyGrids(levelName);
                } else {
                    floorGridMgr.hideStoreyGrids(levelName);
                }
            });
        }        
    });
};