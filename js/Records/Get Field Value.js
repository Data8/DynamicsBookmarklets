(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var v, f = window.prompt("Enter field name");
    var a = form.Xrm.Page.getAttribute(f);
    switch (a.getAttributeType()) {
    case "optionset":
    case "boolean":
        v = a.getSelectedOption().text;
        break;
    case "lookup":
        v = a.getValue()[0].name;
        break;
    default:
        v = a.getValue();
        break;
    }
    window.prompt('Copy to clipboard: Ctrl+C, Enter', v);
})();