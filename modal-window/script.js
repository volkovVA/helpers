window.onload = function() {

  // Generate Base Modal from Modal Class
  addModalClickHandler();
}

class Modal {
  constructor (classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content) {

    // Overlay
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

    // Modal
    this.modal = this.createDomNode(this.modal, 'div', this.classes);

    // Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    // Close Button
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close-icon');

    // Set Content
    this.setContent(content);

    // Append Elements
    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    // Open Modal
    this.openModal();

  }

  createDomNode (node, element, ...classes){
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.append(content);
    }
  }

  appendModalElements() {
    this.overlay.append(this.modal);
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    let wrapper = document.querySelector('.wrapper');
    wrapper.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      document.querySelector('.overlay').remove();
    }
  }

}

const addModalClickHandler = () => {
  document.querySelector('.button').addEventListener('click', () => {
    generateModal();
  });
}

const generateModal = () => {
  renderModalWindow('Test content');
}

const renderModalWindow = (content) => {
  let modal = new Modal ('modal')
  modal.buildModal(content);
}