
BIMVIZ.UI.DefaultSpaceControl = function(name, iconClass){
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultSpaceControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultSpaceControl.constructor = BIMVIZ.UI.DefaultSpaceControl;

BIMVIZ.UI.DefaultSpaceControl.prototype.onProjectLoaded = function(project){

    var scope = this;
    var bimScene = project.bimScene;
    var highlightMgr = scope.engine.getHighlightManager();

    var html = '<div id="bv_spaceBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                    <div class="pull-left">\
                        <a class="btn" id="bv_space_clear"><i class="fa fa-history"></i> 清空</a>\
                    </div>\
                </div>\
                <div class="padding-20">\
                    <div id="bv_spaceTree"></div>\
                </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    var treecontainer = $('#bv_spaceTree');
    var uitree = null;

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
                "keep_selected_style" : false,
                'tie_selection' : false
            },
        });

        uitree = treecontainer.jstree(true);
        treecontainer.on("check_node.jstree", function (e, data) {
            var bimnode = bimScene.FindNode(data.node.id);
            collectElements(bimnode, true);

            if(bimnode.Level == "Element"){
                scope.engine.flyToElement(bimnode.Id);
            }
        });

        treecontainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = bimScene.FindNode(data.node.id);
            collectElements(bimnode, false);

        });
    };

    function collectElements(node, highlight){
        if(node.Level == "Element"){
            if(highlight==true){
                highlightMgr.highlightElement(node.Id);
            }
            else{
                highlightMgr.unHighlightElement(node.Id);
            }
        }
        else{
            node.Children.forEach(function(subnode, index){
                if (subnode.Level != "Group" || subnode.Name != "IfcSpace")
                    collectElements(subnode, highlight);
            });
        }
    }

    function onLoadChildNodes(nodeinfo, callback) {
        var element = bimScene.FindNode(nodeinfo.id);
        if (element != null) {
            var childs = element.Children;
            var nodes = [];
            for (var i = 0; i < childs.length; i++) {
                var childnode = childs[i];
                if (childnode.Level == "Group" && childnode.Name == "IfcSpace")
                    continue;

                var pLenth=childnode.Children.length;
                var lenthTxt=" - ("+pLenth+")";
                if(childnode.Children.length==0){
                    lenthTxt="";
                }
                if(childnode.IfcType=="IfcBuildingStorey"){
                    pLenth=0;
                    for(var j=0;j<childnode.Children.length;j++){
                        if (childnode.Children[j].Name == "IfcSpace")
                            continue;

                        pLenth=pLenth+childnode.Children[j].Children.length;
                        lenthTxt=" - ("+pLenth+")";
                    }
                }
                var txt=childnode.Name+lenthTxt;
                nodes.push({
                    text:txt,
                    id: childnode.Id,
                    children: childnode.Children.length > 0,
                    state: {
                        checked: false
                    }
                });
            }
            callback(nodes);
        }

    };

    create();

    $('#bv_space_clear').click(function (e) {
        uitree.uncheck_all(true);
        highlightMgr.clearHighlightElementList();
    });
};