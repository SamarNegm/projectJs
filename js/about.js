var mycart = JSON.parse(localStorage.getItem("cart"));
var productPadgeCount = document.getElementById("badgeNumber");

productPadgeCount.innerHTML = mycart.length;

var cartIcon = document.getElementById("badgecontainer");
cartIcon.addEventListener("click", function (e) {
    win = window.open("cart.html", '_blank');
    var crt = window.localStorage;
    crt.setItem("cart", JSON.stringify(cart.products));
    console.log(cart.products[0] + " ,,, " + localStorage.getItem("cart"));
})