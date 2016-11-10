(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var SID = window.prompt("Enter Solution ID");
    window.open(form.Xrm.Page.context.getClientUrl() + "/tools/dependency/dependencyviewdialog.aspx?objectid=" + SID + "&objecttype=7100&operationtype=dependenciesforuninstall");
})();