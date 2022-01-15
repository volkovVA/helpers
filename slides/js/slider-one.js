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