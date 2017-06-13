function ExampleDatabaseQueryControl(engine)
{
	var control = $('#queryDataBaseDiv');

	var _this = this;
	this.resultList = null;
	this.toggle = function(){
		var visible = !control.is(":hidden");
		if(visible){
			control.hide();
		}
    	else{
			control.show();
		}
	};

	function showResult(result, text) {

		
		_this.resultList = result;

        var summarydiv = $('#bv_divQueryExampleSearchSummary');

        summarydiv.html('为您搜索到 '+result.total+' 项结果');

        var container = $('#bv_divQueryExampleSearchResult');
        container.html('');

        var template = '<tr>\
                            <td>{0}</td>\
                            <td>{1}</td>\
                            <td>{2}</td>\
                            <td>{3}</td>\
                            <td>{4}</td>\
                            <td>{5}</td>\
                        </tr>';

        
        var len = result.list.length;
        if (len == 0)
            return;

        for (var i = 0; i < len; i++) {
            var item = result.list[i];
            var key = item.Element.GlobalId;
            var name = item.Element.Name;
            var location = item.BuildingStorey;
            var typename = item.Element.IfcType.replace(/Ifc/, '');

            var text = template.format((i+1)+'',key, name, typename, location, item.HitMessage);

            container.append(text);
        }
    }

	$('#bv_btnQueryExampleSearch').click(function(){
		var text = $('#bv_QueryExampleSearchtext').val();

        engine.searchElementsBySql(text, showResult);
	});

	$('#bv_btnQueryExampleSetHightliht').click(function(){

		if(_this.resultList){
			var len = _this.resultList.list.length;
	        for (var i = 0; i < len; i++) {
	            var item = _this.resultList.list[i];
	            var key = item.Element.GlobalId;

	           	engine.changeElementRGBA(key, [0.0, 1.0, 1.0, 1.0]);
	        }
		}
        
	});

	$('#bv_btnQueryExampleRestorColor').click(function(){

		if(_this.resultList){
			var len = _this.resultList.list.length;
	        for (var i = 0; i < len; i++) {
	            var item = _this.resultList.list[i];
	            var key = item.Element.GlobalId;

	           	engine.resetElementRGBA(key);
	        }
		}
        
	});
}