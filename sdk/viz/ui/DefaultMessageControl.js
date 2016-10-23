BIMVIZ.UI.DefaultMessageControl = function(bimEngine, containerDiv) {

    function onProjectLoaded(evt) {
        var name = evt.name;
        var data = evt.args;

        $('#bv_div_progress').show();
    }


    function onDataServerConnected(evt) {
        $('#bv_div_loadmessages').html('<div>Connected to server.</div>');
    }

    function onLoadProgress(evt) {
        var data = evt.args;
        if (data.current == data.total) {
            $('#bv_div_loadmessages').hide();
            $('#bv_div_debugMessage').hide();
            $('#bv_div_progress').hide();
        }
        else {
            var percent = (data.current * 100 / data.total).toFixed(0) + "%";
            $('#bv_div_loadmessages').html('<div>Load Progress: ' + percent + '</div>');

            var bar = 250;
            bar = Math.floor(bar * data.current / data.total);
            $("#bv_div_bar").css("width", bar + "px");
        }

    }

    function onShowDebugInfo(evt) {
        var txt = evt.args;
        $('#bv_div_debugMessage').html(txt);
    }

    var html = '<div style="position:absolute;right:10px; top:10px;z-index:99999;">\
            <div id="bv_div_loadmessages">\
                <div>Loading...</div>\
            </div>\
            <div id="bv_div_debugMessage">\
            </div>\
        </div>\
        <div id="bv_div_progress" class="bimviz_progress_div">\
            <span id="bv_div_message">Loading ...</span>\
            <center>\
                <div id="bv_div_progressbar" class="bimviz_shadow bimviz_progressbar_div">\
                    <div id="bv_div_bar" class="bimviz_shadow bimviz_progressbar_step"></div>\
                </div>\
            </center>\
        </div>';

    $('#' + containerDiv).html(html);

    bimEngine.addListener(BIMVIZ.EVENT.ProjectOverviewLoaded, onProjectLoaded);
    bimEngine.addListener(BIMVIZ.EVENT.DataServerConnected, onDataServerConnected);
    bimEngine.addListener(BIMVIZ.EVENT.OnShowDebugInfo, onShowDebugInfo);
    bimEngine.addListener(BIMVIZ.EVENT.OnLoadProgressStep, onLoadProgress);
}