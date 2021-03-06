const createNav = () => {
    let nav = document.querySelector('.header');

    nav.innerHTML = `
    <a href="../Main_Page/index.html" class="logo"><img src="../Pics/logo2.jpg" alt="logo" /></a>

    <nav class="navbar">
        <a href="../Main_Page/index.html">Home</a>
        <a href="../Product_List/index.html">SHOP</a>
        <a href="../Main_Page/index.html#discounts">Discounts</a>
        <a href="../Main_Page/index.html#newarrivals" class="newa">New Arrivals</a>

        <div class="dropdown">
        <button>Others</button>
        <ul>
          <li><a href="../Wishlist/index.html">Wishlist</a></li>
          <li><a href="../Main_Page/index.html#newsletter">Newsletter</a></li>
        </ul>
      </div>
    </nav>

    <div class="icons">
        <div class="fas fa-bars" id="menu-btn"></div>
        <div class="fas fa-search" id="search-btn"></div>
        <div class="fas fa-shopping-cart" id="cart-btn"></div>
        <div class="fas fa-user" id="login-btn"></div>
    </div>

    <form action="" class="search-form">
        <input type="search" id="search-box" placeholder="Search...">
        <label for="search-box" class="fas fa-search"></label>
    </form>

 

    <div action="" class="login-form">
        <p class="account-info">Log In as, name</p>
        <button class="btn" id="user-btn">Log Out</button>
    </div>`;

}

createNav();


let aboutUser = document.querySelector('.account-info');
let button = document.querySelector('.btn');

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{ 
    window.location.replace("../Cart/index.html");
}



let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



window.onload = () => {
    if (localStorage.getItem('isLogged') == 'true'){
        
         var keyName = window.localStorage.key("2");
         aboutUser.innerHTML = `Log In as, ${keyName}`;
         button.innerHTML = 'Log Out';
         button.addEventListener('click', ()=> {
         localStorage.setItem('isLogged', 'false');
         location.reload();
         })
      } else {
        aboutUser.innerHTML = 'Log In to place an order';
        button.innerHTML = 'Log In';
        button.addEventListener('click', () => {
            location.href = '/sign_in';
        })
      }
}