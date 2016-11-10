(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    try {
        var name = form.Xrm.Page.data.entity.getEntityName();
    } catch (e) {
    }
    var y = prompt('Type the schema name of the entity to create:', name ? name : 'account');
    if (y) {
        window.open(form.Xrm.Page.context.getClientUrl() + "/main.aspx?etn=" + y + "&pagetype=entityrecord");
    }
})();