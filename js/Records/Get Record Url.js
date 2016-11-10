(function() {
    var url = document.getElementById('crmContentPanel').getAttribute('src');
    if (url.indexOf('/read/page.aspx') == -1) {
        if (url.indexOf(Xrm.Page.context.getOrgUniqueName()) != -1) {
            window.prompt('Copy to clipboard: Ctrl+C, Enter', Xrm.Page.context.getClientUrl() + url.replace('/' + Xrm.Page.context.getOrgUniqueName(), ''));
        } else {
            window.prompt('Copy to clipboard: Ctrl+C, Enter', Xrm.Page.context.getClientUrl() + url);
        }
    } else {
        window.prompt('Copy to clipboard: Ctrl+C, Enter', window.location.href);
    }
})();