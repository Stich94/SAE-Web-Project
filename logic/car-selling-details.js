"use strict";

// ------------- HTML Elements ----------
let highlightButton = document.getElementById("scroll-to-highlights");
let specsButton = document.getElementById("scroll-to-specs");


let scrollTargetHighlights = document.getElementById("highlights-container");
let scrollTargetCarSpecs = document.getElementById("car-specs-section");



// ------------- Event Handlers ----------------
highlightButton.addEventListener("click", (e) => {
    scrollToTargetContainer(e,  scrollTargetHighlights);
});

specsButton.addEventListener("click", (e) => {
    scrollToTargetContainer(e,  scrollTargetCarSpecs);
});



// ------------- Functions -------------


/// generic func to pass the target in, because logic is the same
function scrollToTargetContainer(e, target) {
    e.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}