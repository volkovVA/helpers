/*===== SLIDER-TWO =====*/

const leftTwo = document.querySelector("#left-two");
const rightTwo = document.querySelector("#right-two");
const itemsTwo = document.querySelector("#slider-two");

const minRight = 0;
const maxRight = 1500;
const step = 375;
let currentRight = 0;

itemsTwo.style.right = currentRight;

rightTwo.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        itemsTwo.style.right = currentRight + "px";
    }
});

leftTwo.addEventListener("click", function(e) {
    e.preventDefault();
    if (currentRight > minRight) {
        currentRight -= step;
        itemsTwo.style.right = currentRight + "px";
    }
});