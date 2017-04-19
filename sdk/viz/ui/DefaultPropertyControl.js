
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

        popupList(body, element.PropertySets);

        var proptr = '<tr><td>GlobalId</td><td><span>' + element.GlobalId + '</span></td></tr>';
        body.append(proptr);

        var buinessKey = scope.engine.globalIdToBussinessKey(element.GlobalId);
        proptr = '<tr><td>BusinessKey</td><td><span>' + buinessKey + '</span></td></tr>';
        body.append(proptr);
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