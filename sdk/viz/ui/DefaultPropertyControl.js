
BIMVIZ.UI.DefaultPropertyControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);

    this.selectedId = null;
};

BIMVIZ.UI.DefaultPropertyControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultPropertyControl.constructor = BIMVIZ.UI.DefaultPropertyControl;

BIMVIZ.UI.DefaultPropertyControl.prototype.onProjectLoaded = function(project){
    
    var scope = this;
    var container = this.parentDiv;


    var tablehtml = '<div id="bv_div_property_container" style="overflow: auto;">\
                            <table class="table table-no-top">\
                                <thead>\
                                    <tr >\
                                        <td style="width:150px;">\<b>\Name</b>\</td>\
                                        <td style="width:200px;">\<b>\Value</b>\</td>\
                                    </tr>\
                                </thead>\
                                <tbody>\
                                    <tr >\
                                        <td colspan="2">\<b>\None Object Selected</b>\</td>\
                                    </tr>\
                                </tbody>\
                            </table>\
                        </div>';

    container.html(tablehtml);

    function onShowElementPropertyList(event) {
        var element = event.args;
        var key = element.GlobalId;
        if (scope.selectedId == element.GlobalId)
            return;

        scope.selectedId = element.GlobalId;

        var body = container.find("table tbody");
        body.html('');


        var buinessKey = scope.engine.globalIdToBussinessKey(element.GlobalId);

        var systemSets = [];
        var systemSet = {
            Name:'Common Property',
            PropertyList:[
                {
                    Name:'GlobalId',
                    NominalValue:element.GlobalId
                },
                {
                    Name:'Name',
                    NominalValue:element.Name,
                },
                {
                    Name:'IfcType',
                    NominalValue:element.IfcType,
                },
                {
                    Name:'Floor',
                    NominalValue:element.Floor,
                },
                {
                    Name:'FileName',
                    NominalValue:element.FileName,
                },
                {
                    Name:'BusinessKey',
                    NominalValue:buinessKey?buinessKey:"",
                },
            ]
        };

        systemSets.push(systemSet);

        popupList(body, systemSets);
        popupList(body, element.PropertySets);
    };

    function popupList(body, sets) {
        sets.forEach(function (set) {
            var tr = '<tr class="table_propset"><td colspan=\"2\">' + set.Name + '</td></tr>';
            body.append(tr);
            set.PropertyList.forEach(function (prop) {
                var proptr = '<tr><td>' + prop.Name + '</td><td><span>' + prop.NominalValue + '</span></td></tr>';
                body.append(proptr);
            });
        });
    }

    this.engine.addListener(BIMVIZ.EVENT.OnSelectElementPropertyList, onShowElementPropertyList);
	
};