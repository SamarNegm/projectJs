class Product {
    id;
    name;
    image;
    description;
    category;
    price;
    constructor(id, name, image, description, category, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.category = category;
        this.price = price;

    }

}
var myProducts = [];

function findProductById(id) {
    for (var i = 0; i < myProducts.length; i++) {
        if (myProducts[i].id == id)
            return myProducts[i];
    }
}

class Cart {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }


}
var up = document.getElementById("up");
up.addEventListener("click", function (e) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

})
var cupPages = ["/html/c1.html", "/html/c2.html", "/html/c3.html", "/html/c4.html"]
var cups = ["/img/cups/c1.png", "/img/cups/c2.png", "/img/cups/c3.png", "/img/cups/c4.png"];
var dishes = ["/img/diches/d1.png", "/img/diches/d2.png", "/img/diches/d3.png", "/img/diches/d4.png"];
var spoons = ["/img/spoons/s1.png", "/img/spoons/s2.png", "/img/spoons/s3.png", "/img/spoons/s4.png"];
var kattels = ["/img/kattels/k1.png", "/img/kattels/k2.png", "/img/kattels/k3.png", "/img/kattels/k4.png"];
var r = 1;
var productPadgeCount = document.getElementById("badgeNumber");
var cnt = 0;
var win;
var cart = new Cart();
for (var i = 0; i < dishes.length; i++) {
    var productsTable = document.getElementById("productsTable");
    var row = productsTable.insertRow(r++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cid = 'c' + i;
    var dId = "d" + i;
    var kId = "k" + i;
    var sId = "s" + i;
    var productCupCartIcon = 'pc' + i;
    var productDishesCartIcon = 'pd' + i;
    var productSpoonsCartIcon = 'pk' + i;
    var productKttelCartIcon = 'ps' + i;
    cell1.innerHTML = "<div class='productContainer'><div class'product' id=" + cid + " > <img class='productimg' src=" + cups[i] + " ></div> <i class='fa fa-shopping-cart' id=" + productCupCartIcon + "></i></div>";
    cell2.innerHTML = "<div class='productContainer'><div class'product  id=" + dId + "> <img class='productimg' src=" + dishes[i] + "  ></div><i class='fa fa-shopping-cart'  id=" + productDishesCartIcon + "></i></div>";;
    cell3.innerHTML = "<div class='productContainer'><div class'product  id=" + sId + "> <img class='productimg' src=" + spoons[i] + "  ></div><i class='fa fa-shopping-cart'  id=" + productSpoonsCartIcon + "></i></div>";;
    cell4.innerHTML = "<div class='productContainer'><div class'product  id=" + kId + "> <img class='productimg' src=" + kattels[i] + "  ></div><i class='fa fa-shopping-cart'  id=" + productKttelCartIcon + "></i></div>";;

    myProducts.push(new Product(sId, "Spoon", spoons[i], 'Made in Chaina', "spoons", 200));
    myProducts.push(new Product(cid, "Cup", cups[i], "Made in Chaina", "cups", 400));
    myProducts.push(new Product(dId, "dishes", dishes[i], "Made in Chaina", "dishes", 1000));
    myProducts.push(new Product(kId, "kattels", kattels[i], "Made in Chaina", "kattles", 500))



    var cartIconCup = document.getElementById(productCupCartIcon);
    cartIconCup.addEventListener("click", function (e) {
        addProductToCart(e);
    })



    var cartIconDish = document.getElementById(productDishesCartIcon);
    cartIconDish.addEventListener("click", function (e) {
        addProductToCart(e);
    })



    var cartIconKttle = document.getElementById(productKttelCartIcon);
    cartIconKttle.addEventListener("click", function (e) {
        addProductToCart(e);
    });



    var cartIconSpoon = document.getElementById(productSpoonsCartIcon);
    cartIconSpoon.addEventListener("click", function (e) {
        addProductToCart(e);
    })


    function addProductToCart(e) {
        cnt++;
        cart.addProduct(findProductById((e.target.id).substr(1)));
        productPadgeCount.innerHTML = cnt;
        var crt = window.localStorage;
        crt.setItem("count", cnt);
    }




    var c = document.getElementById(cid);
    c.addEventListener("click", function (e) {
        sendProduct(e);
    })

    var d = document.getElementById(dId);
    d.addEventListener("click", function (e) {
        sendProduct(e);

    })


    var kt = document.getElementById(kId);
    kt.addEventListener("click", function (e) {
        sendProduct(e);

    })




    var sp = document.getElementById(sId);
    sp.addEventListener("click", function (e) {
        sendProduct(e);

    })


}
function sendProduct(e) {
    var product = findProductById(e.target.id);
    var product2 = findProductById(e.target.parentElement.id);
    console.log(product + " sendproduct " + product2);
    win = window.open("detailes.html", '_blank');
    myStorage = window.localStorage;
    myStorage.setItem("product", product == undefined ? JSON.stringify(product2) : JSON.stringify(product));

}
var cartIcon = document.getElementById("badgecontainer");
cartIcon.addEventListener("click", function (e) {
    win = window.open("cart.html", '_blank');
    var crt = window.localStorage;
    crt.setItem("cart", JSON.stringify(cart.products));
    console.log(cart.products[0] + " ,,, " + localStorage.getItem("cart"));
})