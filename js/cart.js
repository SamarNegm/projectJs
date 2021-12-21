var mycart = JSON.parse(localStorage.getItem("cart"));
var productPadgeCount = document.getElementById("badgeNumber");
var cnt = JSON.parse(localStorage.getItem("count"));
productPadgeCount.innerHTML = cnt;
for (let i = 0; i < mycart.length; i++) {
    var cartDiv = document.getElementById("userCart");
    var productDetailes = document.createElement("div");
    productDetailes.innerHTML = "  <div class='cartItem'> <div class='productCar'>  <img src=" + mycart[i].image + "> </div>  <div class='productDetailes'><div> <h2>" + mycart[i].category + "</h2>       </div>   <div class='description'> " + mycart[i].description + " </div>     <div>  <label>" + mycart[i].price + " $ </label>  </div>  </div></div>";
    cartDiv.appendChild(productDetailes);

}