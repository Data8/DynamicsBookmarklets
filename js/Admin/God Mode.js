(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    form.Xrm.Page.ui.tabs.forEach(function(a) {
        try {
            a.setVisible(true);
            a.setDisplayState("expanded");
            a.setLabel(a.getName());
            a.sections.forEach(function(b) {
                try {
                    b.setVisible(true);
                    b.setLabel(a.getName());
                } catch (e) {
                }
            })
        } catch (e) {
        }
    });
    form.Xrm.Page.data.entity.attributes.forEach(function(d) {
        try {
            d.setRequiredLevel("none");
        } catch (e) {
        }
    });
    form.Xrm.Page.ui.controls.forEach(function(c) {
        try {
            c.setVisible(true);
            c.setLabel(c.getName());
            c.setDisabled(false);
            c.clearNotification();
        } catch (e) {
        }
    });
})();