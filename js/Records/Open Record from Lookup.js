(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var elem = form.document.activeElement;
    var id = elem.getAttribute("id");
    var guid = null;
    var type = null;
    if (elem.getAttribute("isInlineLookup") == "true") {
        guid = elem.getAttribute("oid");
        type = elem.getAttribute("otypename")
    } else if (id != null) {
        var pos = id.lastIndexOf("_");
        if (pos > -1) {
            var suffix = id.substring(pos + 1);
            if (["ledit", "lookupDiv", "i"].indexOf(suffix) > -1) {
                id = id.substring(0, pos)
            }
            id = id.replace("_i_ledit_multi", "").replace("_ledit_multi", "")
        }
        var control = form.Xrm.Page.getControl(id);
        if (control != null) {
            var field = control.getAttribute();
            if (field != null) {
                var value = field.getValue();
                if (value != null) {
                    var record = value[value.length - 1];
                    guid = record.id;
                    type = record.entityType
                }
            }
        }
    }
    if (guid != null && guid != "" && type != null && type != "") {
        var url = form.Xrm.Page.context.getClientUrl() + "/main.aspx?etn=" + type + "&id=" + guid + "&pagetype=entityrecord";
        window.open(url)
    } else {
        alert("Unable to open record. Make sure you're clicked into a lookup field with a value.")
    }
    void (0);
})();