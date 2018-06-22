
BIMVIZ.UI.DefaultTreesVisibilityControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultTreesVisibilityControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultTreesVisibilityControl.constructor = BIMVIZ.UI.DefaultTreesVisibilityControl;

BIMVIZ.UI.DefaultTreesVisibilityControl.prototype.onProjectLoaded = function (project) {

    
    var scope = this;
    var fileTreeNodesDic = [];
    var bimScene = project.bimScene;
    var fileTree = project.sourcetree;
    var uitree = null;
    var uifiletree = null;
	var elementCount = 0;
    var html = '<ul id="bv_visibility_tab" class="nav nav-tabs nav-button-tabs">\
                    <li class="active"><a href="#ifctreepage" data-toggle="tab">IFC标准树</a></li>\
                    <li ><a href="#filetreepage" data-toggle="tab">模型树</a></li>\
                </ul>\
                <div class="tab-content padding-0">\
                <div class="tab-pane fade in active" id="ifctreepage">\
                   <div id="bv_visibilityBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                        <div class="pull-left">\
                            <a class="btn" id="bv_dvc_resetVisibility"><i class="fa fa-history"></i> 重置</a>\
                            <a class="btn" id="bv_dvc_clearVisibility"><i class="fa fa-history"></i> 清空</a>\
                            <a class="btn" id="bv_dvc_antiCheck"><i class="fa fa-check-square-o"></i> <span>查看其它</span></a>\
                        </div>\
                    </div>\
                    <div class="padding-20">\
                        <div id="bv_visibilityTree"></div>\
                    </div>\
                </div >\
                <div class="tab-pane fade" id="filetreepage">\
                     <div id="bv_orgvisibilityBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                        <div class="pull-left">\
                            <a class="btn" id="bv_dvc_orgresetVisibility"><i class="fa fa-history"></i> 重置</a>\
                            <a class="btn" id="bv_dvc_orgclearVisibility"><i class="fa fa-history"></i> 清空</a>\
                            <a class="btn" id="bv_dvc_organtiCheck"><i class="fa fa-check-square-o"></i> <span>查看其它</span></a>\
                        </div>\
                    </div>\
                     <div class="padding-20">\
                         <div id="bv_orgvisibilityTree"></div>\
                     </div>\
                </div>\
                </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var treecontainer = $('#bv_visibilityTree');
    var filetreecontainer = $('#bv_orgvisibilityTree');

    var inAntiCheckMode = false;

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
        });

        filetreecontainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = fileTreeNodesDic[data.node.id];
            collectFileTreeElements(bimnode, false);
        });
    }

    function create() {
        collectFileTreeNodes(fileTree);

        createIfcTree();
        if (fileTree) {
            createFileTree();
        }       
    };

    function collectFileTreeNodes(nodes) {
        if (nodes != null && nodes.length > 0) {
            for (var a = 0; a < nodes.length; a++) {
                var node = nodes[a];

                fileTreeNodesDic[node.Id] = node;
                collectFileTreeNodes(node.Children);
            }
        }
    }

    function collectFileTreeElements(node, vis) {
        node.Visible = vis;
        if (node.TypeName == "Element") {
            scope.engine.setElementVisible(node.Id, vis);
        }
        else {
            node.Children.forEach(function (subnode, index) {
                collectFileTreeElements(subnode, vis);
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
                        checked:  true
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

    function collectElements(node, vis) {
        node.Visible = vis;
        if (node.Level == "Element") {
            scope.engine.setElementVisible(node.Id, vis);
        }
        else {
            node.Children.forEach(function (subnode, index) {
                if (subnode.Level != "Group" || subnode.Name != "IfcSpace")
                    collectElements(subnode, vis);
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
                        checked: childnode.Visible
                    }
                });
            }
            callback(nodes);
        }
    };

    create();

    function setAllElementsVisibility(visible) {
        for (var i = 0, iLen = bimScene.ElementList.length; i < iLen; i++) {
            var element = bimScene.ElementList[i];
            if (element.IfcType == "IfcSpace")
                continue;

            element.Parent.Visible = visible;
            element.Parent.Parent.Visible = visible;
            scope.engine.setElementVisible(element.Id, visible);
        }
    }

    function toggleElementVisibility() {
        for (var i = 0, iLen = bimScene.ElementList.length; i < iLen; i++) {
            var element = bimScene.ElementList[i];
            if (element.IfcType == "IfcSpace")
                continue;

            scope.engine.setElementVisible(element.Id, !element.Visible);
        }
    }

    $('#bv_visibility_tab').on('click', 'a', function () {
        var text = this.text;
        if (text == '模型树') {
            uitree.check_all(true);
            setAllElementsVisibility(true);
        } else {
            if (uifiletree) {
                uifiletree.check_all(true);
                setAllElementsVisibility(true);
            }            
        }
    });

    $('#bv_dvc_resetVisibility').click(function (e) {

        uitree.check_all(true);
        setAllElementsVisibility(true);
    });

    $('#bv_dvc_clearVisibility').click(function (e) {

        uitree.uncheck_all(true);
        setAllElementsVisibility(false);
    });


    $('#bv_dvc_antiCheck').click(function (e) {

        if (inAntiCheckMode == false) {
            inAntiCheckMode = true;
            treecontainer.addClass('bimviz_disabled');
            $('#bv_dvc_antiCheck').find('span').html('返回');
            $('#bv_dvc_antiCheck').addClass('btn-success');
        }
        else {
            inAntiCheckMode = false;
            treecontainer.removeClass('bimviz_disabled');
            $('#bv_dvc_antiCheck').find('span').html('查看其它');
            $('#bv_dvc_antiCheck').removeClass('btn-success');
        }

        toggleElementVisibility();
    });

    $('#bv_dvc_orgresetVisibility').click(function (e) {
        if (uifiletree) {
            uifiletree.check_all(true);
            setAllElementsVisibility(true);
        }        
    });

    $('#bv_dvc_orgclearVisibility').click(function (e) {
        if (uifiletree) {
            uifiletree.uncheck_all(true);
            setAllElementsVisibility(false);
        }        
    });


    $('#bv_dvc_organtiCheck').click(function (e) {

        if (inAntiCheckMode == false) {
            inAntiCheckMode = true;
            filetreecontainer.addClass('bimviz_disabled');
            $('#bv_dvc_organtiCheck').find('span').html('返回');
            $('#bv_dvc_organtiCheck').addClass('btn-success');
        }
        else {
            inAntiCheckMode = false;
            filetreecontainer.removeClass('bimviz_disabled');
            $('#bv_dvc_organtiCheck').find('span').html('查看其它');
            $('#bv_dvc_organtiCheck').removeClass('btn-success');
        }

        toggleElementVisibility();
    });
};