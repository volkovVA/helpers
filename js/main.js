const openButton = document.querySelector("#openOverlay");
const successOverlay = createOverlay('<img src="../img/piter.jpg">');

openButton.addEventListener("click", function() {
  document.body.appendChild(successOverlay);
});

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("popup");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}
