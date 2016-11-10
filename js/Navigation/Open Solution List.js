(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    window.open(form.Xrm.Page.context.getClientUrl() + "/tools/Solution/home_solution.aspx?etc=7100&sitemappath=Settings%7cCustomizations%7cnav_solution");
})();