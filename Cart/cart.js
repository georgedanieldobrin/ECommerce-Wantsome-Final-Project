let cartlist = localStorage.getItem('cartlist') ? JSON.parse(localStorage.getItem('cartlist')) : [];

let products = [];

fetch("../products.json")
.then(response => {
   return response.json();
})
.then(data => {
    data.items.forEach(product => {
        cartlist.forEach(cart => {
            if(cart === product.id.toString()) {
                products.push(product);
            }
        })
    })
    console.log(products);
    insertCart();
});

function insertCart() {
    products.forEach(cart => {
        createProductCart(cart, '.cart');
    })
}


const emptyCart = document.querySelector(".empty-img");
if (cartlist.length === 0) {
    emptyCart.style.display = "block";
}