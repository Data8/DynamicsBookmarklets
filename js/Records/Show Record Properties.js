(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var id = form.Xrm.Page.data.entity.getId();
    var etc = form.Xrm.Page.context.getQueryStringParameters().etc;
    form.Mscrm.RibbonActions.openFormProperties(id, etc);
})();