(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    form.Mscrm.CommandBarActions.activate(form.Xrm.Page.data.entity.getId(), form.Xrm.Page.data.entity.getEntityName());
})();