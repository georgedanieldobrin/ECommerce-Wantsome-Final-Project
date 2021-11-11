let products = [];

fetch("../products.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        products = data.items;
        insertProducts();
    });

function insertProducts() {
    products.forEach(product => {
        createProduct(product, '#productlist .item-grid');
    })
}


////////////filtrare dupa brand start

let option = document.querySelector('select');
option.addEventListener('change', function () {
    if (this.value == "Samsung") {

        let products = [];

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
                insertProducts();
            });

        function insertProducts() {
            products.forEach(product => {
                createProduct(product, '#productlist .item-grid');
            })
        }
    }

    if (this.value == "Apple") {

        let products = [];

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
                insertProducts();
            });

        function insertProducts() {
            products.forEach(product => {
                createProduct(product, '#productlist .item-grid');
            })
        }
    }

    if (this.value == "XIAOMI") {

        let products = [];

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
                insertProducts();
            });

        function insertProducts() {
            products.forEach(product => {
                createProduct(product, '#productlist .item-grid');
            })
        }
    }

    if (this.value == "All products") {
        let products = [];

        fetch("../products.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                products = data.items;
                insertProducts();
            });

        function insertProducts() {
            products.forEach(product => {
                createProduct(product, '#productlist .item-grid');
            })
        }
    }
}, false);