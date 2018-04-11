
BIMVIZ.UI.DefaultCustomVisibilityTreeControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultCustomVisibilityTreeControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultCustomVisibilityTreeControl.constructor = BIMVIZ.UI.DefaultCustomVisibilityTreeControl;

BIMVIZ.UI.DefaultCustomVisibilityTreeControl.prototype.onProjectLoaded = function (project) {

    Array.prototype.groupBy = function (prop) {
        return this.reduce(function (groups, item) {
            var val = item[prop];
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
        }, {});
    };

    function TreeNode(id,name,typename){
        this.Id = id;
        this.Name = name;
        this.TypeName = typename;
        this.Children = [];
    }

    var allElements = new Array();
    var elementsDict = project.bimScene.ElementDict;
    if (project.sourcetree != null && project.sourcetree.length > 0) {
        for (var nPrj = 0; nPrj < project.sourcetree.length; nPrj++) {
            var prj = project.sourcetree[nPrj];
            for (var nCate = 0; nCate < prj.Children.length; nCate++) {
                var category = prj.Children[nCate];
                if (category.TypeName != 'Category')
                    break;

                for (var nFamily = 0; nFamily < category.Children.length; nFamily++) {
                    var family = category.Children[nFamily];
                    for (var nType = 0; nType < family.Children.length; nType++) {
                        var familyType = family.Children[nType];
                        for (var nEle = 0; nEle < familyType.Children.length; nEle++) {
                            var element = elementsDict[familyType.Children[nEle].Id];
                            if (element) {
                                element.Project = prj.Name;
                                element.Category = category.Name;
                                element.Family = family.Name;
                                element.FamilyType = familyType.Name;
                                allElements.push(element);
                            }
                        }
                    }
                }
            }
        }
    }

    var count = 1;
    var modifySourceTree = [];
    var projectGroups = allElements.groupBy('Project');
    for(var a in projectGroups)
    {
        //按项目文件组织
        var prj = new TreeNode(count++, a, "Project");
        modifySourceTree.push(prj);

        //按楼层组织
        var floorGroups = projectGroups[a].groupBy('Floor');
        for(var b in floorGroups){
            var flo = new TreeNode(count++, b, 'Floor');
            prj.Children.push(flo);

            //按类别组织
            var categoryGroups = floorGroups[b].groupBy('Category');
            for(var c in categoryGroups){
                var cate = new TreeNode(count++, c, "Category");
                flo.Children.push(cate);

                //按族组织
                var familyGroups = categoryGroups[c].groupBy('Family');
                for(var d in familyGroups){
                    var family = new TreeNode(count++, d, "Family");
                    cate.Children.push(family);

                    //按族类型组织
                    var familyTypeGroups = familyGroups[d].groupBy('FamilyType');
                    for(var key in familyTypeGroups){
                        var familytype = new TreeNode(count++, key, "FamilyType");
                        family.Children.push(familytype);

                        for(var k=0; k<familyTypeGroups[key].length;k++){
                            var item = familyTypeGroups[key][k];
                            var eleItem = new TreeNode(item.Id, item.Name, "Element");
                            familytype.Children.push(eleItem);
                        }
                    }
                }
            }
        }
    }


    var scope = this;
    var sourceTreeNodesDic = [];
    var bimScene = project.bimScene;
    var sourceTree = modifySourceTree;
    var uitree = null;
    var html = '<div id="bv_sourceTreeVisibilityBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_dvc_resetSourceTreeVisibility"><i class="fa fa-history"></i> 重置</a>\
                    <a class="btn" id="bv_dvc_clearSourceTreeVisibility"><i class="fa fa-history"></i> 清空</a>\
                    <a class="btn" id="bv_dvc_antiSourceTreeCheck"><i class="fa fa-check-square-o"></i> <span>查看其它</span></a>\
                </div>\
            </div>\
            <div class="padding-20">\
                <div id="bv_SourceTreeVisibilityTree"></div>\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var treecontainer = $('#bv_SourceTreeVisibilityTree');

    var inAntiCheckMode = false;

    function createSourceTree() {
        treecontainer.jstree({
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

        uitree = treecontainer.jstree(true);
        treecontainer.on("check_node.jstree", function (e, data) {
            var bimnode = sourceTreeNodesDic[data.node.id];
            collectSourceTreeElements(bimnode, true);
        });

        treecontainer.on("uncheck_node.jstree", function (e, data) {
            var bimnode = sourceTreeNodesDic[data.node.id];
            collectSourceTreeElements(bimnode, false);
        });
    }

    function create() {
        collectSourceTreeNodes(sourceTree);
        if (sourceTree) {
            createSourceTree();
        }       
    };

    function collectSourceTreeNodes(nodes) {
        if (nodes != null && nodes.length > 0) {
            for (var a = 0; a < nodes.length; a++) {
                var node = nodes[a];

                sourceTreeNodesDic[node.Id] = node;
                collectSourceTreeNodes(node.Children);
            }
        }
    }

    function collectSourceTreeElements(node, vis) {
        node.Visible = vis;
        if (node.TypeName == "Element") {
            scope.engine.setElementVisible(node.Id, vis);
        }
        else {
            node.Children.forEach(function (subnode, index) {
                collectSourceTreeElements(subnode, vis);
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
                nodes.push({
                    text: childnode.Name,
                    id: childnode.Id,
                    children: childnode.Children.length > 0,
                    state: {
                        checked: true
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
            element.Parent.Visible = visible;
            element.Parent.Parent.Visible = visible;
            scope.engine.setElementVisible(element.Id, visible);
        }
    }

    function toggleElementVisibility() {
        for (var i = 0, iLen = bimScene.ElementList.length; i < iLen; i++) {
            var element = bimScene.ElementList[i];
            scope.engine.setElementVisible(element.Id, !element.Visible);
        }
    }

    $('#bv_dvc_resetSourceTreeVisibility').click(function (e) {
        if (uitree) {
            uitree.check_all(true);
            setAllElementsVisibility(true);
        }        
    });

    $('#bv_dvc_clearSourceTreeVisibility').click(function (e) {
        if (uitree) {
            uitree.uncheck_all(true);
            setAllElementsVisibility(false);
        }        
    });


    $('#bv_dvc_antiSourceTreeCheck').click(function (e) {

        if (inAntiCheckMode == false) {
            inAntiCheckMode = true;
            treecontainer.addClass('bimviz_disabled');
            $('#bv_dvc_antiSourceTreeCheck').find('span').html('返回');
            $('#bv_dvc_antiSourceTreeCheck').addClass('btn-success');
        }
        else {
            inAntiCheckMode = false;
            treecontainer.removeClass('bimviz_disabled');
            $('#bv_dvc_antiSourceTreeCheck').find('span').html('查看其它');
            $('#bv_dvc_antiSourceTreeCheck').removeClass('btn-success');
        }

        toggleElementVisibility();
    });
};