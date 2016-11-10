(function() {
    var form = $("iframe").filter(function() { return $(this).css("visibility") == "visible" })[0].contentWindow;
    var orgUrl = form.Xrm.Page.context.getClientUrl();
    var users;
    $.ajax({
        type: "GET", contentType: "application/json; charset=utf-8", datatype: "json", url: Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/SystemUserSet?$filter=AccessMode/Value eq 0 and IsDisabled eq false", beforeSend: function(XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); }, async: false,
        success: function(data, textStatus, xhr) {
            var results = data.d.results;
            window.prompt('Copy to clipboard: Ctrl+C, Enter', "Unique Name: " + form.Xrm.Page.context.getOrgUniqueName() + ", URL: " + orgUrl + ", " + results.length + " active user");
        },
        error: function(xhr, textStatus, errorThrown) { alert(textStatus + " " + errorThrown); }
    });
})();