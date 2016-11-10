(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", form.Xrm.Page.data.entity.getDataXml());
})();