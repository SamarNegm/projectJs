
var product = JSON.parse(localStorage.getItem("product"));
document.getElementById("productName").innerHTML = product.name;
document.getElementById("ProductImage").setAttribute("src", product.image);
document.getElementById("productDescription").innerHTML = product.description;