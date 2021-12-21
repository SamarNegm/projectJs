class Product {
    name;
    image;
    description;

}


class Cart {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }


}