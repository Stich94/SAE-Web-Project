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



// ------- Mobile
//
// document.addEventListener("DOMContentLoaded", () => {
//    if (window.matchMedia("(max-width: 480px").matches) {
//        let titles = document.getElementsByClassName("display-md-b");
//
//        titles.forEach((e) => {
//            console.log(e)
//        })
//
//        titles.forEach( (element) => {
//            element.className = "";
//
//            element.classList.add("display-sm-sb")
//        })
//    }
// });

