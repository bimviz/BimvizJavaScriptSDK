
BIMVIZ.UI.DefaultMarkSimpleListControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);


};

BIMVIZ.UI.DefaultMarkSimpleListControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultMarkSimpleListControl.constructor = BIMVIZ.UI.DefaultMarkSimpleListControl;

BIMVIZ.UI.DefaultMarkSimpleListControl.prototype.onProjectLoaded = function(project){
	
    var scope = this;
    var container = this.parentDiv;
    var lastClickItem = null;
    var markers = [];
    var markerpath = "images/markers/";

    function init(){
        var controlHtml = '<div id="bv_markerbar" class="padding-20 border-bottom-1" style="width:100%;height:70px;">\
                <div class="input-group pull-left">\
                    <label class="switch switch-primary switch-round">\
                        <input type="checkbox" id="bv_markshowall">\
                        <span class="switch-label" data-on="" data-off=""></span>\
                        <span> 显示标注 </span>\
                    </label>\
                </div>\
            </div>\
            <div id="bv_markeritems"></div>';

        container.html(controlHtml);

        $("#bv_markshowall").change(function () {
            var ch = $(this).prop("checked");
            scope.engine.showAllMarker(ch);
        });

        
        scope.engine.addListener(BIMVIZ.EVENT.OnPickMarker, onMarkerClicked);
    }
    
    function popupMarkers(newmarkers) {
        markers = [];
        var $container = $('#bv_markeritems');
        $container.html('');

        var template = $('#marker_template').html();
        newmarkers.forEach(function (item) {
            addMarkerToUi(item);
        });
    }

    function addMarkerToUi(item) {
        var $container = $('#bv_markeritems');
        var template = '<div class="border-bottom-1  bv_markeritem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-left:20px;">\
                                    <img class="bv_marker_icon" src="{3}" style="width:36px;height:auto;" />\
                                </div>\
                                <div class="col-md-10 col-sm-10 col-xs-10 padding-0">\
                                    <a style="text-decoration: none" class="bv_marker_href">\
                                        <div class="list-item-font bv_marker_name">名称:{1}</div>\
                                        <div class="list-item-fontsmall bv_marker_description">信息:{2}</div>\
                                    </a>\
                                </div\
                            </div>\
                        </div>';

        var defaulticon = markerpath + "arts-crafts.png";
        if (item.icon) {
            defaulticon = scope.engine.ResourcePath + item.icon;
        }
        var text = template.format(item.id, item.title, item.description, defaulticon);
        $container.append(text);

        // For Click this marker
        $('.bv_markeritem[rel=' + item.id + '] .bv_marker_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_markeritem');
            var id = parent.attr('rel');

            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            scope.engine.flyToPosition(item.point, function(){
                scope.engine.animateMarker(id);
            });
        });
        markers.push(item);
    }

    function onMarkerClicked(evt) {
        var data = evt.args;
        var marker = data.userdata;
       
        // remove this line, since $('.bv_markeritem[rel=' + item.id + '] .bv_marker_href').click will call
        // scope.engine.animateMarker(marker.id);

        $('.bv_markeritem[rel=' + marker.id + '] a').trigger('click');
    }

   
    init();
    popupMarkers(project.markers);
};
