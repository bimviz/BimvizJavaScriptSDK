
BIMVIZ.UI.DefaultDomainControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultDomainControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultDomainControl.constructor = BIMVIZ.UI.DefaultDomainControl;

BIMVIZ.UI.DefaultDomainControl.prototype.onProjectLoaded = function(project){
    var container = this.parentDiv;
    container.html('');

    var template = '\
                 <div class="border-bottom-1 bv_domainitem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-3 col-sm-3 col-xs-3 col padding-0" style="width:50px;">\
                                    <img src="{3}" style="width:48px;height:48px;" />\
                                </div>\
                                <div class="col-md-9 col-sm-9 col-xs-9 padding-0" style="width:300px;">\
                                    <div style="float:left;padding-top:5px;">\
                                        <div class="list-item-font">\{1}</div>\
                                        <div class="list-item-fontsmall">\Meshs:{2}</div>\
                                    </div>\
                                    <div style="float:right;padding-top:10px;">\
                                        <label class="switch switch-primary switch-round">\
                                            <input type="checkbox" class="bv_domaincheckbox" checked="" style="width:30px;">\
                                            <span class="switch-label" data-on="" data-off="">\</span>\
                                        </label>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                     ';

    var icondict = {
        Wall: 'wall.png',
        Door: 'door.png',
        Slab: 'slab.png',
        Beam: 'beam.png',
        Stair: 'stair.png',
        WallStandardCase: 'wall.png',
        Window: 'window.png',
        Railing: 'railing.png',
        BuildingElementProxy: 'default.png',
        Column: 'column.png',
        StairFlight: 'stair.png',
        FlowTerminal: 'default.png',
        FurnishingElement: 'Furnishing.png'
    };

    var imagepath = this.engine.ResourcePath + 'images/types/';
    var domainDict = project.domains;
    for (var key in domainDict) {
        if (domainDict.hasOwnProperty(key)) {
            var name = key.replace(/Ifc/, '');
            var meshnumber = domainDict[key]

            var defaulticon = imagepath + 'default.png';
            if (icondict[name] != undefined) {
                defaulticon = imagepath + icondict[name];
            }

            var text = template.format(key, name, meshnumber, defaulticon);

            container.append(text);
        }

    }

    var scope = this;
    $(".bv_domaincheckbox").change(function () {
        var type = $(this).parents('.bv_domainitem').attr("rel");
        var ch = $(this).prop("checked");
        scope.engine.showType(type, ch);
    });
	
};