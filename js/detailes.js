var mycart = JSON.parse(localStorage.getItem("cart"));
var productPadgeCount = document.getElementById("badgeNumber");
var product = JSON.parse(localStorage.getItem("product"));
document.getElementById("productName").innerHTML = product.name;
document.getElementById("ProductImage").setAttribute("src", product.image);
document.getElementById("productDescription").innerHTML = product.description;
productPadgeCount.innerHTML = mycart.length;
var cartIcon = document.getElementById("badgecontainer");
cartIcon.addEventListener("click", function (e) {
    win = window.open("cart.html", '_blank');
    var crt = window.localStorage;
    crt.setItem("cart", JSON.stringify(cart.products));
    console.log(cart.products[0] + " ,,, " + localStorage.getItem("cart"));
})