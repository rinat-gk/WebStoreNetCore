$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("Hello My E-Store");



    var theForm = $("#TheForm");
    theForm.hidden = true;


    var button = $("#BuyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var ProductInfo = $(".product-props li");
    ProductInfo.on("click", function () {
        console.log("You clicked on" + $(this).text());
    });

    var $loginToogle = $("#loginToogle");
    var $popupForm = $(".popup-form");

    $loginToogle.on("click", function () {
        $popupForm.toggle(1000);
    });




});