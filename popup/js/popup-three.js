/*===== POPUP-THREE =====*/

const openButtonThree = document.querySelector("#openOverlayThree");
const templateThree = document.querySelector("#overlayTemplateThree").innerHTML;
const overlayThree = createOverlayThree(templateThree);

openButtonThree.addEventListener("click", function() {
  overlayThree.open();
  overlayThree.setContent('<img src="./img/turret.jpg">');
});

function createOverlayThree(templateThree) {
  const fragment = document.createElement('div');

  fragment.innerHTML = templateThree;

  const overlayElementThree = fragment.querySelector(".overlay-three");
  const contentElementThree = fragment.querySelector(".content");
  const closeElementThree = fragment.querySelector(".close");

  overlayElementThree.addEventListener("click", e => {
    if (e.target === overlayElementThree) {
      closeElementThree.click();
    }
  });
  closeElementThree.addEventListener("click", () => {
    document.body.removeChild(overlayElementThree);
  });

  return {
    open() {
      document.body.appendChild(overlayElementThree);
    },
    close() {
      closeElementThree.click();
    },
    setContent(content) {
      contentElementThree.innerHTML = content;
    }
  };
}