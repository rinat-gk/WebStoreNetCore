var x = 0;
var s = "";

console.log("Hello My E-Store");

var theForm = document.getElementById("TheForm");
theForm.hidden = true;


var button = document.getElementById("BuyButton");
button.addEventListener("click", function () {
    console.log("Buying Item");
});

var ProductInfo = document.getElementsByClassName("product-props");
var listItems = ProductInfo.item[0].children;
