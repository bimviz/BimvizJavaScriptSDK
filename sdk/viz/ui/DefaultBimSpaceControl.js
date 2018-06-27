
BIMVIZ.UI.DefaultBimSpaceControl = function(name, iconClass){
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultBimSpaceControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultBimSpaceControl.constructor = BIMVIZ.UI.DefaultBimSpaceControl;

BIMVIZ.UI.DefaultBimSpaceControl.prototype.onHide = function(){
    
};

BIMVIZ.UI.DefaultBimSpaceControl.prototype.onProjectLoaded = function(project){

    var scope = this;
    var bimScene = project.bimScene;
    var uitree = null;
    var html = '<div id="bv_spaceVisibilityBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_dsvc_resetVisibility"><i class="fa fa-history"></i> 重置</a>\
                    <a class="btn" id="bv_dsvc_clearVisibility"><i class="fa fa-history"></i> 清空</a>\
                    <a class="btn" id="bv_dsvc_antiCheck"><i class="fa fa-check-square-o"></i> <span>查看其它</span></a>\
                </div>\
            </div>\
            <div class="padding-20">\
                <div id="bv_spaceVisibilityTree"></div>\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var  spaceElements = bimScene.ElementList.filter(function (item, index, arr) {
        return item.IfcType == "IfcSpace" && item.Level == "Element";
    });

    var treecontainer = $('#bv_spaceVisibilityTree');
    var inAntiCheckMode = false;
    function create() {
        treecontainer.jstree({
            'core': {
                'data': function (node, cb) {
                    onLoadChildNodes(node, cb);
                },
                "themes": {
                    'name': 'proton',
                    "dots": true
                }
            },
            'plugins': ["wholerow", "checkbox"],
            'checkbox': {
                "keep_selected_style": false,
                'tie_selection': false
            },
        });

        uitree = treecontainer.jstree(true);
        treecontainer.on("check_node.jstree", function (e, data) {
            var bimnode = bimScene.FindNode(data.node.id);
            collectElements(bimnode, true);
        });

        treecontainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = bimScene.FindNode(data.node.id);
            collectElements(bimnode, false);
        });

        //hide all spaces
        scope.engine.addListener(BIMVIZ.EVENT.OnSceneLoadCompleted, function () {
            scope.engine.showType('IfcSpace', false);
        });
    };

    function collectElements(node, vis){
        node.Visible = vis;
        if(node.Level == "Element" && node.IfcType == "IfcSpace"){
            scope.engine.setElementVisible(node.Id, vis);
        }
        else{
                node.Children.forEach(function(subnode, index){
                collectElements(subnode, vis);
            });
        }
    }

    function onLoadChildNodes(nodeinfo, callback) {
        var element = bimScene.FindNode(nodeinfo.id);
        if (element != null && element.level != "Group") {
            var childs = [];
            var nodes = [];

            if (element.Level == "BuildingStorey" && element.IfcType != ""){
                for (var i = 0; i < element.Children.length; i++){
                    if (element.Children[i].Name == "IfcSpace"){
                        var spaceNodes = element.Children[i].Children;
                        childs = childs.concat(spaceNodes);
                    }
                }
            }else {
                childs = element.Children;
            }

            for (var i = 0; i < childs.length; i++) {
                var childnode = childs[i];
                var spaceChildren = [];

                if (childnode.Level == "BuildingStorey"){
                    for(var j=0;j<childnode.Children.length;j++){
                        var groupNode = childnode.Children[j];
                        if (groupNode.Level == "Group" && groupNode.Name == "IfcSpace"){
                            spaceChildren = spaceChildren.concat(childnode.Children);
                        }
                    }
                }

                var pLenth = spaceChildren.length;
                var lenthTxt=" - ("+pLenth+")";
                if(pLenth == 0){
                    lenthTxt="";
                }

                var txt=childnode.Name+lenthTxt;
                nodes.push({
                    text:txt,
                    id: childnode.Id,
                    children: pLenth > 0,
                    state: {
                        checked: false
                    }
                });
            }
            callback(nodes);
        }
    };

    create();

    function clearVisibility(){
        uitree.uncheck_all(true);
        for(var i=0, iLen = spaceElements.length; i < iLen; i++){
            var element = spaceElements[i];
            if (element.IfcType != "IfcSpace")
                continue;

            element.Parent.Visible = false;
            element.Parent.Parent.Visible = false;
            scope.engine.setElementVisible(element.Id, false);
        }
    }

    $('#bv_dsvc_resetVisibility').click(function (e) {
        uitree.check_all(true);
        for(var i=0, iLen = spaceElements.length; i < iLen; i++){
            var element = spaceElements[i];
            if (element.IfcType != "IfcSpace")
                continue;

            element.Parent.Visible = true;
            element.Parent.Parent.Visible = true;
            scope.engine.setElementVisible(element.Id, true);
        }
               
    });

    $('#bv_dsvc_clearVisibility').click(function (e) {
        clearVisibility();        
    });


    $('#bv_dsvc_antiCheck').click(function (e) {

        if(inAntiCheckMode == false){
            inAntiCheckMode = true;
            treecontainer.addClass('bimviz_disabled');
            $('#bv_dsvc_antiCheck').find('span').html('返回');
            $('#bv_dsvc_antiCheck').addClass('btn-success');
        }
        else{
            inAntiCheckMode = false;
            treecontainer.removeClass('bimviz_disabled');
            $('#bv_dsvc_antiCheck').find('span').html('查看其它');
            $('#bv_dsvc_antiCheck').removeClass('btn-success');
        }

        for(var i=0, iLen = spaceElements.length; i < iLen; i++){
            var element = spaceElements[i];
            if (element.IfcType != "IfcSpace")
                continue;

            scope.engine.setElementVisible(element.Id, !element.Visible);
        }
    });
};