function validateFileExt(e) {
    var i = !0;
    if (null != e) {
        var t = e.substr(e.lastIndexOf(".") + 1);
        switch (t) {
            case "jpg":
            case "pdf":
                i = !0;
                break;
            default:
                i = !1
        }
    }
    return i
}

function formatColor(e) {
    return e.id ? $('<span><span class="colorBox" style="background-color: ' + e.element.value + ';"></span> ' + e.text + "</span>") : e.text
}

function formatColorOption(e) {
    return e.id ? $("#color").find(":selected").val() == e.element.value ? null : formatColor(e) : e.text
}
$(document).ready(function() {
    $(".pageNumberInput").keypress(function(e) {
        if ((e.which && 13 == e.which || e.keyCode && 13 == e.keyCode) && (window.location.href = "?page=" + $(this).val() + "&search=" + $("#pageNumberText").val()), 8 != e.which && 0 != e.which && (e.which < 48 || e.which > 57)) return !1
    }), $(".pageNumberInput").bind("cut copy paste", function(e) {
        e.preventDefault()
    }), $(".pageNumberInputPR").keypress(function(e) {
        if ((e.which && 13 == e.which || e.keyCode && 13 == e.keyCode) && (window.location.href = "?page=" + $(this).val() + "&year=" + $("#currentYear").val()), 8 != e.which && 0 != e.which && (e.which < 48 || e.which > 57)) return !1
    }), $(".pageNumberInputPR").bind("cut copy paste", function(e) {
        e.preventDefault()
    }), $(".pageNumberInputJob").keypress(function(e) {
        if ((e.which && 13 == e.which || e.keyCode && 13 == e.keyCode) && (window.location.href = "?page=" + $(this).val()), 8 != e.which && 0 != e.which && (e.which < 48 || e.which > 57)) return !1
    }), $(".pageNumberInputJob").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(".formLink").on("click", function(e) {
    var i = $(this).attr("href"),
        t = $(this).attr("data-pageid");
    $.cookie("hdnProductPageID", t, {
        path: "/"
    }), window.open(i + "?returnurl=" + window.location.pathname, "_self", "", !0), e.preventDefault()
}), $("#btnReset").on("click", function(e) {
    $(":input").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")
}), $("#OtherCategoryList").hide(), $("#OtherCategory").hide(), $("#OtherProductService").hide(), $("#OtherProductServiceList").hide(), $("#Category").on("change", function() {
    "Other" == $(this).val() ? ($("#OtherCategory").show(), $("#OtherCategoryList").show()) : ($("#OtherCategory").hide(), $("#OtherCategoryList").hide())
}), $("#ProductService").on("change", function() {
    "Other" == $(this).val() ? ($("#OtherProductService").show(), $("#OtherProductServiceList").show()) : ($("#OtherProductService").hide(), $("#OtherProductServiceList").hide())
}), $("#DrawingsFileValidation").hide(), $("#TechnicalSpecificationsFileValidation").hide(), $("#TechnicalSpecificationsFileExtMsg").hide(), $("#DrawingsFileExtMsg").hide(), $("#frmSubmit").on("click", function(e) {
    if ($("#TechnicalSpecificationsFileExtMsgServer").hide(), $("#DrawingsFileExtMsgServer").hide(), $("#TechnicalSpecificationsFile").val()) {
        var i = $("#TechnicalSpecificationsFile").val(),
            t = validateFileExt(i);
        t ? $("#TechnicalSpecificationsFileExtMsg").hide() : $("#TechnicalSpecificationsFileExtMsg").show(), $("#TechnicalSpecificationsFileValidation").hide()
    } else $("#TechnicalSpecificationsFileValidation").show();
    if ($("#DrawingsFile").val()) {
        var i = $("#DrawingsFile").val(),
            t = validateFileExt(i);
        t ? $("#DrawingsFileExtMsg").hide() : $("#DrawingsFileExtMsg").show(), $("#DrawingsFileValidation").hide()
    } else $("#DrawingsFileValidation").show()
}), $("#customerEnquiryForm").on("submit", function(e) {
    if ($("#TechnicalSpecificationsFile").val() && $("#DrawingsFile").val()) {
        var i = !0;
        if ($("#DrawingsFile").val()) {
            var t = $("#DrawingsFile").val(),
                n = validateFileExt(t);
            n ? $("#DrawingsFileExtMsg").hide() : (i = !1, $("#DrawingsFileExtMsg").show())
        }
        if ($("#TechnicalSpecificationsFile").val()) {
            var t = $("#TechnicalSpecificationsFile").val(),
                n = validateFileExt(t);
            n ? $("#TechnicalSpecificationsFileExtMsg").hide() : (i = !1, $("#TechnicalSpecificationsFileExtMsg").show())
        }
        i || e.preventDefault()
    } else e.preventDefault()
}), $("#InterestedInValMsg").hide(), $("#snlcontactEnquiryForm").on("submit", function(e) {
    $("#snlcontactEnquiryForm input:checked").length > 0 ? $("#InterestedInValMsg").hide() : ($("#InterestedInValMsg").show(), e.preventDefault())
}), $(".ddlBusinessVerticals").change(function() {
    var e = $(this).val();
    "" == e ? $(".businessDescription").text("") : $(".businessDescription").text(e.split("|")[2])
});