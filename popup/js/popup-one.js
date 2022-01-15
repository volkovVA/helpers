/*===== POPUP-ONE =====*/

const openButtonOne = document.querySelector("#openOverlayOne");
const successOverlayOne = createOverlay('<img src="./img/piter.jpg">');

openButtonOne.addEventListener("click", function() {
  document.body.appendChild(successOverlayOne);
});

function createOverlay(content) {
  const overlayElementOne = document.createElement("div");
  overlayElementOne.classList.add("overlay");
  overlayElementOne.addEventListener("click", function(e) {
    if (e.target === overlayElementOne) {
      closeElementOne.click();
    }
  });

  const containerElementOne = document.createElement("div");
  containerElementOne.classList.add("popup");

  const contentElementOne = document.createElement("div");
  contentElementOne.classList.add("content");
  contentElementOne.innerHTML = content;

  const closeElementOne = document.createElement("a");
  closeElementOne.classList.add("close");
  closeElementOne.textContent = "x";
  closeElementOne.href = "#";
  closeElementOne.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.removeChild(overlayElementOne);
  });

  overlayElementOne.appendChild(containerElementOne);
  containerElementOne.appendChild(closeElementOne);
  containerElementOne.appendChild(contentElementOne);

  return overlayElementOne;
}