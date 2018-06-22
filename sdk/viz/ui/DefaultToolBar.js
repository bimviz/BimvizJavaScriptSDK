
BIMVIZ.UI.ControlIdCount = 1;
BIMVIZ.UI.DefaultControl = function(name, iconClass){
	Object.defineProperty( this, 'id', { value: BIMVIZ.UI.ControlIdCount ++ } );

	this.name = name;
	this.iconClass = iconClass;
	this.parentDiv = null;
	this.engine = null;
};

BIMVIZ.UI.DefaultControl.prototype = {
	constructor : BIMVIZ.UI.DefaultControl,

    onShow:function(){

    },

    onHide:function(){

    },

	onProjectLoaded:function(project){

	},

	onResize : function(left, top, height){

	},

	visible : function () {
        return !this.parentDiv.is(":hidden");
    },

	show : function (visible) {
        if (visible) {
            this.parentDiv.show();
            this.onShow();
        }
        else {
            this.parentDiv.hide();
            this.onHide();
        }
    },

    engine : function(){
    	return this.engine;
    },

    dispose:function(){
        this.engine = undefined;
    },
};

BIMVIZ.UI.HelloControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.HelloControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.HelloControl.constructor = BIMVIZ.UI.HelloControl;

BIMVIZ.UI.DefaultToolBar = function(bimEngine){
	var controls = [];
	var _this = this;
	var container = null;
	var buttonContainer = null;
	var panelContainer = null;
	var parentContainer = null;
	var buttonTemplate =  '<a title="{0}" href="#" id="{1}"><i class="ico-light ico-rounded ico-hover fa {2} fa-4x" style="font-size:30px;"></i></a>';
    
    function init() {
    	var div = '<div id = "bv_DefaultToolBar" class="bimviz_toolbar">\
    		<div id="bv_DefaultToolBar_Button" class="bimviz_toolbar_buttons">\
    		</div>\
    		<div id="bv_DefaultToolBar_Panel" hidden>\
    		</div>\
    	</div>';
    	
    	parentContainer = $('#'+bimEngine.ContainerId);
    	parentContainer.append(div);

    	container = $('#bv_DefaultToolBar');
    	buttonContainer = $('#bv_DefaultToolBar_Button');
    	panelContainer =  $('#bv_DefaultToolBar_Panel');

    	$(window).resize(onsize);
        onsize();

        bimEngine.addListener(BIMVIZ.EVENT.ProjectOverviewLoaded, onProjectLoaded);
    };

    function hideSpace(){
         bimEngine.addListener(BIMVIZ.EVENT.OnSceneLoadCompleted, function () {
            bimEngine.showType('IfcSpace', false);
        });
    }

    function onProjectLoaded(evt){
    	var name = evt.name;
        var data = evt.args;

        controls.forEach(function (item) {
            item.onProjectLoaded(data);
        });

        hideSpace();
        onsize();
    };

    function onsize() {
        var width = parentContainer.width();
        var height = parentContainer.height();
		var buttonsHeight = buttonContainer.height();

        container.css('top', '0px');
        container.css('height', buttonsHeight+"px");

        var panelTop = buttonsHeight;
        var panelHeight = height - buttonsHeight;

 		panelContainer.css('width', '400px');
        panelContainer.css('height', panelHeight + "px");
        panelContainer.css("top", panelTop + "px");
    };

    init();

    this.getControlButtonId = function(id){
    	return "bv_DefaultToolBar_Button_"+id;
    };

    this.getControlPanelId = function(id){
    	return "bv_DefaultToolBar_Panel_"+id;
    };

    this.addControl = function(control){
    	var name = control.name;
    	var buttonId = this.getControlButtonId(control.id);
    	var icon = control.iconClass;

    	var buttonHtml = buttonTemplate.format(name, buttonId, icon);
    	buttonContainer.append(buttonHtml);

    	var panelId = this.getControlPanelId(control.id);
    	var panelHtml = '<div id="'+panelId+'"  class="bimviz_toolbar_panel padding-20"></div>';
    	panelContainer.append(panelHtml);

    	$('#'+buttonId).click(function(e){
            e.preventDefault();
    		controls.forEach(function(item){
    			if(item.id==control.id)
    				return;

    			item.show(false);
    		});

			var visible = !control.visible();
			if(visible){
				control.show(true);
				panelContainer.show();
			}
    		else{
				control.show(false);
				panelContainer.hide();
			}
			
    	});

    	control.engine = bimEngine;
    	control.parentDiv = $('#'+panelId);
    	controls.push(control);
    };

    this.addButton = function(name, icon, callback){

        var buttonId = this.getControlButtonId(BIMVIZ.UI.ControlIdCount++);
        var buttonHtml = buttonTemplate.format(name, buttonId, icon);
        buttonContainer.append(buttonHtml);

        $('#'+buttonId).click(function(e){
            e.preventDefault();
            if(callback){
                callback();
            }            
        });
    };

    this.dispose = function(){
        controls.forEach(function(item){
            item.dispose();
        });

        controls = undefined;

        container.remove();
        container = undefined;
    }
};