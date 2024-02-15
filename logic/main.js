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

// Function to create a card for each car
function createCarCard(car) {
    // Assuming the image path needs to be constructed from the car model
    //
    const imagePath = `${car.imagePath}`
    // const imagePath = `images/Optimized-Images/${car.model.replace(/\s+/g, '-')}-Front-3.webp`;
    const altText = `${car.brand} ${car.model} Vorderansicht`;

    const brandLogoSvg = `${brandPath}`;; // Your SVG content here

    return `<a class="sales__card" href="#">
              <article class="card--layout">
                  <div class="car-card__text">
                      <h5 class="text-xl-sb">${car.price}</h5>
                      <h6 class="text-sm-sb">${car.model}</h6>
                      <div class="details">
                          <p class="text-xs-r">${car.gear}</p>
                          <p class="text-xs-r">${car.power} / ${car.range}</p>
                      </div>
                  </div>
                  <img src="${imagePath}" alt="${altText}">
                  <div class="brand">
                      ${brandLogoSvg}
                  </div>
              </article>
            </a>`;
}

// Function to load the JSON and create cards
function loadCars() {
    console.log("loading cars");
    fetch("logic/cars-data.json") // Path to your JSON file
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-container');
            data.cars.forEach(car => {
                const carCardHTML = createCarCard(car);
                cardsContainer.innerHTML += carCardHTML;
            });
        })
        .catch(error => console.error('Error loading the JSON:', error));
}

loadCars();