
BIMVIZ.UI.DefaultSourceTreeVisibilityControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultSourceTreeVisibilityControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultSourceTreeVisibilityControl.constructor = BIMVIZ.UI.DefaultSourceTreeVisibilityControl;

BIMVIZ.UI.DefaultSourceTreeVisibilityControl.prototype.onProjectLoaded = function (project) {

    var scope = this;
    var sourceTreeNodesDic = [];
    var bimScene = project.bimScene;
    var sourceTree = project.sourcetree;
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