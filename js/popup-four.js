/*===== POPUP-FOUR =====*/

const openButtonFour = document.querySelector("#openOverlayFour");
const overlayElementFour = document.querySelector(".overlay-four");

openButtonFour.addEventListener("click", function() {
  overlayElementFour.style.display = "flex";
});

const closeElementFour = overlayElementFour.querySelector(".close");
closeElementFour.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElementFour.style.display = "none";
});

overlayElementFour.addEventListener("click", function(e) {
  if (e.target === overlayElementFour) {
    closeElementFour.click();
  }
});
