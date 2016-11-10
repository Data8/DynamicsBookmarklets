(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    try {
        var etc = form.Xrm.Page.context.getQueryStringParameters().etc;
    } catch (e) {
    }
    form.Mscrm.RibbonActions.openEntityEditor(etc);
})();