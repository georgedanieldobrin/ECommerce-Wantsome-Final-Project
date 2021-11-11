// const productImages = document.querySelectorAll(".product-images img");
// const productImageSlider = document.querySelector(".image-slider");


// let activeImageSlider = 0;

// productImages.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         productImages[activeImageSlider].classList.remove('active');
//         item.classList.add('active');
//         productImageSlider.style.backgroundImage = `url('${item.src}')`;
//         activeImageSlider = i;
//     })
// })

// const colorBtns = document.querySelectorAll('.phone-color');
// let checkedBtn = 0;

// colorBtns.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         colorBtns[checkedBtn].classList.remove('check');
//         item.classList.add('check');
//         checkedBtn = i;
//     })
// })

// if(!window.location.href.split('?')[1]) {
//     alert('not founsd');
// }

//MAPARE PRODUSE INDIVIDUALE START//

//const currentProductId = window.location.href.split('?')[1][[window.location.href.split('?')[1].length-1]];


const currentProductId = window.location.href.split('=')[1];

//let currentProduct;
let productsDet = [];

fetch("../products.json")
.then(response => {
   return response.json();
})
.then(data => {
    console.log(data)
    console.log(data.items);
    data.items.forEach(product => {
        if(product.id === parseInt(currentProductId)) {
            console.log(product.id);
            console.log(product)
            //currentProduct = product.id;
            productsDet.push(product);
            insertProductDetails();
        }
    })
});

// if(parseInt(currentProductId) != currentProduct) {
//     window.location.replace('../404/index.html');
// }


function insertProductDetails() {
    productsDet.forEach(prod => {
        createProductDetails(prod, '.product-details');
        // error404();
    })

}

// function error404() {
// let currentProduct = window.location.href.split('=')[1];
// const elem = document.querySelector('.product-details');
// console.log(elem);
// console.log(elem.getAttribute('productid'));
// console.log(elem);
// }



// console.log(currentProduct);


// if(elem.getAttribute('productid') != currentProduct) {
//     window.location.replace('../404/index.html');
// }
// }

// MAPARE PRODUSE INDIVIDUALE END//


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



