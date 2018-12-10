BIMVIZ.WebApi = function (parameters) {
    var _this = this;
    var modelprojectmgr;
    var projectbuildmgr;

    parameters = parameters || {};

    this.KEY = parameters.key;
    this.HOST = "http://" + parameters.ip + ":" + parameters.port;
    this.RESTHOST="http://" + parameters.ip + ":" + parameters.restport;
	
	var url = window.location.href.toLowerCase();
	var https = url.indexOf("https") >= 0;
	if (https == true) {
	    this.HOST = "https://" + parameters.ip + ":" + parameters.port;
		this.RESTHOST="https://" + parameters.ip + ":" + parameters.restport;
	}
	
    this.TOKEN = "";
    this.RESTTOKEN="";

    var keytext = parameters.key;
    this.APIURL = _this.RESTHOST + "/api/";

    function init() {
        $.ajax({
            cache: false,
            url: _this.HOST + '/api/user/token',
            type: 'GET',
            async: false, // Please not to change to 'true'
            data: {
                devkey: parameters.key
            },
            dataType: 'json',
            success: function (result) {
                _this.TOKEN = result.token;
                console.log("token", _this.TOKEN);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Error:Authorization is not finished. Please check your envirment!");
            }
        });

        $.ajax({
            cache: false,
            url: _this.RESTHOST + '/token',
            type: 'POST',
            async: false, // Please not to change to 'true'
            data: {
                grant_type: 'restapi',
                username: 'devkey',
                password: keytext
            },
            dataType: 'json',
            success: function (result) {
                _this.RESTTOKEN = result.token;
                console.log("token", _this.RESTTOKEN);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Error:Authorization is not finished. Please check your envirment!");
            }
        });


        modelprojectmgr = new BIMVIZ.ModelProjectManager({
            host: _this.HOST,
            resthost:_this.RESTHOST,
            token: _this.TOKEN,
            resttoken:_this.RESTTOKEN
        });

        projectbuildmgr = new BIMVIZ.ProjectBuildManager({
            host: _this.HOST,
            token: _this.TOKEN        
        });
    }

    init();

    this.getModelProjectManager = function(){
        return modelprojectmgr;
    }

    this.getProjectBuildManager = function () {
        return projectbuildmgr;
    }
}