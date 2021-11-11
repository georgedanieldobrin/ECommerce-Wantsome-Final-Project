let wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];

let products = [];

fetch("../products.json")
.then(response => {
   return response.json();
})
.then(data => {
    data.items.forEach(product => {
        wishlist.forEach(wish => {
            if(wish === product.id.toString()) {
                products.push(product);
            }
        })
    })
    console.log(products);
    insertWish();
});

function insertWish() {
    products.forEach(wish => {
        createProductWish(wish, '.cart');
    })
}

// const btn = document.querySelector('.delete-btn');
// console.log(btn);

const emptyWish = document.querySelector(".empty-img");

if (wishlist.length === 0) {
    emptyWish.style.display = "block";
}


