let wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];

let products = [];
let allProducts = [];

initiateWishList();

function initiateWishList() {
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
        allProducts.push(product);
    })
    insertWish();
});
}

function insertWish() {
    products.forEach(wish => {
        createProductWish(wish, '.cart');
    })
}

const emptyWish = document.querySelector(".empty-img");
if (wishlist.length === 0) {
    emptyWish.style.display = "block";
}



function createProductWish(product, queryName) {
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
            wishlist.forEach((element,index) => {
                if(element == productId) {
                    wishlist.splice(index, 1);
                }
            });
            if(wishlist.length === 0) {
                localStorage.removeItem('wishlist');
                emptyWish.style.display = "block";
            } else {
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
            }
            refreshWishList()
          }
    }

    function refreshWishList() {
        const currentItems = document.querySelectorAll('.img-box');
        currentItems.forEach(item => {
            item.parentNode.removeChild(item);
        })

        products = [];
        allProducts.forEach(product => {
            wishlist.forEach(wish => {
                if(wish === product.id.toString()) {
                    products.push(product);
                }
            })
        })
        insertWish();
    }
  


