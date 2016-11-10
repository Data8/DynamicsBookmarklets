(function() {
    var osa = "";
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    form.Xrm.Page.ui.controls.forEach(function(c, i) {
        if (c.getControlType() == "optionset") {
            var osv = "Name: " + c.getName() + "";
            frames[0].$("#" + c.getName() + "_i").find("option").first().nextAll().each(function() { osv += "Value: " + $(this).attr("value") + " - Text: " + $(this).attr("title") + ""; });
            osa += "" + osv + "";
        }
    });
    (window.open("#", "#").document.open()).write("" + osa + "");
})();