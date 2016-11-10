(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var url = form.Xrm.Page.context.getClientUrl();
    window.open(url + "/nga/main.htm?org=" + form.Xrm.Page.context.getOrgUniqueName() + "&server=" + url);
})();