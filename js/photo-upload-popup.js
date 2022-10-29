import { addPopupHandlers, showPopup } from './popup.js';
import { smallerScaleBtn, biigerScaleBtn, smallerScaleBtnClickHandler, biggerScaleBtnClickHandler } from './photo-upload-scale.js';
import { uploadForm, uploadFormSubmitHandler } from './photo-upload-validation.js';

const IS_CLEAR_INPUTS_ON_CLOSE_POPUP = true;
const IS_PRISTINE_IN_POPUP = true;

const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadResetBtn = uploadForm.querySelector('#upload-cancel');

const popupHandlers = [
  {'target': smallerScaleBtn, 'type': 'click', 'func': smallerScaleBtnClickHandler},
  {'target': biigerScaleBtn, 'type': 'click', 'func': biggerScaleBtnClickHandler},
  {'target': uploadForm, 'type': 'submit', 'func': uploadFormSubmitHandler}
];

uploadFileInput.addEventListener('change', () => {
  addPopupHandlers(popupHandlers);
  showPopup(uploadPopup, uploadResetBtn, IS_CLEAR_INPUTS_ON_CLOSE_POPUP, IS_PRISTINE_IN_POPUP, popupHandlers);
});
