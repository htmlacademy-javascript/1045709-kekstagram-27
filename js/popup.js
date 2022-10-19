const clearInputs = (popupContainer, pristine) => {
  const inputsWithoutDefaultVal = popupContainer.querySelectorAll('input:not([value])');
  const allTextAreas = popupContainer.querySelectorAll('textarea');

  inputsWithoutDefaultVal.forEach((input) => (input.value = ''));
  allTextAreas.forEach((textArea) => (textArea.value = ''));

  const popupForm = popupContainer.closest('form');
  if (popupForm) {
    const uploadInput = popupForm.querySelector('input[type="file"]');
    if (uploadInput) {
      uploadInput.value = '';
    }
  }

  if (pristine) {
    const pristineErrorsTexts = popupContainer.querySelectorAll('.error-text');
    pristineErrorsTexts.forEach((errorText) => (errorText.style.display = 'none'));
  }

};

const addPopupCloseHandlers = (popupContainer, closeBtn, clearInputsOnClose, pristine) => {

  const closePopup = () => {
    popupContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeBtn.removeEventListener('click', popupCloseClickHandler);
    document.removeEventListener('keydown', popupCloseKeydownHandler);
    if (clearInputsOnClose) {
      clearInputs(popupContainer, pristine);
    }
  };

  function popupCloseClickHandler() {
    closePopup();
  }

  function popupCloseKeydownHandler(evt) {
    if (evt.code === 'Escape' && document.activeElement.getAttribute('type') !== 'text' && document.activeElement.tagName !== 'TEXTAREA') {
      closePopup();
    }
  }

  closeBtn.addEventListener('click', popupCloseClickHandler);
  document.addEventListener('keydown', popupCloseKeydownHandler);
};

const showPopup = (popupContainer, closeBtn, clearInputsOnClose = false, pristine = false) => {
  document.body.classList.add('modal-open');
  popupContainer.classList.remove('hidden');
  addPopupCloseHandlers(popupContainer, closeBtn, clearInputsOnClose, pristine);
};

export { showPopup };
