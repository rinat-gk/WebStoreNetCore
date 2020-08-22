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
})
