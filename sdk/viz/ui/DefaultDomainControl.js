
BIMVIZ.UI.DefaultDomainControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultDomainControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultDomainControl.constructor = BIMVIZ.UI.DefaultDomainControl;

BIMVIZ.UI.DefaultDomainControl.prototype.onProjectLoaded = function(project){
    var container = this.parentDiv;
    container.html('');

    var buttonDiv = '<div class="border-bottom-1 padding-20" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_domain_check_all"><i class="fa fa-check-square-o"></i> 全选</a>\
                    <a class="btn" id="bv_domain_uncheck_all"><i class="fa fa-square-o"></i> 清空</a>\
                    <a class="btn" id="bv_domain_anticheck"><i class="fa fa-clone"></i> 反选</a>\
                </div>\
            </div>\
            <div class="padding-20 nopadding-top">\
                <div id="bv_domainTree"></div>\
            </div>';

    this.parentDiv.append(buttonDiv);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    
    var treecontainer = $('#bv_domainTree');

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
                                            <input type="checkbox" class="bv_domaincheckbox" {4} style="width:30px;">\
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

            var text = template.format(key, name, meshnumber, defaulticon, 'checked=""');
            if (key == 'IfcSpace'){
                text = template.format(key, name, meshnumber, defaulticon, '');
            }

            treecontainer.append(text);
        }

    }

    var scope = this;
    $(".bv_domaincheckbox").change(function () {
        var type = $(this).parents('.bv_domainitem').attr("rel");
        var ch = $(this).prop("checked");
        scope.engine.showType(type, ch);
    });

    $('#bv_domain_check_all').click(function (e) {
        $(".bv_domaincheckbox").each(function(item){
            var type = $(this).parents('.bv_domainitem').attr("rel");
            $(this).prop("checked", true);
            scope.engine.showType(type, true);
        });
    });

    $('#bv_domain_uncheck_all').click(function (e) {
        $(".bv_domaincheckbox").each(function(item){
            var type = $(this).parents('.bv_domainitem').attr("rel");
            $(this).prop("checked", false);
            scope.engine.showType(type, false);
        });
    });

    $('#bv_domain_anticheck').click(function (e) {
        $(".bv_domaincheckbox").each(function(item){
            var type = $(this).parents('.bv_domainitem').attr("rel");
            var ch = !$(this).prop("checked");
            $(this).prop("checked", ch);
            scope.engine.showType(type, ch);
        });
    });
	
};