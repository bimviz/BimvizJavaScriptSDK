
BIMVIZ.UI.DefaultTreesHighlightControl = function (name, iconClass) {
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultTreesHighlightControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultTreesHighlightControl.constructor = BIMVIZ.UI.DefaultTreesHighlightControl;

BIMVIZ.UI.DefaultTreesHighlightControl.prototype.onProjectLoaded = function (project) {

   
    var scope = this;
    var fileTreeNodesDic = [];
    var bimScene = project.bimScene;
    var fileTree = project.sourcetree;
    var highlightMgr = scope.engine.getHighlightManager();
	var elementCount = 0;

    var html = '<ul id="bv_space_tab" class="nav nav-tabs nav-button-tabs">\
                    <li class="active"><a href="#spaceifctreepage" data-toggle="tab">IFC标准树</a></li>\
                    <li ><a href="#spacefiletreepage" data-toggle="tab">模型树</a></li>\
                </ul>\
                <div class="tab-content padding-0">\
                     <div class="tab-pane fade in active" id="spaceifctreepage">\
                       <div id="bv_spaceBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                            <div class="pull-left">\
                                <a class="btn" id="bv_space_clear"><i class="fa fa-history"></i> 清空</a>\
                            </div>\
                        </div>\
                        <div class="padding-20">\
                            <div id="bv_defaultHightlightTree"></div>\
                        </div>\
                    </div >\
                    <div class="tab-pane fade" id="spacefiletreepage">\
                       <div id="bv_spaceBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                            <div class="pull-left">\
                                <a class="btn" id="bv_orispace_clear"><i class="fa fa-history"></i> 清空</a>\
                            </div>\
                         </div>\
                        <div class="padding-20">\
                            <div id="bv_orispaceTree"></div>\
                        </div>\
                    </div >\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    var treecontainer = $('#bv_defaultHightlightTree');
    var filetreecontainer = $('#bv_orispaceTree');
    var uitree = null;
    var uifiletree = null;

    function createIfcTree() {
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

            if (bimnode.Level == "Element") {
                scope.engine.flyToElement(bimnode.Id);
            }
        });

        treecontainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = bimScene.FindNode(data.node.id);
            collectElements(bimnode, false);

        });
    }

    function createFileTree() {
        filetreecontainer.jstree({
            'core': {
                'data': function (node, cb) {
                    onLoadFileTreeChildNodes(node, cb);
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

        uifiletree = filetreecontainer.jstree(true);
        filetreecontainer.on("check_node.jstree", function (e, data) {
            var bimnode = fileTreeNodesDic[data.node.id];
            collectFileTreeElements(bimnode, true);

            if (bimnode.TypeName == "Element") {
                scope.engine.flyToElement(bimnode.Id);
            }
        });

        filetreecontainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = fileTreeNodesDic[data.node.id];
            collectFileTreeElements(bimnode, false);

        });
    }

    function collectFileTreeNodes(nodes) {
        if (nodes != null && nodes.length > 0) {
            for (var a = 0; a < nodes.length; a++) {
                var node = nodes[a];

                fileTreeNodesDic[node.Id] = node;
                collectFileTreeNodes(node.Children);
            }
        }
    }

    function create() {
        collectFileTreeNodes(fileTree);

        createIfcTree();
        if (fileTree) {
            createFileTree();
        }	    
    };

    function collectFileTreeElements(node, highlight) {
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
                collectFileTreeElements(subnode, highlight);
            });
        }
    }

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

    function onLoadFileTreeChildNodes(nodeinfo, callback) {
        var treenodes;
        if (nodeinfo.id == "#") {
            treenodes = fileTree;
        } else {
            var node = fileTreeNodesDic[nodeinfo.id];
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
	
	function getNodeElementCount(node){
		if (node.TypeName == "Element" && project.bimScene.ElementDict[node.Id]){
			elementCount++;
		}else{
			 node.Children.forEach(function (subnode, index) {
                getNodeElementCount(subnode);
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

    $('#bv_space_tab').on('click', 'a', function () {
        var text = this.text;
        if (text == '模型树') {
            uitree.uncheck_all(true);
            highlightMgr.clearHighlightElementList();
        } else {
            if (uifiletree) {
                uifiletree.uncheck_all(true);
                highlightMgr.clearHighlightElementList();
            }            
        }
    });

    $('#bv_space_clear').click(function (e) {
        uitree.uncheck_all(true);
        highlightMgr.clearHighlightElementList();
    });

    $('#bv_orispace_clear').click(function (e) {
        if (uifiletree) {
            uifiletree.uncheck_all(true);
            highlightMgr.clearHighlightElementList();
        }        
    });
};