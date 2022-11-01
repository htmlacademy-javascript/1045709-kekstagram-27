import { showPopup, clearInputsInPopup } from './popup.js';
import { smallerScaleBtn, biigerScaleBtn, smallerScaleBtnClickHandler, biggerScaleBtnClickHandler, resetPhotoScale } from './photo-upload-scale.js';
import { uploadForm, uploadFormSubmitHandler, clearPristineErrors } from './photo-upload-validation.js';
import { effectsListContainer, effectsListClickHandler, resetPhotoEffect, resetPhotoEffectSlider } from './photo-upload-effects.js';

const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadImg = uploadForm.querySelector('.img-upload__preview').querySelector('img');
const uploadClosePopupBtn = uploadForm.querySelector('#upload-cancel');

const popupHandlers = [
  {'target': smallerScaleBtn, 'type': 'click', 'func': smallerScaleBtnClickHandler},
  {'target': biigerScaleBtn, 'type': 'click', 'func': biggerScaleBtnClickHandler},
  {'target': uploadForm, 'type': 'submit', 'func': uploadFormSubmitHandler},
  {'target': effectsListContainer, 'type': 'click', 'func': effectsListClickHandler}
];


const onClosePopupFunc = () => {

  uploadFileInput.value = '';

  clearInputsInPopup(uploadPopup);
  clearPristineErrors();
  resetPhotoScale();
  resetPhotoEffect();
  resetPhotoEffectSlider();
};

uploadFileInput.addEventListener('change', () => {
  showPopup(uploadPopup, uploadClosePopupBtn, popupHandlers, onClosePopupFunc);
});

export { uploadImg };
