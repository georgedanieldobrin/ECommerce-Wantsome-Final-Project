const currentProductId = window.location.href.split('=')[1];

let productsDet = [];

fetch("../products.json")
.then(response => {
   return response.json();
})
.then(data => {
    let found = false;
    data.items.forEach(product => {
        if(product.id === parseInt(currentProductId)) {
            console.log(product.id);
            console.log(product)
            productsDet.push(product);
            found = true;
            insertProductDetails();
        }
    })
    if(found === false) {
        window.location.replace('../404/index.html');
    }
});


function insertProductDetails() {
    productsDet.forEach(prod => {
        createProductDetails(prod, '.product-details');
    })

}



function addWishList() {
    addToWishList(productId);
}

function addCart() {
    addToCart(productId);
}


let arrivals = [];

fetch("../products.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 4; i < 8; i++) {
            arrivals.push(data.items[i]);
        }
        createArrivals();
    });

function createArrivals() {
    arrivals.forEach((arrival) => {
        createProduct(arrival, '#newarrivals .item-grid');
    })
}



