const homeContainers = document.querySelector('.homecarousel');
const nxtBtn = document.querySelector('.right');
const preBtn = document.querySelector('.left');

let discounts = [];
let arrivals = [];

fetch("../products.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < 4; i++) {
            discounts.push(data.items[i]);
        }
        for (let i = 4; i < 8; i++) {
            arrivals.push(data.items[i]);
        }
        createDiscounts();
        createArrivals();
    });

function createDiscounts() {
    discounts.forEach((discount) => {
        createProduct(discount, '#discounts .item-grid');
    })
}

function createArrivals() {
    arrivals.forEach((arrival) => {
        createProduct(arrival, '#newarrivals .item-grid');
    })
}


var sectionIndex = 0;

preBtn.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    homeContainers.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
});

nxtBtn.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    homeContainers.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
});

