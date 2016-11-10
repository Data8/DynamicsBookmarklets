(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var ft = ["1 = CREATE", "2 = UPDATE", "3 = READ_ONLY", "4 = DISABLED", "5 = QUICK_CREATE", "6 = BULK_EDIT"];
    window.prompt('Copy to clipboard: Ctrl+C, Enter', ft[(form.Xrm.Page.ui.getFormType()) - 1]);
})();