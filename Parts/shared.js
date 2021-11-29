function createProduct(product, queryName) {
  const container = document.querySelector(queryName);
  let grid = document.createElement("div");
  grid.classList.add("item")
  const child = container.appendChild(grid);
  child.innerHTML = `
        <div class="item-img" >
        <img src="../${product.image1}" alt="product image">
        <div class="item-action">
          <a class="buy" >
            <span>
              <i class="fas fa-cart-plus"></i>
            </span>
          </a>
          <a class="wishlist">
            <span >
              <i class="fas fa-heart"></i>
            </span>
          </a>
        </div>
      </div>

      <div class="item-details">
        <p class="price">$ ${product.price}</p>
        <p class="name">${product.brand}</p>
        <p class="description">${product.name}</p>
      </div>
      `
  child.setAttribute("productid", product.id);
  child.addEventListener('click', handleClick);

}



function addToWishList(productId) {
  let wishlist = [];
  if (localStorage.getItem('wishlist')) {
    wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }
  let exists = false;
  wishlist.forEach(id => {
    if (id === productId) {
      exists = true;
    }
  })
  if (exists === false) {
    wishlist.push(productId);
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function addToCart(productId) {
  let cartList = [];
  if (localStorage.getItem('cartlist')) {
    cartList = JSON.parse(localStorage.getItem('cartlist'));
  }
  let exists = false;
  cartList.forEach(id => {
    if (id === productId) {
      exists = true;
    }
  })
  if (exists === false) {
    cartList.push(productId);
  }
  localStorage.setItem('cartlist', JSON.stringify(cartList));
}

function handleClick(event) {
  let productId;
  event.path.forEach(element => {
    if (element.classList) {
      element.classList.forEach(cls => {
        if (cls === 'item') {
          productId = element.getAttribute('productid');
        }
      })
    }
  })
  if (event.target.localName === 'img') {
    window.location.replace(`/Product_Details/index.html?id=${productId}`);
  } else if (event.target.localName === 'a') {
    if (event.target.classList[0] === 'wishlist') {
      addToWishList(productId);
    } else if (event.target.classList[0] === 'buy') {
      addToCart(productId);
    }
  } else if (event.target.localName === 'i') {
    if (event.target.classList[1] === 'fa-heart') {
      addToWishList(productId);
    } else if (event.target.classList[1] === 'fa-cart-plus') {
      addToCart(productId);
    }
  }
}



function createProductDetails(currentItm, queryName) {
  const container = document.querySelector(queryName);
  container.innerHTML = `
  <div class="image-slider" id="img-sld">
  <div class="product-images">
      <img src="../${currentItm.image1}" class="active" alt="img1" />
      <img src="../${currentItm.image2}" alt="img2" />
      <img src="../${currentItm.image3}" alt="img3" />
      <img src="../${currentItm.image4}" alt="img4" />
  </div>
</div>

<div class="details">
  <h1 class="product-brand">${currentItm.brand}</h1>
  <p class="product-name">${currentItm.name} 12</p>
  <p>Price </p><span class="product-price">$ ${currentItm.price}</span>
  
  <p class="product-color">Select phone color</p>

  <input type="radio" name="color" value="b" checked hidden id="black">
  <label for="black" class="phone-color check"></label>
  <input type="radio" name="color" value="w" hidden id="blue">
  <label for="blue" class="phone-color"></label>
  <input type="radio" name="color" value="y" hidden id="yellow">
  <label for="yellow" class="phone-color"></label>
  <input type="radio" name="color" value="g" hidden id="gray">
  <label for="gray" class="phone-color"></label>
  <section>
  <button class="btn cart-btn">Add to cart</button>
  <button class="btn wish-btn">Add to wishlist</button>
  </section>

  <section class="more-details">
  <p class="details">Product details</p>
  <table>
      <thead>
        <tr>
          <th>Display</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>Super Retina XDR OLED</td>
        
        </tr>
        <tr>
          <td>Size</td>
          <td>6.1 inches, 90.2 cm2</td>
        </tr>
        <tr>
          <td>Resolution</td>
          <td>1170 x 2532 pixels</td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>Platform</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OS</td>
          <td>${currentItm.OS}</td>
        </tr>
        <tr>
          <td>Chipset</td>
          <td>${currentItm.Chipset}</td>
        </tr>
        <tr>
          <td>CPU</td>
          <td>Hexa-core</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
    `
  document.getElementById('img-sld').style.backgroundImage = `url('../${currentItm.image1}')`;
  container.setAttribute("productid", currentItm.id);


  const productImages = document.querySelectorAll(".product-images img");
  const productImageSlider = document.querySelector(".image-slider");


  let activeImageSlider = 0;

  productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
      productImages[activeImageSlider].classList.remove('active');
      item.classList.add('active');
      productImageSlider.style.backgroundImage = `url('${item.src}')`;
      activeImageSlider = i;
    })
  })

  const colorBtns = document.querySelectorAll('.phone-color');
  let checkedBtn = 0;

  colorBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
      colorBtns[checkedBtn].classList.remove('check');
      item.classList.add('check');
      checkedBtn = i;
    })
  })



  let cartBtn = document.querySelector('.cart-btn');
  cartBtn.addEventListener("click", () => {
    addToCart(JSON.stringify(currentItm.id));
  });


  let wishBtn = document.querySelector('.wish-btn');
  wishBtn.addEventListener("click", () => {
    addToWishList(JSON.stringify(currentItm.id));
  });

}