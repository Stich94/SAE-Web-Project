"use strict";

let highlightButton = document.getElementById("scroll-to-highlights");
let specsButton = document.getElementById("scroll-to-specs");


let scrollTargetHighlights = document.getElementById("highlights-container");
let scrollTargetCarSpecs = document.getElementById("car-specs-section");


// add Event to click
// highlightButton.addEventListener("click", scrollToHighlightsContainer);

// ------- more generic func ------ to avoid code duplication -----
highlightButton.addEventListener("click", (e) => {
    scrollToTargetContainer(e,  scrollTargetHighlights);
});

specsButton.addEventListener("click", (e) => {
    scrollToTargetContainer(e,  scrollTargetCarSpecs);
});



// ------------- Functions -------------
function scrollToHighlightsContainer(e) {
    e.preventDefault();

    scrollTargetHighlights.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/// generic func to pass the target in, because logic is the same
function scrollToTargetContainer(e, target) {
    e.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}