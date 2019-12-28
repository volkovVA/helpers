/*===== SLIDER-ONE =====*/

const leftOne = document.querySelector("#left-one");
const rightOne = document.querySelector("#right-one");
const itemsOne = document.querySelector("#slider-one");
const computed = getComputedStyle(itemsOne);

rightOne.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }
  
  if (currentRight < 1500) {
    itemsOne.style.right = currentRight + 375 + "px";
  }
});

leftOne.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    itemsOne.style.right = currentRight - 375 + "px";
  }
});

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
