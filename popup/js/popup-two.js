/*===== POPUP-TWO =====*/

const openButtonTwo = document.querySelector("#openOverlayTwo");
const successOverlayTwo = createOverlay('<img src="./img/сolosseum.jpg">');

openButtonTwo.addEventListener("click", function() {
  document.body.appendChild(successOverlayTwo);
});

function createOverlay(content) {
  const overlayElementTwo = document.createElement("div");
  overlayElementTwo.classList.add("overlay-two");

  const templateTwo = document.querySelector("#overlayTemplateTwo");
  overlayElementTwo.innerHTML = templateTwo.innerHTML;
  overlayElementTwo.addEventListener("click", function(e) {
    if (e.target === overlayElementTwo) {
      closeElementTwo.click();
    }
  });

  const closeElementTwo = overlayElementTwo.querySelector(".close");
  closeElementTwo.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.removeChild(overlayElementTwo);
  });

  const contentElementTwo = overlayElementTwo.querySelector(".content");
  contentElementTwo.innerHTML = content;

  return overlayElementTwo;
}