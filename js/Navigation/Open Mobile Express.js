(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    window.open(form.Xrm.Page.context.getClientUrl() + "/m");
})();