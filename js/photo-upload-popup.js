import { showPopup, clearInputsInPopup } from './popup.js';
import { scaleInput, smallerScaleBtn, biigerScaleBtn, smallerScaleBtnClickHandler, biggerScaleBtnClickHandler, uploadImg } from './photo-upload-scale.js';
import { uploadForm, uploadFormSubmitHandler } from './photo-upload-validation.js';

const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadResetBtn = uploadForm.querySelector('#upload-cancel');

const popupHandlers = [
  {'target': smallerScaleBtn, 'type': 'click', 'func': smallerScaleBtnClickHandler},
  {'target': biigerScaleBtn, 'type': 'click', 'func': biggerScaleBtnClickHandler},
  {'target': uploadForm, 'type': 'submit', 'func': uploadFormSubmitHandler}
];

const onClosePopupFunc = () => {

  uploadFileInput.value = '';

  clearInputsInPopup(uploadPopup);

  const pristineErrorsTexts = uploadPopup.querySelectorAll('.error-text');
  pristineErrorsTexts.forEach((errorText) => (errorText.style.display = 'none'));

  scaleInput.value = '100%';
  uploadImg.style = '';
};

uploadFileInput.addEventListener('change', () => {
  showPopup(uploadPopup, uploadResetBtn, popupHandlers, onClosePopupFunc);
});
