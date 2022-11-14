import { uploadFileInput } from './photo-upload.js';
import { uploadForm, clearPristineErrors } from './photo-upload-validation.js';
import { resetPhotoScale } from './photo-upload-scale.js';
import { resetPhotoEffect, resetPhotoEffectSlider } from './photo-upload-effects.js';

const resetChosenFile = () => {
  uploadFileInput.value = '';
};

const resetUploadFormValues = () => {
  uploadForm.reset();
};

const uploadReset = () => {
  resetChosenFile();
  resetUploadFormValues();
  clearPristineErrors();
  resetPhotoScale();
  resetPhotoEffect();
  resetPhotoEffectSlider();
};

export { uploadReset };
