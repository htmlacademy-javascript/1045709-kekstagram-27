import { showModal, closeModal, addPopupCloseHandlers, removePopupCloseHandlers } from './popup.js';
import { uploadForm, clearPristineErrors } from './photo-upload-validation.js';
import { uploadImg, resetPhotoScale } from './photo-upload-scale.js';
import { resetPhotoEffect, resetPhotoEffectSlider } from './photo-upload-effects.js';
import { showErrorAlert } from './util.js';

const UPLOAD_FILES_TYPES = ['jpg', 'jpeg', 'png'];
const FILE_TYPE_ERROR_SHOW_TIME = 8000;

const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadClosePopupBtn = uploadForm.querySelector('#upload-cancel');


const closeUploadPopup = () => {
  closeModal(uploadPopup);
  removePopupCloseHandlers(uploadClosePopupBtn, closePopupClickHandler, closePopupKeydownHandler);

  uploadFileInput.value = '';
  uploadForm.reset();

  clearPristineErrors();
  resetPhotoScale();
  resetPhotoEffect();
  resetPhotoEffectSlider();
};

const showUploadPopup = () => {
  showModal(uploadPopup);
  addPopupCloseHandlers(uploadClosePopupBtn, closePopupClickHandler, closePopupKeydownHandler);
};

function closePopupClickHandler() {
  closeUploadPopup();
}

function closePopupKeydownHandler(evt) {
  if (evt.code === 'Escape' && document.activeElement.getAttribute('type') !== 'text' && document.activeElement.tagName !== 'TEXTAREA') {
    closeUploadPopup();
  }
}

uploadImg.addEventListener('load', () => {
  showUploadPopup();
});

uploadFileInput.addEventListener('change', () => {
  const chosenFile = uploadFileInput.files[0];
  const fileName = chosenFile.name.toLowerCase();

  const matches = UPLOAD_FILES_TYPES.some((it) => fileName.endsWith(it));

  if (!matches) {
    showErrorAlert(`выберите файл с расширением ${UPLOAD_FILES_TYPES.join(', ')}`, FILE_TYPE_ERROR_SHOW_TIME);
    return;
  }

  uploadImg.src = URL.createObjectURL(chosenFile);
});

export { uploadPopup, closeUploadPopup, closePopupKeydownHandler };
