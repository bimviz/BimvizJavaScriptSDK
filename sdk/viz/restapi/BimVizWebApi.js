BIMVIZ.WebApi = function (parameters) {
    var _this = this;
    var modelprojectmgr;
    var projectbuildmgr;

    parameters = parameters || {};

    this.KEY = parameters.key;
    this.HOST = "http://" + parameters.ip + ":" + parameters.port;
    this.TOKEN = "";

    function init()
    {
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

        modelprojectmgr = new BIMVIZ.ModelProjectManager({
            host: _this.HOST,
            token: _this.TOKEN
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