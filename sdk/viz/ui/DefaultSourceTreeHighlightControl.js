
BIMVIZ.UI.DefaultSourceTreeHighlightControl = function (name, iconClass) {
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultSourceTreeHighlightControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultSourceTreeHighlightControl.constructor = BIMVIZ.UI.DefaultSourceTreeHighlightControl;

BIMVIZ.UI.DefaultSourceTreeHighlightControl.prototype.onProjectLoaded = function (project) {

    var scope = this;
    var sourceTreeNodesDic = [];
    var sourceTree = project.sourcetree;
    var highlightMgr = scope.engine.getHighlightManager();
	var elementCount = 0;

    var html = '<div id="bv_sourceTreeHighlightBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_sourceTreeHighlight_clear"><i class="fa fa-history"></i> 清空</a>\
                </div>\
            </div>\
            <div class="padding-20">\
                <div id="bv_sourceTreeHightlightTree"></div>\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    var sourceTreeContainer = $('#bv_sourceTreeHightlightTree');
    var uitree = null;

    function createSourceTree() {
        sourceTreeContainer.jstree({
            'core': {
                'data': function (node, cb) {
                    onLoadSourceTreeChildNodes(node, cb);
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

        uitree = sourceTreeContainer.jstree(true);
        sourceTreeContainer.on("check_node.jstree", function (e, data) {
            var bimnode = sourceTreeNodesDic[data.node.id];
            collectSourceTreeElements(bimnode, true);

            if (bimnode.TypeName == "Element") {
                scope.engine.flyToElement(bimnode.Id);
            }
        });

        sourceTreeContainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = sourceTreeNodesDic[data.node.id];
            collectSourceTreeElements(bimnode, false);

        });
    }

    function collectSourceTreeNodes(nodes) {
        if (nodes != null && nodes.length > 0) {
            for (var a = 0; a < nodes.length; a++) {
                var node = nodes[a];

                sourceTreeNodesDic[node.Id] = node;
                collectSourceTreeNodes(node.Children);
            }
        }
    }

    function create() {
        collectSourceTreeNodes(sourceTree);

        if (sourceTree) {
            createSourceTree();
        }	    
    };

    function collectSourceTreeElements(node, highlight) {
        if (node.TypeName == "Element") {
            if (highlight == true) {
                highlightMgr.highlightElement(node.Id);
            }
            else {
                highlightMgr.unHighlightElement(node.Id);
            }
        }
        else {
            node.Children.forEach(function (subnode, index) {
                collectSourceTreeElements(subnode, highlight);
            });
        }
    }

	function getNodeElementCount(node){
		if (node.TypeName == "Element" && project.bimScene.ElementDict[node.Id]){
			elementCount++;
		}else{
			 node.Children.forEach(function (subnode, index) {
                getNodeElementCount(subnode);
            });
		}
	}
	
    function onLoadSourceTreeChildNodes(nodeinfo, callback) {
        var treenodes;
        if (nodeinfo.id == "#") {
            treenodes = sourceTree;
        } else {
            var node = sourceTreeNodesDic[nodeinfo.id];
            if (node != null) {
                treenodes = node.Children;
            }
        }

        if (treenodes != null) {
            var nodes = [];
            for (var i = 0; i < treenodes.length; i++) {
				var childnode = treenodes[i];
				if (childnode.TypeName == "Element" && !project.bimScene.ElementDict[childnode.Id])
					continue;
				
                elementCount = 0;                
				getNodeElementCount(childnode);
				var text = childnode.TypeName == "Element" ? "" : " - ("+elementCount+")";
                nodes.push({
                    text: childnode.Name + text,
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

    $('#bv_sourceTreeHighlight_clear').click(function (e) {
        if (uitree) {
            uitree.uncheck_all(true);
            highlightMgr.clearHighlightElementList();
        }        
    });
};