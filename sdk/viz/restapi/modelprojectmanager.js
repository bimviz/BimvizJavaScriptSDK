
BIMVIZ.ProjectState = {
	NotStart:-1,
    Processing: 0,
    Finished: 1,
	Failed:2
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


BIMVIZ.ColorFilter = {
    Open: 1,
    Close: 2
};

BIMVIZ.TransparentMode = {
    Theme: 'theme',
    Auto: 'auto',
    Custom: 'custom'
};

BIMVIZ.ColorMode = {
    Theme: 'theme',
    Custom: 'custom'
};

BIMVIZ.GrayScene = {
    Yes: 1,
    No: 0
};

BIMVIZ.PickCameraMove = {
    Yes: 1,
    No: 0
};

BIMVIZ.ShowAxis = {
    Yes: 1,
    No: 0
};

BIMVIZ.ShowViewBox = {
    Yes: 1,
    No: 0
};

BIMVIZ.ViewBoxPath = {
    Chinese: '/images/viewbox/cn',
    English: '/images/viewbox/en',
    XYZ: '/images/viewbox/xyz'
};

BIMVIZ.ShowQuickBar = {
    Yes: 1,
    No: 0
};

BIMVIZ.GroundShadow = {
    Yes: 1,
    No: 0
};

BIMVIZ.RenderMode = {
    Sketch: 'Sketch',
    AO2: 'AO2',
    AO4: 'AO4'
};

BIMVIZ.TextureMode = {
    Color: 1,
    Texture: 2
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
    this.ColorFilter = settings.ColorFilter;
    this.TransparentMode = settings.TransparentMode;
    this.ColorMode = settings.ColorMode;
    this.GrayScene = settings.GrayScene;
    this.PickCameraMove = settings.PickCameraMove;
    this.ShowAxis = settings.ShowAxis;
    this.ShowViewBox = settings.ShowViewBox;
    this.ViewBoxPath = settings.ViewBoxPath;
    this.ShowQuickBar = settings.ShowQuickBar;
    this.MaxMemory = settings.MaxMemory;
    this.MobileMaxMemory = settings.MobileMaxMemory;
    this.RenderByteSize = settings.RenderByteSize;
    this.GroundShadow = settings.GroundShadow;
    this.RenderMode = settings.RenderMode;
    this.TextureMode = settings.TextureMode;
    this.LoadFiles = settings.LoadFiles;
};

BIMVIZ.ProjectInfo = function (project, settings) {
    this.Project = project;
    this.SceneSettings = settings;
};

BIMVIZ.ModelProjectManager = function (options) {
    var _this = this;
    this.APIURL = options.host + "/api/project/";
    this.RESTAPIURL = options.resthost + "/api/";
    this.RequestHeaders = { Authorization: 'bearer ' + options.token };
    this.RestRequestHeaders = { Authorization: 'bearer ' + options.resttoken };


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
 
    this.getProjectById = function (username, projectid, callback){
        $.ajax({
            url: _this.APIURL + 'FindProjectById',
            type: 'GET',
            headers: _this.RequestHeaders,
            data: {
                username: username,
                type: 1,
                projid: projectid
            },
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function (project) {
                callback(project);
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

    this.getProjectFiles = function (username, projectid, callback) {
        $.ajax({
            url: _this.APIURL + 'GetProjectFiles',
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
            success: function (files) {
                callback(files);
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

    // Get the bim tree from BIM Files by AJAX
    this.getProjectBimTree = function(pid, onsuccess){
        $.ajax({
            url: _this.RESTAPIURL + 'Project/GetProjectBimTree',
            type: 'GET',
            headers: _this.RestRequestHeaders,
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
            url: _this.RESTAPIURL + 'Project/GetElementById',
            type: 'GET',
            headers: _this.RestRequestHeaders,
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
};



