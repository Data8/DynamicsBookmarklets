(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    form.Xrm.Utility.openWebResource("msdyn_/RecordWall.htm");
})();