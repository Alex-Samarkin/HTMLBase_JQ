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

$(document).ready(function () {
    $("#pk2").click(function () {
        $("#rpk1").hide();
        $("#rpk2").hide();
        $("#rpk3").hide();
        $("#rpk2").slideToggle();
    });
});

$(document).ready(function () {
    $("#pk3").click(function () {
        $("#rpk1").hide();
        $("#rpk2").hide();
        $("#rpk3").hide();
        $("#rpk3").slideToggle();
    });
});