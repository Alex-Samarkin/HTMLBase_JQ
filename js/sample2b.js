$(document).ready(function () {
    $("#btn1_2").click(function () {
        $("article").hide();
    });
    $("#btn1_1").click(function () {
        $("article").show();
    });
    $("#btn1").click(function () {
        $("article").toggle();
    });
    $("#btn3").click(function () {
        $("section").toggle();
    });
});