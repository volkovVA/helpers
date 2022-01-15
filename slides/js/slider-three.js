/*===== SLIDER-THREE =====*/

const left = document.querySelector("#left-three");
const right = document.querySelector("#right-three");
const items = document.querySelector("#slider-three");

right.addEventListener("click", function(e) {
  loop("right", e);
});

left.addEventListener("click", function(e) {
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.appendChild(items.firstElementChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}
