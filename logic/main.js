"use strict";

let navbar = document.getElementById("navbar");

const dynClass = "scroll-style";
const onScroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add(dynClass)
    } else {
        navbar.classList.remove(dynClass)
    }
}

window.addEventListener("scroll", onScroll);



