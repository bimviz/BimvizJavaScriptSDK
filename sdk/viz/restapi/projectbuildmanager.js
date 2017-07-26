BIMVIZ.ProjectSceneBuildCmd = {
    RebuildAll: 'RebuildAll',
    RebuildScene: 'RebuildScene'
};

BIMVIZ.ProjectBuildManager = function (options) {
    var _this = this;
    this.APIURL = options.host + "/api/projectbuild/";
    this.RequestHeaders = { Authorization: 'bearer ' + options.token };

    this.getRebuildSceneState = function (username, projectid, callback) {
        $.ajax({
            url: _this.APIURL + 'GetRebuildSceneState',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                username: username,
                projid: projectid
            },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (rebuildstate) {
                callback(rebuildstate);
            }
        });
    }

    this.rebuildScene = function (username, projectid, cmd, callback) {
        $.ajax({
            url: _this.APIURL + 'RebuildScene',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                username: username,
                projid: projectid,
                cmd: cmd
            },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (rebuildstate) {
                callback(rebuildstate);
            }
        });
    }

    this.setSceneState = function (username, projectid, scenestatus, callback) {
        $.ajax({
            url: _this.APIURL + 'SetSceneState',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                username: username,
                projid: projectid,
                scenestatus: scenestatus
            },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (result) {
                callback(result);
            }
        });
    }
}