const clearInputsInPopup = (popupContainer) => {
  const inputsWithoutDefaultVal = popupContainer.querySelectorAll('input:not([value])');
  const allTextAreas = popupContainer.querySelectorAll('textarea');
  inputsWithoutDefaultVal.forEach((input) => (input.value = ''));
  allTextAreas.forEach((textArea) => (textArea.value = ''));
};

const addPopupHandlers = (popupHandlersArr) => {
  popupHandlersArr.forEach((handlerObj) => handlerObj.target.addEventListener(handlerObj.type, handlerObj.func));
};

const removePopupHandlers = (popupHandlersArr) => {
  popupHandlersArr.forEach((handlerObj) => handlerObj.target.removeEventListener(handlerObj.type, handlerObj.func));
};

const createPopupCloseHandlers = (popupContainer, closeBtn, popupHandlers, onClosePopupFunc) => {

  const closePopup = () => {
    popupContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeBtn.removeEventListener('click', popupCloseClickHandler);
    document.removeEventListener('keydown', popupCloseKeydownHandler);
    removePopupHandlers(popupHandlers);
    const popupForm = popupContainer.closest('form');
    if (popupForm) {
      popupForm.reset();
    }
    if (onClosePopupFunc) {
      onClosePopupFunc();
    }
  };

  function popupCloseClickHandler() {
    closePopup(popupContainer, popupHandlers, onClosePopupFunc);
  }

  function popupCloseKeydownHandler(evt) {
    if (evt.code === 'Escape' && document.activeElement.getAttribute('type') !== 'text' && document.activeElement.tagName !== 'TEXTAREA') {
      closePopup(popupContainer, popupHandlers, onClosePopupFunc);
    }
  }

  closeBtn.addEventListener('click', popupCloseClickHandler);
  document.addEventListener('keydown', popupCloseKeydownHandler);
};

const showPopup = (popupContainer, closeBtn, popupHandlers = [], onClosePopupFunc = false) => {
  document.body.classList.add('modal-open');
  popupContainer.classList.remove('hidden');

  createPopupCloseHandlers(popupContainer, closeBtn, popupHandlers, onClosePopupFunc);
  addPopupHandlers(popupHandlers);
};

export { showPopup, clearInputsInPopup };
