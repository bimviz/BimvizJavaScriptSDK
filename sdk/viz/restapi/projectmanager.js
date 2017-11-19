BIMVIZ.ProjectManager = function(parameters) {
	
	var _this = this;
    parameters = parameters || {};

    this.KEY = parameters.key;
    this.HOST = "http://" + parameters.ip + ":" + parameters.port;
    this.TOKEN = "";
    this.APIURL = _this.HOST + "/api/";

    var keytext = parameters.key;
    $.ajax({
        cache: false,
        url: _this.HOST + '/token',
        type: 'POST',
        async: false, // Please not to change to 'true'
        data: {
            grant_type: 'restapi',
            username: 'devkey',
            password: keytext
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

	this.RequestHeaders = { Authorization: 'bearer ' + _this.TOKEN };

    // Get all projects overview informations from server by AJAX
    this.getAllProjects = function(onsuccess){
        $.ajax({
            url: _this.APIURL + 'Project/GetAllProjects',
            type: 'GET',
            headers: _this.RequestHeaders,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (result) {
               onsuccess(result.Projects);
            }
        });
    };

    // Get the bim tree from BIM Files by AJAX
    this.getProjectBimTree = function(pid, onsuccess){
        $.ajax({
            url: _this.APIURL + 'Project/GetProjectBimTree',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {pid:pid},
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (result) {
               onsuccess(result);
            }
        });
    };

    //Get element information from server by element by element's global id and project's id
    this.getElementById = function (pid, gid, callback) {
        $.ajax({
            url: _this.APIURL + 'Project/GetElementById',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                projId: pid,
                globalId: gid
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (data) {
                if (data.element) {
                    callback(true, data.element);
                }
                else {
                    callback(false, data.element);
                }
            }
        });
    };

    //Get element information from server by element by element's global id and project's id
    this.getAllSessionDataList = function (callback) {
        $.ajax({
            url: _this.APIURL + 'admin/session/all',
            type: 'GET',
            headers: _this.RequestHeaders,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (data) {
                if (data) {
                    callback(data);
                }
            }
        });
    };
};