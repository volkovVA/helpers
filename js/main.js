/*===== POPUP-ONE =====*/

const openButtonOne = document.querySelector("#openOverlayOne");
const successOverlayOne = createOverlay('<img src="../img/piter.jpg">');

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

/*===== POPUP-TWO =====*/

const openButtonTwo = document.querySelector("#openOverlayTwo");
const successOverlayTwo = createOverlay('<img src="../img/piter.jpg">');

openButtonTwo.addEventListener("click", function() {
  document.body.appendChild(successOverlayTwo);
});

function createOverlay(content) {
  const overlayElementTwo = document.createElement("div");
  overlayElementTwo.classList.add("overlay");

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

/*===== POPUP-THREE =====*/

const openButtonThree = document.querySelector("#openOverlayThree");
const templateThree = document.querySelector("#overlayTemplateThree").innerHTML;
const overlayThree = createOverlayThree(templateThree);

openButtonThree.addEventListener("click", function() {
  overlayThree.open();
  overlayThree.setContent('<img src="../img/piter.jpg">');
});

function createOverlayThree(templateThree) {
  const fragment = document.createElement('div');

  fragment.innerHTML = templateThree;

  const overlayElementThree = fragment.querySelector(".overlay");
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
