
BIMVIZ.UI.DefaultRevitDomainControl = function(name, iconClass){
	BIMVIZ.UI.DefaultControl.call(this, name, iconClass);
};

BIMVIZ.UI.DefaultRevitDomainControl.prototype = Object.create(BIMVIZ.UI.DefaultControl.prototype);
BIMVIZ.UI.DefaultRevitDomainControl.constructor = BIMVIZ.UI.DefaultRevitDomainControl;


Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        var val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});
};


BIMVIZ.UI.DefaultRevitDomainControl.prototype.onProjectLoaded = function(project){
    var buttonDiv = '<div class="border-bottom-1 padding-20" class="padding-20 border-bottom-1" style="width:100%;height:70px;background-color:rgba(0, 0, 0, 0.7);">\
                <div class="pull-left">\
                    <a class="btn" id="bv_domain_check_all"><i class="fa fa-check-square-o"></i> 全选</a>\
                    <a class="btn" id="bv_domain_uncheck_all"><i class="fa fa-square-o"></i> 清空</a>\
                    <a class="btn" id="bv_domain_anticheck"><i class="fa fa-clone"></i> 反选</a>\
                </div>\
            </div>\
            <div class="padding-20 nopadding-top">\
                <div id="bv_revitDomainTree"></div>\
            </div>';
    this.parentDiv.append(buttonDiv);
    this.parentDiv.addClass("nopadding-left nopadding-right").removeClass("padding-20");


    var sourceTrees = project.sourcetree;
    var elementDict = project.bimScene.ElementDict;
    var elements = new Array();
    if (sourceTrees != null && sourceTrees.length > 0) {
        for(var nPrj =0; nPrj < sourceTrees.length; nPrj++) {
            var project = sourceTrees[nPrj];
            for (var nCate =0; nCate < project.Children.length; nCate++) {
                var category = project.Children[nCate];
                if (category.TypeName != 'Category')
                    break;

                for (var nFamily=0; nFamily < category.Children.length; nFamily++) {
                    var family = category.Children[nFamily];
                    for (var nType =0; nType < family.Children.length; nType++) {
                        var familyType = family.Children[nType];for (var nEle =0; nEle < familyType.Children.length; nEle++)
                            {
                                var element = elementDict[familyType.Children[nEle].Id];
                                if (element) {
                                    element.Category = category.Name;
                                    element.Family = family.Name;
                                    element.FamilyType = familyType.Name;
                                    elements.push(element);
                                }
                            }
                        }
                    }
                }
            }
        }

        var treecontainer = $('#bv_revitDomainTree');

        // 构件数组
        var typeElements=[];

        var groups = elements.groupBy('Category');
        for(var key in groups)
        {
            var group = groups[key];
            typeElements.push({key:key, elements:group});
            var template = '\
                     <div class="border-bottom-1 bv_domainitem" rel="'+key+'" style="padding:10px 10px;">\
                                <div class="row padding-0">\
                                    <div class="col-md-9 col-sm-9 col-xs-9 padding-0" style="width:300px;">\
                                        <div style="float:left;padding-top:5px;">\
                                            <div class="list-item-font">'+key+'</div>\
                                            <div class="list-item-fontsmall">构件数：'+group.length+'</div>\
                                        </div>\
                                        <div style="float:right;padding-top:10px;">\
                                            <label class="switch switch-primary switch-round">\
                                                <input type="checkbox" class="bv_domaincheckbox" checked="" style="width:30px;">\
                                                <span class="switch-label" data-on="" data-off="">\</span>\
                                            </label>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                         ';
            treecontainer.append(template);
        };

        var scope = this;

        // 构件显示/隐藏
        function elementsShowHidde(obj,type,visible){
            for(var i=0;i<obj.length;i++){
                if(obj[i].key==type){
                    for(var j=0;j<obj[i].elements.length;j++){
                        scope.engine.setElementVisible(obj[i].elements[j].Id,visible);
                    }
                }
            }
        }

    $(".bv_domaincheckbox").change(function () {
            var type = $(this).parents('.bv_domainitem').attr("rel");
            var ch = $(this).prop("checked");
            elementsShowHidde(typeElements,type,ch);
        });

        $('#bv_domain_check_all').click(function () {
            $(".bv_domaincheckbox").each(function(){
                var type = $(this).parents('.bv_domainitem').attr("rel");
                $(this).prop("checked", true);
                elementsShowHidde(typeElements,type,true);
            });
        });

    $('#bv_domain_uncheck_all').click(function () {
        $(".bv_domaincheckbox").each(function(){
            var type = $(this).parents('.bv_domainitem').attr("rel");
            $(this).prop("checked", false);
            elementsShowHidde(typeElements,type,false);
        });
    });

    $('#bv_domain_anticheck').click(function () {
        $(".bv_domaincheckbox").each(function(){
            var type = $(this).parents('.bv_domainitem').attr("rel");
            var ch = !$(this).prop("checked");
            $(this).prop("checked", ch);
            elementsShowHidde(typeElements,type,ch);
        });
    });
};