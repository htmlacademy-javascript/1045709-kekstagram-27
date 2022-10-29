const clearInputsInPopup = (popupContainer) => {
  const inputsWithoutDefaultVal = popupContainer.querySelectorAll('input:not([value])');
  const allTextAreas = popupContainer.querySelectorAll('textarea');
  inputsWithoutDefaultVal.forEach((input) => (input.value = ''));
  allTextAreas.forEach((textArea) => (textArea.value = ''));
};

const addPopupHandlers = (popupHandlers) => {
  popupHandlers.forEach((handlerObj) => handlerObj.target.addEventListener(handlerObj.type, handlerObj.func));
};

const removePopupHandlers = (popupHandlers) => {
  popupHandlers.forEach((handlerObj) => handlerObj.target.removeEventListener(handlerObj.type, handlerObj.func));
};

const closePopup = (popupContainer, popupHandlers, onClosePopupFunc) => {
  popupContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removePopupHandlers(popupHandlers);
  if (onClosePopupFunc) {
    onClosePopupFunc();
  }
};

const createPopupCloseHandlers = (popupContainer, closeBtn, popupHandlers, onClosePopupFunc) => {

  const popupCloseClickHandler = () => {
    closePopup(popupContainer, popupHandlers, onClosePopupFunc);
  };

  const popupCloseKeydownHandler = (evt) => {
    if (evt.code === 'Escape' && document.activeElement.getAttribute('type') !== 'text' && document.activeElement.tagName !== 'TEXTAREA') {
      closePopup(popupContainer, popupHandlers, onClosePopupFunc);
    }
  };

  const popupCloseHandlers = [
    {'target': closeBtn, 'type': 'click', 'func': popupCloseClickHandler},
    {'target': document, 'type': 'keydown', 'func': popupCloseKeydownHandler}
  ];

  popupHandlers.push(...popupCloseHandlers);
};

const showPopup = (popupContainer, closeBtn, popupHandlers = [], onClosePopupFunc = false) => {
  document.body.classList.add('modal-open');
  popupContainer.classList.remove('hidden');

  createPopupCloseHandlers(popupContainer, closeBtn, popupHandlers, onClosePopupFunc);
  addPopupHandlers(popupHandlers);
};

export { showPopup, clearInputsInPopup };
