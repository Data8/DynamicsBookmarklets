(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var message = "The following fields are dirty: \n";
    form.Xrm.Page.data.entity.attributes.forEach(function(attribute, index) {
        if (attribute.getIsDirty() == true) {
            message += "\u2219 " + attribute.getName() + "\n";
        }
    });
    alert(message);
})();