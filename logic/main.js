"use strict";

let navbar = document.getElementById("navbar");
let mobileNavbar = document.getElementById("mobile-nav");

const dynClass = "scroll-style";
const onScroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add(dynClass)
        mobileNavbar.classList.add(dynClass)
    } else {
        navbar.classList.remove(dynClass)
        mobileNavbar.classList.remove(dynClass)
    }
}

window.addEventListener("scroll", onScroll);




