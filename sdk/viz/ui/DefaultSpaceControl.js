
BIMVIZ.UI.DefaultSpaceControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultSpaceControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultSpaceControl.constructor = BIMVIZ.UI.DefaultSpaceControl;

BIMVIZ.UI.DefaultSpaceControl.prototype.onProjectLoaded = function(project){

	var scope = this;
	var bimScene = project.bimScene;

	function create() {
		var container = scope.parentDiv;
        container.jstree({
            'core': {
                'data': function (node, cb) {
                    onLoadChildNodes(node, cb);
                },
                "themes": {
                    'name': 'proton',
                    "dots": true
                }
            },
            'plugins': ["wholerow"],
        });

        container.on("select_node.jstree", function (e, data) {
            var id = data.node.id;
            //  var treenode = treenodes[id];
            if (data.node.original.level == "Element") {
                scope.engine.selectElementFromClientUI(id);
            }

        });
    };

    function onLoadChildNodes(nodeinfo, callback) {
        var element = bimScene.FindNode(nodeinfo.id);
        if (element != null) {
            var childs = element.Children;
            var nodes = [];
            for (var i = 0; i < childs.length; i++) {
                var childnode = childs[i];
                nodes.push({
                    text: childnode.Name,
                    id: childnode.Id,
                    children: childnode.Children.length > 0,
                    level: childnode.Level,
                    state: {
                        checked: true
                    }
                });
            }

            callback(nodes);
        }

    };

    create();
};