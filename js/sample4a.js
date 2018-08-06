$(document).ready(function () {
    $("#btn1").click(function () {
        $("#jmb1").toggle();
    });
    $("#jmb1").hide();
});

$(document).ready(function () {
    $("#pk1").click(function () {
        $("#rpk1").hide();
        $("#rpk2").hide();
        $("#rpk3").hide();
        $("#rpk1").slideToggle();
    });
});