var mycart = JSON.parse(localStorage.getItem("cart"));
var productPadgeCount = document.getElementById("badgeNumber");

productPadgeCount.innerHTML = mycart.length;
for (let i = 0; i < mycart.length; i++) {
    var cartDiv = document.getElementById("userCart");
    var productDetailes = document.createElement("div");
    productDetailes.innerHTML = "  <div class='cartItem'> <div class='productCar'>  <img src=" + mycart[i].image + "> </div>  <div class='productDetailes'><div> <h2>" + mycart[i].category + "</h2>       </div>   <div class='description'> " + mycart[i].description + " </div>     <div>  <label>" + mycart[i].price + " $ </label>  </div>  </div></div>";
    cartDiv.appendChild(productDetailes);

}
var cartIcon = document.getElementById("badgecontainer");
cartIcon.addEventListener("click", function (e) {
    win = window.open("cart.html", '_self');
    var crt = window.localStorage;
    crt.setItem("cart", JSON.stringify(cart.products));
    console.log(cart.products[0] + " ,,, " + localStorage.getItem("cart"));
})