
BIMVIZ.ProjectState = {
    Processing: 0,
    Finished: 1
};

BIMVIZ.SceneBackgroundStyle = {
    White: 1,
    Black: 2,
    BlueWhite: 3,
    BlueSky: 4
};

BIMVIZ.SceneGroundStyle = {
    None: 'none',
    GreenLand: 'greenland'
};

BIMVIZ.SceneLoadMode = {
    Complete: 1,
    Dynamic: 2
};

BIMVIZ.SceneThemeStyle = {
    ModelSelf: 1,
    Sketch: 2
};

BIMVIZ.SceneDomain = {
    Architectural: 1,
    Rabar: 2
};

BIMVIZ.ModelProject = function (_name, _description, _state, _guid) {
    this.Name = _name;
    this.Description = _description;
    this.State = _state;
    this.Guid = _guid;
};

BIMVIZ.ProjectSettings = function (settings) {
    this.BackgroundStyle = settings.BackgroundStyle;
    this.SceneComplex = settings.SceneComplex;
    this.ThemeStyle = settings.ThemeStyle;
    this.GroundStyle = settings.GroundStyle;
    this.SceneDomain = settings.SceneDomain;
};

BIMVIZ.ProjectInfo = function (project, settings) {
    this.Project = project;
    this.SceneSettings = settings;
};

BIMVIZ.ModelProjectManager = function (options) {
    var _this = this;
    this.APIURL = options.host + "/api/project/";
    this.RequestHeaders = { Authorization: 'bearer ' + options.token };

    this.getAllProjects = function (username, callback) {
        $.ajax({
            url: _this.APIURL + 'ListAll',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                username: username
            },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (projects) {
                callback(projects);
            }
        });
    }
 
    this.updateProjectInfo = function (username, projitem, callback, uploadProgress) {
        $.ajax({
            url: _this.APIURL + 'UpdateProjectInfo?username=' + username + '&projid=' + projitem.projid + '&name='
                + projitem.name + '&description=' + projitem.description,
            type: 'PUT',
            headers: _this.RequestHeaders,
            data: projitem.fileform,
            dataType: 'json',
            contentType: false,
            processData: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            xhr: function () {
                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function (evt) {
                    if (uploadProgress) {
                        uploadProgress(evt, projitem.projid);
                    }
                }, false);

                return xhr;
            },
            success: function (result) {
                callback(result);
            }
        });
    }

    this.updateSceneSettings = function (username, projectid, projectsettings, callback) {
        $.ajax({
            url: _this.APIURL + 'UpdateSceneSettings?username=' + username + "&projid=" + projectid,
            type: 'PUT',
            headers: _this.RequestHeaders,
            data: JSON.stringify(projectsettings),
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

    this.removeProjectFile = function (username, projectid, filename, callback) {
        $.ajax({
            url: _this.APIURL + 'RemoveProjectFile',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                username: username,
                projid: projectid,
                filename: filename
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

    this.uploadProjectFiles = function (username, projectid, fileform, callback, uploadProgress) {
        $.ajax({
            url: _this.APIURL + 'UploadProjectFiles?username=' + username + '&projid=' + projectid,
            type: 'POST',
            headers: _this.RequestHeaders,
            data: fileform,
            dataType: 'json',
            contentType: false,
            processData: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            xhr: function () {
                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function (evt) {
                    if (uploadProgress) {
                        uploadProgress(evt, projectid);
                    }
                }, false);

                return xhr;
            },
            success: function (result) {
                callback(result);
            }
        });
    }

    this.addProject = function (username, projectinfo, callback) {
        $.ajax({
            url: _this.APIURL + 'Add?username=' + username,
            type: 'POST',
            headers: _this.RequestHeaders,
            data: JSON.stringify(projectinfo),
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

    // delete project by AJAX
    this.deleteProject = function (username, projid, callback) {
        $.ajax({
            url: _this.APIURL + 'Delete?username=' + username + '&projid=' + projid,
            type: 'DELETE',
            headers: _this.RequestHeaders,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (result) {
                callback(result);
            }
        });
    };
}