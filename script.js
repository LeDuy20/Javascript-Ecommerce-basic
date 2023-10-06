// copy Menu of mobile

function copyMenu() {
    // copy inside .dpt-menu to .departments
    const dptMenu = document.querySelector('.dpt-cat');
    const dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptMenu.innerHTML;

    // copy inside nav to pav
    const mainNav = document.querySelector('.header-nav nav');
    const navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    const topNav = document.querySelector('.header-top .wrapper')
    const topPlace = document.querySelector('.thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show menu mobile
const menuBtn = document.querySelector('.trigger'),
    closeBtn = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');

menuBtn.addEventListener("click", () => {
    addClass.classList.toggle("showmenu")
})

closeBtn.addEventListener("click", () => {
    addClass.classList.remove("showmenu")
})

// Show sub menu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => {
    menu.addEventListener("click" ,toggle)
})

function toggle(e) {
    e.preventDefault();
    subMenu.forEach(item => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != "expand");
    this.closest('.has-child').classList.toggle("expand")
}
// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
});

// show search
const searchButton = document.querySelector('.t-search'), 
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector(".site");

searchButton.addEventListener('click', () => {
    showClass.classList.toggle("showsearch")
})
tClose.addEventListener('click' , () => {
    showClass.classList.remove('showsearch')
})

// Show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
    dptClass = document.querySelector('.site');

dptButton.addEventListener('click', () => {
    dptClass.classList.toggle('showdpt')
})

// products item slider 

const productThumb = new Swiper ('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView : 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints : {
        481: {
            spaceBetween : 32,
        }
    }
});

const productBig = new Swiper ('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
})
// Stock Products bar width percentage
var stocks = document.querySelectorAll('.products .stock');



for (let x = 0 ; x < stocks.length ; x++) {
    let stock = stocks[x].dataset.stock,
        available = stocks[x].querySelector('.qty-available').innerHTML,
        sold = stocks[x].querySelector('.qty-sold').innerHTML,
        percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}
// Show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');


divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show-cart')) {
            divPopup.classList.add('show-cart')
        }
    }, 250 )
});
document.addEventListener('click', (e) => {
   const isClose = e.target.closest(divtoShow);
   if(!isClose && divPopup.classList.contains('show-cart')) {
        divPopup.classList.remove('show-cart')
   }
})

// show modal on load
window.onload = () => {
    document.querySelector(".site").classList.toggle('showmodal')
};
document.querySelector('.modalclose').addEventListener('click' , () => {
    document.querySelector('.site').classList.remove('showmodal')
})
