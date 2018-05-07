
BIMVIZ.UI.DefaultCustomTreeVisibilityControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultCustomTreeVisibilityControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultCustomTreeVisibilityControl.constructor = BIMVIZ.UI.DefaultCustomTreeVisibilityControl;

BIMVIZ.UI.DefaultCustomTreeVisibilityControl.prototype.onProjectLoaded = function (project) {

    Array.prototype.groupBy = function (prop) {
        return this.reduce(function (groups, item) {
            var val = item[prop];
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
        }, {});
    };

    function Sknode(id,name,typename){
        this.Id=id;
        this.Name=name;
        this.TypeName=typename;
        this.Children=[];
    }


    var elements = new Array();
    var elementDict = project.bimScene.ElementDict;
    if (project.sourcetree != null && project.sourcetree.length > 0) {
        for (var nPrj = 0; nPrj < project.sourcetree.length; nPrj++) {
            var projects = project.sourcetree[nPrj];
            for (var nCate = 0; nCate < projects.Children.length; nCate++) {
                var category = projects.Children[nCate];
                if (category.TypeName != 'Category')
                    break;

                for (var nFamily = 0; nFamily < category.Children.length; nFamily++) {
                    var family = category.Children[nFamily];
                    for (var nType = 0; nType < family.Children.length; nType++) {
                        var familyType = family.Children[nType];
                        for (var nEle = 0; nEle < familyType.Children.length; nEle++) {
                            var element = elementDict[familyType.Children[nEle].Id];
                            if (element) {
                                element.Project = projects.Name;
                                element.Category = category.Name;
                                element.Family = family.Name;
                                element.FamilyType = familyType.Name;
                                elements.push(element);
                            }
                        }
                    }
                }
            }
        }
    }

    //先安装类别组织
    var count = 1;
    var modifySourceTree = [];
    var name;
    var projectGroups = elements.groupBy('Project');
    for(var a in projectGroups)
    {
        name=a+" - ("+elements.length+")";
        var prj = new Sknode(count++,name, "Project");
        modifySourceTree.push(prj);
        //在按照楼层组织
        var floorGroups = projectGroups[a].groupBy('Floor');
        for(var b in floorGroups){
            name=b+" - ("+floorGroups[b].length+")";
            var flo = new Sknode(count++,name,'Floor');
            prj.Children.push(flo);

            var categoryGroups = floorGroups[b].groupBy('Category');
            for(var c in categoryGroups){
                name=c+" - ("+categoryGroups[c].length+")";
                var cate = new Sknode(count++,name,"Category");
                flo.Children.push(cate);

                var familyGroups = categoryGroups[c].groupBy('Family');
                for(var d in familyGroups){
                    name=d+" - ("+familyGroups[d].length+")";
                    var family = new Sknode(count++,name,"Family");
                    cate.Children.push(family);

                    var familyTypeGroups = familyGroups[d].groupBy('FamilyType');
                    for(var key in familyTypeGroups){
                        name=key+" - ("+familyTypeGroups[key].length+")";
                        var familytype = new Sknode(count++,name,"FamilyType");
                        family.Children.push(familytype);

                        for(var k=0; k<familyTypeGroups[key].length;k++){
                            var item = familyTypeGroups[key][k];
                            name=item.Name;
                            var eleItem = new Sknode(item.Id,name,"Element");
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
                <div id="bv_CustomSourceTreeVisibilityTree"></div>\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var treecontainer = $('#bv_CustomSourceTreeVisibilityTree');

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