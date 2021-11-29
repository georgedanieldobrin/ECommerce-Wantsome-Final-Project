let products = [];

fetch("../products.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        products = data.items;
        products.forEach(product => {
            createProduct(product, '#productlist .item-grid');
        })
    });

let sortType = 'default';
let sortBrand = 'default';


const option = document.querySelector('.brand-sort');
option.addEventListener('change', function () {
        sortBrand = this.value;
        if (this.value == "Samsung") {
        products = [];
        fetch("../products.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 20; i++) {
                    if (data.items[i].brand == "Samsung") {
                        products.push(data.items[i]);
                    }
                }
                
                addProducts();
            });
    } else if (this.value == "Apple") {
        products = [];
        fetch("../products.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 20; i++) {
                    if (data.items[i].brand == "Apple") {
                        products.push(data.items[i]);

                    }
                }
                addProducts();
            });
    } else if (this.value == "XIAOMI") {
        products = [];
        fetch("../products.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 20; i++) {
                    if (data.items[i].brand == "XIAOMI") {
                        products.push(data.items[i]);
                    }
                }
                addProducts();
            });
    } else if (this.value == "all") {
        products = [];
        fetch("../products.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                products = data.items;
                addProducts();
            });
    }
}, false);



const priceSort = document.querySelector('.price-sort');
priceSort.addEventListener('change', function () {
    sortType = this.value;
    addProducts();
}, false);

function addProducts() {
    const currentItems = document.querySelectorAll('.item');
    currentItems.forEach(item => {
        item.parentNode.removeChild(item);
    })
    if(sortType === 'default') {
        products = [];
        fetch("../products.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (let i = 0; i < 20; i++) {
                    console.log(data.items[i].brand == sortBrand);
                    if (sortBrand !== 'all' && data.items[i].brand == sortBrand) {
                        products.push(data.items[i]);
                    } else if(sortBrand === 'all') {
                        products.push(data.items[i]);
                    }
                }
                products.forEach(product => {
                    createProduct(product, '#productlist .item-grid');
                })
            });
    } else if(sortType === 'low') {
        products.sort(function(a, b){return a.price - b.price})
        products.forEach(product => {
            createProduct(product, '#productlist .item-grid');
        })
    } else if(sortType === 'high') {
        products.sort(function(a, b){return b.price - a.price})
        products.forEach(product => {
            createProduct(product, '#productlist .item-grid');
        })
    }
}