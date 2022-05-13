'use strict';

// Element toggle function

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

// navbar variables

const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {elemToggleFunc(navbar); });


// whishlist button

const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {

    whishlistBtn[i].addEventListener("click", function () { elemToggleFunc(this); });
}


// go to top variable

const goToBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (this.window.scrollY > 800) {
        goToBtn.classList.add("active");
    } else {
        goToBtn.classList.remove("active");
    }

});



