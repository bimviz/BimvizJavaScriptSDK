BIMVIZ.UI.DefaultMeasureControl = function (name, iconClass) {
    BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultMeasureControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultMeasureControl.constructor = BIMVIZ.UI.DefaultMeasureControl;

BIMVIZ.UI.DefaultMeasureControl.prototype.onShow = function(){

};

BIMVIZ.UI.DefaultMeasureControl.prototype.onHide = function(){

};


BIMVIZ.UI.DefaultMeasureControl.prototype.onProjectLoaded = function (project) {
    var scope = this;
    var container = this.parentDiv;
    var mgr = this.engine.getMeasureManager();
    var itemlist = [];
    var lastmode = null;
    var modetype = {
    	"None":"None",
    	"Point":"Length",
    	"Vertex":"Length",
    	"Edge":"Length",
    	"Polyline":"PolylineLength",
    	"Face":"Area",
    	"Volume":"Volume"
    };
    this.enabled = false;

    var lastClickItem;
    var lastClickIndex = -1;

    var interactionhtml = '\
    	<div class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                 <div class="input-group pull-left">\
                    <label class="switch switch-primary switch-round" >\
                        <input type="checkbox" id="bv_measure_start">\
                        <span class="switch-label" data-on="" data-off=""></span>\
                        <span style="color:white"> 测量模式 </span>\
                    </label>\
                    <div class="pull-right" style="margin-left:30px;">\
	                    <a style="padding-top:4px;" class="btn" id="bv_measure_clear"><i class="fa fa-object-ungroup"></i> 重置</a>\
                	</div>\
        		</div>\
        </div>\
        <div id="bv_measure_settings_mode" class="list-item-font padding-20">\
            <div style="padding:0px 0px 0px 0px;">\
            	<div style="margin-bottom:10px;">捕捉模式</div>\
                <div style="width:25px;float:left;"><input name="bv_pick_snap_mode" value="Point" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">无</div>\
                <div style="width:25px;float:left;"><input name="bv_pick_snap_mode" value="Vertex" type="radio" checked style="width:20px;"></div>\
                <div style="width:40px;float:left;">点</div>\
                <div style="width:25px;float:left;"><input name="bv_pick_snap_mode" value="Edge" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">线</div>\
            </div>\
            <br>\
            <br>\
            <div style="padding:0px 0px 0px 0px;">\
                <div style="width:25px;float:left;"><input name="bv_pick_snap_mode" value="Polyline" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">轮廓</div>\
                <div style="width:25px;float:left;"><input name="bv_pick_snap_mode" value="Face" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">面</div>\
                <div style="width:25px;float:left;"><input name="bv_pick_snap_mode" value="Volume" type="radio" style="width:20px;"></div>\
                <div style="width:40px;float:left;">体</div>\
            </div>\
        </div>\
        <hr style="margin:0px;">\
        <div id="bv_measure_settings_unit" class="list-item-font">\
        	<div id="bv_measure_settings_unit_showbutton">\
        		<a style="color:white;float:right;padding-right:20px;text-decoration:none"><i id="bv_measure_btn_show_units" style="margin-top:5px;" class=" fa fa-angle-double-down"></i></a>\
        	</div>\
        	<div id="bv_measure_settings_unit_items" class="padding-20" hidden>\
	            <div style="padding:0px 0px 0px 0px;">\
	            	<div style="margin-bottom:10px;">长度单位</div>\
	                <div style="width:25px;float:left;"><input name="bv_pick_length_unit" checked value="mm" type="radio" style="width:20px;"></div>\
	                <div style="width:40px;float:left;">mm</div>\
	                <div style="width:25px;float:left;"><input name="bv_pick_length_unit" value="m" type="radio" style="width:20px;"></div>\
	                <div style="width:40px;float:left;">m</div>\
	            </div>\
	            <br>\
	            <br>\
	            <div style="padding:0px 0px 0px 0px;">\
	            	<div style="margin-bottom:10px;">面积单位</div>\
	                <div style="width:25px;float:left;"><input name="bv_pick_area_unit" value="mm2" type="radio" style="width:20px;"></div>\
	                <div style="width:40px;float:left;">mm²</div>\
	                <div style="width:25px;float:left;"><input name="bv_pick_area_unit" checked value="m2" type="radio" style="width:20px;"></div>\
	                <div style="width:40px;float:left;">m²</div>\
	            </div>\
	            <br>\
	            <br>\
	            <div style="padding:0px 0px 0px 0px;">\
	            	<div style="margin-bottom:10px;">体积单位</div>\
	                <div style="width:25px;float:left;"><input name="bv_pick_volume_unit" value="mm3" type="radio" style="width:20px;"></div>\
	                <div style="width:40px;float:left;">mm³</div>\
	                <div style="width:25px;float:left;"><input name="bv_pick_volume_unit" checked value="m3" type="radio" style="width:20px;"></div>\
	                <div style="width:40px;float:left;">m³</div>\
	            </div>\
            </div>\
        </div>\
        <hr style="margin:0px;">\
        <div id="bv_measure_overview" class="list-item-font" style="margin:20px 20px 20px 20px;">\
            <div style="padding:0px 0px 0px 0px;">\
            	<div style="margin-bottom:10px;">测量结果</div>\
            	<div style="margin-bottom:10px;margin-left:20px;" class="bv_measure_alllength">总长度 : </div>\
            	<div style="margin-bottom:10px;margin-left:20px;" class="bv_measure_allarea">总面积 : </div>\
            	<div style="margin-bottom:10px;margin-left:20px;" class="bv_measure_allvolume">总体积 : </div>\
            </div>\
        </div>\
        <hr style="margin:0px;">\
        <div id="bv_measure_items" style="margin:0px 0px 0px 0px;">\
        </div>\
        ';

    container.html(interactionhtml);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");
    container.css("width", "400px");

    var itemContainer = $('#bv_measure_items');
    var itemLengthtemplate = '<div class=" bv_lengthitem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-top:20px;">\
                                   <span class="badge badge-default numberCircle" style="width:36px;height:auto;">{1}</span>\
                                </div>\
                                <div class="col-md-7 col-sm-7 col-xs-7">\
                                    <a style="text-decoration: none" class="bv_length_href">\
                                        <div class="list-item-font bv_measure_length_delta">dx ：{2},  dy : {3},  dz : {4}</div>\
                                        <div class="list-item-font bv_measure_length_edge">线段长度 : {5}</div>\
                                        <div class="list-item-font bv_measure_length_total">累计长度 : {6}</div>\
                                    </a>\
                                </div\
                                <div class="col-md-4 col-sm-4 col-xs-4">\
                                   <a style="float:right;padding-right:20px;"><i  style="margin-top:15px;margin" class="ico-light ico-rounded ico-xs ico-hover fa fa-close bv_measure_btn_delete"></i></a>\
                                </div>\
                            </div>\
                            <hr style="margin:0px;">\
                        </div>';

    var itemAreatemplate = '<div class=" bv_areaitem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-top:5px;">\
                                   <span class="badge badge-default numberCircle" style="width:36px;height:auto;">{1}</span>\
                                </div>\
                                <div class="col-md-7 col-sm-7 col-xs-7">\
                                    <a style="text-decoration: none" class="bv_area_href">\
                                        <div class="list-item-font bv_measure_current_area">选中面积 : {2}</div>\
                                        <div class="list-item-font bv_measure_total_area">累计面积 : {3}</div>\
                                    </a>\
                                </div\
                                <div class="col-md-4 col-sm-4 col-xs-4">\
                                   <a style="float:right;padding-right:20px;"><i  style="margin-top:5px;margin" class="ico-light ico-rounded ico-xs ico-hover fa fa-close bv_measure_btn_delete"></i></a>\
                                </div>\
                            </div>\
                            <hr style="margin:0px;">\
                        </div>';

    var itemVolumetemplate = '<div class=" bv_volumeitem" rel="{0}" style="padding:10px 10px;">\
                            <div class="row padding-0">\
                                <div class="col-md-2 col-sm-2 col-xs-2 col" style="padding-top:5px;">\
                                   <span class="badge badge-default numberCircle" style="width:36px;height:auto;">{1}</span>\
                                </div>\
                                <div class="col-md-7 col-sm-7 col-xs-7">\
                                    <a style="text-decoration: none" class="bv_volume_href">\
                                    	<div class="list-item-font bv_measure_current_volume">构件名称 : {2}</div>\
                                        <div class="list-item-font bv_measure_current_volume">选中面积 : {3}</div>\
                                        <div class="list-item-font bv_measure_total_volume">选中体积 : {4}</div>\
                                        <div class="list-item-font bv_measure_current_area">累计面积 : {5}</div>\
                                        <div class="list-item-font bv_measure_total_area">累计体积 : {6}</div>\
                                    </a>\
                                </div\
                                <div class="col-md-4 col-sm-4 col-xs-4">\
                                   <a style="float:right;padding-right:20px;"><i  style="margin-top:5px;margin" class="ico-light ico-rounded ico-xs ico-hover fa fa-close bv_measure_btn_delete"></i></a>\
                                </div>\
                            </div>\
                            <hr style="margin:0px;">\
                        </div>';

    function resetUI(type){
   		itemContainer.html('');

   		if(type === "Length" || type === "PolylineLength"){
   			$('#bv_measure_overview .bv_measure_alllength').show();
   			$('#bv_measure_overview .bv_measure_alllength').html('总长度 :');
   			$('#bv_measure_overview .bv_measure_allarea').hide();
   			$('#bv_measure_overview .bv_measure_allvolume').hide();
   		}
   		else if (type === "Area"){
   			$('#bv_measure_overview .bv_measure_allarea').show();
   			$('#bv_measure_overview .bv_measure_allarea').html('总面积 :');
   			$('#bv_measure_overview .bv_measure_alllength').hide();
   			$('#bv_measure_overview .bv_measure_allvolume').hide();
   		}
   		else if (type === "Volume"){
   			$('#bv_measure_overview .bv_measure_allvolume').show();
   			$('#bv_measure_overview .bv_measure_allvolume').html('总体积 :');
   			$('#bv_measure_overview .bv_measure_alllength').hide();
   			$('#bv_measure_overview .bv_measure_allarea').show();
   			$('#bv_measure_overview .bv_measure_allarea').html('总面积 :');
   		}
   		else{
   			$('#bv_measure_overview .bv_measure_alllength').html('总长度 :');
   			$('#bv_measure_overview .bv_measure_allarea').html('总面积 :');
   			$('#bv_measure_overview .bv_measure_allvolume').html('总体积 :');
   		}

   		lastClickItem = null;
   		lastClickIndex = -1;
    };

    function setMode(mode){

    	if(scope.enabled==false)
    		return;

    	mgr.start(mode);

       	var type1 = modetype[lastmode];
       	var type2 = modetype[mode];
       	if(type1 != type2){
       		resetUI(type2);
       		mgr.clear();
       	}
       
       	lastmode = mode;
    }

    $('#bv_measure_btn_show_units').click(function(e){
    	var ctrl = $(this);
    	if(ctrl.hasClass('fa-angle-double-up')){
    		ctrl.removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
    		$('#bv_measure_settings_unit').removeClass('padding-bottom-20');
    		$('#bv_measure_settings_unit_items').hide(50);
    	}
    	else if(ctrl.hasClass('fa-angle-double-down')){
    		ctrl.removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
    		$('#bv_measure_settings_unit').addClass('padding-bottom-20');
    		$('#bv_measure_settings_unit_items').show(50);
    	}
    });

    $('#bv_measure_start').click(function (e) {
    	resetUI();
    	scope.enabled = $(this).prop("checked");
    	if(scope.enabled){
    		var mode = $("input[name='bv_pick_snap_mode']:checked").val();
        	setMode(mode);
    	}
    	else{
    		setMode("None");
    		mgr.end();
    	}
    });

  $("input[name='bv_pick_snap_mode']").click(function(){
	   var mode = $("input[name='bv_pick_snap_mode']:checked").val();
       setMode(mode);
	});

	$("input[name='bv_pick_length_unit']").click(function(){
	   var unit = $("input[name='bv_pick_length_unit']:checked").val();
       mgr.unitSetting.lengthUnit = unit;
	});

	$("input[name='bv_pick_area_unit']").click(function(){
	   var unit = $("input[name='bv_pick_area_unit']:checked").val();
       mgr.unitSetting.areaUnit = unit;
	});

	$("input[name='bv_pick_volume_unit']").click(function(){
	   var unit = $("input[name='bv_pick_volume_unit']:checked").val();
       mgr.unitSetting.volumeUnit = unit;
	});

    $('#bv_measure_clear').click(function (e) {
        resetUI();
        mgr.clear();
    });

    $('#bv_measure_break').click(function (e) {
        mgr.breakCurrentPath();
    });

    
    function addLengthItemToUi(index, start, end, edgeLength, allLength) {

        var dx = Math.abs(start.x - end.x);
        var dy = Math.abs(start.y - end.y);
        var dz = Math.abs(start.z - end.z);

        var converted = mgr.unitSetting.convertLength(edgeLength);
    	var convertedAll = mgr.unitSetting.convertLength(allLength);

        var text = itemLengthtemplate.format(index, index+1, dx.toFixed(0), dy.toFixed(0), dz.toFixed(0), converted, convertedAll);
        itemContainer.append(text);

        // For Click this marker
        $('.bv_lengthitem[rel=' + index + '] .bv_length_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_lengthitem');
            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            if(lastClickIndex>=0){
            	mgr.highlightEdge(lastClickIndex, false);
            }

            lastClickIndex = index;
            mgr.highlightEdge(index, true);
            
        });

        // For Delete
        $('.bv_lengthitem[rel=' + index + '] .bv_measure_btn_delete').click(function (e) {
            var toDelete = window.confirm('单击"确定"删除线段。单击"取消"停止');
            if(toDelete){
              mgr.removeEdge(index);
              itemContainer.html('');

              // reset list
              mgr.rebuildEdges(onPickEdgeEvent);

              lastClickIndex = -1;
              lastClickItem = null;
            }
        });
    }

    function addFaceItemToUi(index, faceArea, allArea) {

    	var converted = mgr.unitSetting.convertArea(faceArea);
    	var convertedAll = mgr.unitSetting.convertArea(allArea);

        var text = itemAreatemplate.format(index, index+1,  converted, convertedAll);
        itemContainer.append(text);

        // For Click this marker
        $('.bv_areaitem[rel=' + index + '] .bv_area_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_areaitem');
            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            if(lastClickIndex>=0){
            	mgr.highlightFace(lastClickIndex, false);
            }

            lastClickIndex = index;
            mgr.highlightFace(index, true);
            
        });

        // For Delete
        $('.bv_areaitem[rel=' + index + '] .bv_measure_btn_delete').click(function (e) {
            var toDelete = window.confirm('单击"确定"删除面。单击"取消"停止');
            if(toDelete){
              mgr.removeFace(index);
              itemContainer.html('');

              // reset list
              mgr.rebuildFaces(onPickFaceEvent);

              lastClickIndex = -1;
              lastClickItem = null;
            }
        });
    }

	function addVolumeItemToUi(index, datanode, area, volume, allArea, allVolume) {

		var name =  datanode.Name;

		var convertedArea = mgr.unitSetting.convertArea(area);
    	var convertedAreaAll = mgr.unitSetting.convertArea(allArea);

    	var convertedVolume = mgr.unitSetting.convertVolume(volume);
    	var convertedVolumeAreaAll = mgr.unitSetting.convertVolume(allVolume);


        var text = itemVolumetemplate.format(index, index+1, name, convertedArea,convertedVolume, convertedAreaAll, convertedVolumeAreaAll);
        itemContainer.append(text);

        // For Click this marker
        $('.bv_volumeitem[rel=' + index + '] .bv_volume_href').click(function (e) {
            if (lastClickItem)
                lastClickItem.removeClass("resultSelectedBackground");

            var parent = $(this).parents('.bv_volumeitem');
            parent.addClass("resultSelectedBackground");
            lastClickItem = parent;

            if(lastClickIndex>=0){
            	mgr.highlightVolume(lastClickIndex, false);
            }

            lastClickIndex = index;
            mgr.highlightVolume(index, true);
            
        });

        // For Delete
        $('.bv_volumeitem[rel=' + index + '] .bv_measure_btn_delete').click(function (e) {
            var toDelete = window.confirm('单击"确定"删除面。单击"取消"停止');
            if(toDelete){
              mgr.removeVolume(index);
              itemContainer.html('');

              // reset list
              mgr.rebuildVolumes(onPickVolumeEvent);

              lastClickIndex = -1;
              lastClickItem = null;
            }
        });
    }

    function onPickEdgeEvent(index, start, end, edgeLength, allLength){
    	$('#bv_measure_overview .bv_measure_alllength').html('总长度 : '+allLength.toFixed(0)+" [mm]");
    	addLengthItemToUi(index, start, end, edgeLength, allLength);
    };

    function onPickFaceEvent(index, area, allArea){
    	var convertedAll = mgr.unitSetting.convertArea(allArea);

    	$('#bv_measure_overview .bv_measure_allarea').html('总面积 : '+convertedAll);
    	addFaceItemToUi(index, area, allArea);
    };

    function onPickPolylineEvent(edges, allLength){
    	itemContainer.html('');

    	var convertedAll = mgr.unitSetting.convertLength(allLength);

    	$('#bv_measure_overview .bv_measure_alllength').html('总长度 : '+ convertedAll);

    	for (var i = 0; i < edges.length; i++) {
    		var edge = edges[i];
    		addLengthItemToUi(edge.index, edge.start, edge.end, edge.length, edge.allLength);
    	}
    };

    function onPickVolumeEvent(index, datanode, area, volume, allArea, allVolume){

    	var convertedAreaAll = mgr.unitSetting.convertArea(allArea);
    	var convertedVolumeAll = mgr.unitSetting.convertVolume(allVolume);

    	$('#bv_measure_overview .bv_measure_allarea').html('总面积 : '+ convertedAreaAll);
    	$('#bv_measure_overview .bv_measure_allvolume').html('总体积 : '+ convertedVolumeAll);
    	
    	addVolumeItemToUi(index, datanode, area, volume, allArea, allVolume);
    };

    mgr.onPickEdgeEvent(onPickEdgeEvent);
    mgr.onPickFaceEvent(onPickFaceEvent);
    mgr.onPickPolylineEvent(onPickPolylineEvent);
    mgr.onPickVolumeEvent(onPickVolumeEvent);
    mgr.onClearEvent(resetUI);

    setMode("None");
};