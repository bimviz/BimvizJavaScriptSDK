
BIMVIZ.UI.DefaultCameraBookmarkControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultCameraBookmarkControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultCameraBookmarkControl.constructor = BIMVIZ.UI.DefaultCameraBookmarkControl;

BIMVIZ.UI.DefaultCameraBookmarkControl.prototype.onProjectLoaded = function(project){
	var scope = this;
	var controlId = "bv_camerabookmark_" + scope.engine.id; 
	var adbButtonId = "bv_camerabookmark_add_" + scope.engine.id; 
	var mgr = scope.engine.getCameraBookmarkManager();
	var height = 200;
	var itemlist = [];
    var sceneContainer = $('#'+scope.engine.ContainerId);
    var control = null;

    var itemTemplate = '<div class="bimviz_camera_bookmark_item" rel="{0}">\
		                	<div class="bimviz_camera_bookmark_item_img" style="background:url({1});background-size:cover;">\
			                	<span>\
			                		<a><i class="fa fa-trash bimviz_camera_bookmark_item_delete"></i></a>\
			                		<a><i class="fa fa-edit bimviz_camera_bookmark_item_edit"></i></a>\
			                	</span>\
		                	</div>\
		                	<div class="bimviz_camera_bookmark_item_span">{2}</div>\
		                </div>';

	function showItemDialog(title, item, name, description, isAddMode, callback){
		$('#bv_bookmark_input_name').val(name);
		$('#bv_bookmark_input_desc').val(description);

		if(isAddMode){
    		$('#bv_bookmark_input_updateimage_div').hide();
    		$('#bv_bookmark_input_updateimage').prop("checked", true);
    	}
    	else{
    		$('#bv_bookmark_input_updateimage_div').show();
    		$('#bv_bookmark_input_updateimage').prop("checked", true);
    	}

    	scope.engine.getSnapShot(600, 300, function(url){
    		var img = document.getElementById('bv_cameraBookmarkDialog_img');
    		img.src = url;
    		img.onload = function(){
	    			$("#bv_cameraBookmarkDialog").dialog({
	                resizable: false,
	                width: '650',
	                modal: true,
	                title: title,
	                buttons: [
	                    {
	                        html: "<i class='fa fa-check'></i>&nbsp; 确定",
	                        "class": "btn btn-default btn-minier",
	                        click: function () {
	                            $(this).dialog("close");
	                            var newname = $('#bv_bookmark_input_name').val();
	                            var newdesc = $('#bv_bookmark_input_desc').val();
	                            var updateposition = $('#bv_bookmark_input_updateimage').prop("checked");
	                            callback(item, newname, newdesc, updateposition, url);
	                        }
	                    }
	                    ,
	                    {
	                        html: "<i class='fa fa-trash'></i>&nbsp; 取消",
	                        "class": "btn btn-default",
	                        click: function () {
	                            $(this).dialog("close");
	                        }
	                    }
	                ]
	            });
	    	};
    		
    	}); 	
    }	          
    
    function addItemToUi(item) {
        var $container = $('#bv_bookmark_itemcontaner');
        var text = itemTemplate.format(item.id, item.imageurl, item.name);

        $container.append(text);

        // For Click
        $('.bimviz_camera_bookmark_item[rel=' + item.id + '] .bimviz_camera_bookmark_item_img').click(function (e) {
            var pos = item.position;
            var target = item.target;
            scope.engine.flyFromTo(pos, target);
        });

        // For Delete
        $('.bimviz_camera_bookmark_item[rel=' + item.id + '] .bimviz_camera_bookmark_item_delete').click(function (e) {
            e.stopPropagation();

            var toDelete = window.confirm('单击"确定"删除该标签。单击"取消"停止');
            if(toDelete){
               onDelete(item);
            }
        });

        // For Edit
        $('.bimviz_camera_bookmark_item[rel=' + item.id + '] .bimviz_camera_bookmark_item_edit').click(function (e) {
        	e.stopPropagation();

            showItemDialog('编辑相机书签', item, item.name, item.description, false, onEdit);
        });

        itemlist.push(item);
    }

    function onAdd(item, name, description, updateimage, url){
    	var pos = scope.engine.getCameraPosition();
    	var target = scope.engine.getCameraTarget();
    	item = new BIMVIZ.CameraBookmark(name, description, url, pos, target);

    	mgr.create(item, function(bookmark){
    		item.id = bookmark.id;
    		addItemToUi(item);
    	});
    };

    function onEdit(item, name, description, isUpdatePosition, url){
        item.name = name;
        item.description = description;

        if(isUpdatePosition){
            item.imageurl = url;
            item.position = scope.engine.getCameraPosition();
            item.target = scope.engine.getCameraTarget();
        }

        mgr.update(item, isUpdatePosition, function(){
            $('.bimviz_camera_bookmark_item[rel=' + item.id + '] .bimviz_camera_bookmark_item_span').html(item.name);
            if(isUpdatePosition){
            	var imgs = $('.bimviz_camera_bookmark_item[rel=' + item.id + '] .bimviz_camera_bookmark_item_img');
            	imgs.css('background','url('+item.imageurl+')');
            	imgs.css('background-size','cover');
            }
        });

    };

    function onDelete(item){
        mgr.delete(item.id, function(){
            $('.bimviz_camera_bookmark_item[rel=' + item.id + ']').remove();
            itemlist.remove(item);
        });
    };

    function onresize(){
	     	var left = sceneContainer.position().left;
		    var top = sceneContainer.position().top + sceneContainer.height() - control.height() - 20;
		    var width = sceneContainer.width();

		    control.css('left', left +'px');
		    control.css('top',  top + 'px');
		    control.css('width',  width + 'px');
	     }

    function init(){
    	var controlHtml = '<div id="'+controlId+'" style="padding-top:7px;padding-bottom:7px;background-color:rgba(0, 0, 0, 0.4);position:absolute;left:10px;bottom:10px;width:500px;height:'+height+'px;">\
                <div style="padding-top:7px;padding-bottom:7px;border-color:#FFFFFF;border-width:7px;border-style:dashed;border-left:none;border-right:none;">\
	                <div id="bv_bookmark_itemcontaner" style="overflow-x:auto;background-color:rgba(0, 0, 0, 0.5);height:'+height+'px;">\
	                	<div class="bimviz_camera_bookmark_startpanel">\
	                		<a class="btn block '+adbButtonId+'" style="margin-bottom:75px;margin-top:5px;"><i class="fa fa-plus-circle ico-transparent ico-hover ico-lg "></i></a>\
	                	</div>\
		                <div class="bimviz_camera_bookmark_item">\
		                	<div class="bimviz_camera_bookmark_item_img" style="background:url(../sdk/viz/data//images/shot1.png);background-size:cover;">\
			                	<span>\
			                		<i class="fa fa-trash"></i>\
			                		<i class="fa fa-edit"></i>\
			                	</span>\
		                	</div>\
		                	<div class="bimviz_camera_bookmark_item_span">Home</div>\
		                </div>\
	                </div>\
                </div>\
                <div id="bv_cameraBookmarkDialog" hidden class="padding-20 bottom-border-1">\
					<label>名称：</label><input class="form-control" id="bv_bookmark_input_name" type="text" />\
                    <label>描述：</label><input class="form-control" id="bv_bookmark_input_desc" type="text" />\
                    <div style="margin-top:10px;" id="bv_bookmark_input_updateimage_div">\
                          <input  id="bv_bookmark_input_updateimage" type="checkbox" >是否更新相机位置</input>\
                    </div>\
                    <div style="margin-top:10px;text-align: center;vertical-align: middle;">\
                    	<img id="bv_cameraBookmarkDialog_img" src="" style="width:600px;height:300px;" />\
                    </div>\
				</div>\
                </div>';

    	scope.parentDiv.css('width', '0px');
	    scope.parentDiv.css('height', '0px');
	    scope.parentDiv.removeClass("padding-20");
	    scope.parentDiv.html(controlHtml);

	    control = $('#'+controlId);

	    $(window).resize(onresize);
	    onresize();

	    $('.' + adbButtonId).click(function (e) {
        	showItemDialog("创建相机标签",null, "","", true, onAdd);
    	});

	    
    	mgr.getList(function(success, list){
	        if(success){
	            itemlist = [];

		        control.find(".bimviz_camera_bookmark_item").remove();
		        list.forEach(function (item) {
		            addItemToUi(item);
		        });
	        }
	    });
	    
    };

    init();
};
