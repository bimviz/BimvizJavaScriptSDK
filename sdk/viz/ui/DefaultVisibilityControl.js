
BIMVIZ.UI.DefaultVisibilityControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultVisibilityControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultVisibilityControl.constructor = BIMVIZ.UI.DefaultVisibilityControl;

BIMVIZ.UI.DefaultVisibilityControl.prototype.onProjectLoaded = function(project){

	var scope = this;
	var bimScene = project.bimScene;
    var uitree = null;
    var html = '<div id="bv_visibilityBar" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_dvc_resetVisibility"><i class="fa fa-history"></i> 重置</a>\
                    <a class="btn" id="bv_dvc_clearVisibility"><i class="fa fa-history"></i> 清空</a>\
                    <a class="btn" id="bv_dvc_antiCheck"><i class="fa fa-check-square-o"></i> <span>查看其它</span></a>\
                </div>\
            </div>\
            <div class="padding-20">\
                <div id="bv_DefaultVisibilityTree"></div>\
            </div>';

    this.parentDiv.html(html);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");

    var treecontainer = $('#bv_DefaultVisibilityTree');
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
    };

    function collectElements(node, vis){
        node.Visible = vis;
        if(node.Level == "Element"){
            scope.engine.setElementVisible(node.Id, vis);
        }
        else{
            node.Children.forEach(function(subnode, index){
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

    $('#bv_dvc_resetVisibility').click(function (e) {
        
        uitree.check_all(true);
        for(var i=0, iLen = bimScene.ElementList.length; i < iLen; i++){
            var element = bimScene.ElementList[i];
            if (element.IfcType == "IfcSpace")
                continue;

            element.Parent.Visible = true;
            element.Parent.Parent.Visible = true;
            scope.engine.setElementVisible(element.Id, true);
        }
    });

    $('#bv_dvc_clearVisibility').click(function (e) {
        
        uitree.uncheck_all(true);
        for(var i=0, iLen = bimScene.ElementList.length; i < iLen; i++){
            var element = bimScene.ElementList[i];
            if (element.IfcType == "IfcSpace")
                continue;

            element.Parent.Visible = false;
            element.Parent.Parent.Visible = false;
            scope.engine.setElementVisible(element.Id, false);
        }
    });


    $('#bv_dvc_antiCheck').click(function (e) {

        if(inAntiCheckMode == false){
            inAntiCheckMode = true;
            treecontainer.addClass('bimviz_disabled');
            $('#bv_dvc_antiCheck').find('span').html('返回');
            $('#bv_dvc_antiCheck').addClass('btn-success');
        }
        else{
            inAntiCheckMode = false;
            treecontainer.removeClass('bimviz_disabled');
            $('#bv_dvc_antiCheck').find('span').html('查看其它');
            $('#bv_dvc_antiCheck').removeClass('btn-success');
        }

        for(var i=0, iLen = bimScene.ElementList.length; i < iLen; i++){
            var element = bimScene.ElementList[i];
            if (element.IfcType == "IfcSpace")
                continue;

            scope.engine.setElementVisible(element.Id, !element.Visible);
        }
    });
};