(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    form.Xrm.Page.ui.controls.forEach(function(c) {
        try {
            c.setVisible(true);
        } catch (e) {
        }
    });
})();