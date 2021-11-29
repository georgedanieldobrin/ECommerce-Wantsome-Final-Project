let cartlist = localStorage.getItem('cartlist') ? JSON.parse(localStorage.getItem('cartlist')) : [];

let products = [];
let allProducts = [];
let total = 0;


initiateCartList()

function initiateCartList() {
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
        allProducts.push(product);
    })
    console.log(products);
    insertCart();
});
}

function insertCart() {
    products.forEach(cart => {
        createProductCart(cart, '.cart');
    })
    calculateTotal();
}


const emptyCart = document.querySelector(".empty-img");
if (cartlist.length === 0) {
    emptyCart.style.display = "block";
}


function createProductCart(product, queryName) {
    const container = document.querySelector(queryName);
    let grid = document.createElement("div");
    grid.classList.add("img-box");
    const child = container.appendChild(grid);
    child.innerHTML = `
        <div class=img-and-text>
        <img src="../${product.image1}" class="img-product" alt="img1" />
          <div class="text">
             <p class="product-brand">${product.brand}</p>
             <p class="product-name">${product.name}</p>
          </div>
        </div>
        <div class="item-counter">
          <button class="counter-btn decrement">-</button>
          <p class="item-count">1</p>
          <button class="counter-btn increment">+</button>
        </div>
        <p class="product-price">$${product.price}</p>
        <button class="delete-btn"><img class="delete-icon" src="../Pics/cancel.png" alt="close"></button>
        </div>
      `
    child.setAttribute("productid", product.id);
    child.addEventListener('click', handleClick);
  
}



function handleClick(event) {
    let productId;
    event.path.forEach(element => {
        if (element.classList) {
          element.classList.forEach(cls => {
            if (cls === 'img-box') {
              productId = element.getAttribute('productid');
            }
          })
        }
      })
      
      if ((event.target.localName === 'img' && event.target.className === 'delete-icon') || (event.target.localName === 'button' && event.target.className === 'delete-btn')) {
        cartlist.forEach((element,index) => {
            if(element == productId) {
                cartlist.splice(index, 1);
            }
        });
        if(cartlist.length === 0) {
            localStorage.removeItem('cartlist');
            emptyCart.style.display = "block";
        } else {
            localStorage.setItem('cartlist', JSON.stringify(cartlist));
        }
        refreshCartList();
      } else if(event.target.localName === 'button' && (event.target.className === 'counter-btn increment' || event.target.className === 'counter-btn decrement')) {
          let currentProductId;
          const type = event.target.className === 'counter-btn increment' ? 'increment' : 'decrement';
          allProducts.forEach((element) => {
            if(element.id == productId) {
                currentProductId = productId;
                const currentProductEl = document.querySelector(`[productId='${productId}']`);
                const currentCountEl = currentProductEl.querySelector('.item-count');
                let count = parseInt(currentCountEl.innerHTML);
                if(type === 'increment' || (type === 'decrement' && count > 1)) {
                    count = type === 'increment' ? count + 1 : count - 1;
                    currentCountEl.innerHTML = count;
                    const currentPriceEl = currentProductEl.querySelector('.product-price');
                    const price = element.price * count;
                    currentPriceEl.innerHTML = `$${price}`;
                    calculateTotal();
                }
            }
        });
      }

}

function refreshCartList() {
    const currentItems = document.querySelectorAll('.img-box');
    currentItems.forEach(item => {
        item.parentNode.removeChild(item);
    })

    products = [];
    allProducts.forEach(product => {
        cartlist.forEach(cart => {
            if(cart === product.id.toString()) {
                products.push(product);
            }
        })
    })
    insertCart();
}

function calculateTotal() {
    total = 0;
    const currentItems = document.querySelectorAll('.img-box .product-price');
    currentItems.forEach(item => {
        total += parseInt(item.innerHTML.split('$')[1]);
    })
    document.querySelector('.total').innerHTML = `$${total}`;
}
