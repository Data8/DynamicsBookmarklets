(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var name = form.Xrm.Page.data.entity.getEntityName();
    var typeCode = form.Xrm.Page.context.getQueryStringParameters().etc;
    if (typeCode) {
        window.prompt('Copy to clipboard: Ctrl+C, Enter', typeCode.toString() + " = " + name)
    }
})();