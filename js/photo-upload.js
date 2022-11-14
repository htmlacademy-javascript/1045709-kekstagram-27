import { showUploadPopup } from './photo-upload-popup.js';
import { showErrorAlert } from './util.js';

const UPLOAD_FILES_TYPES = ['jpg', 'jpeg', 'png'];
const FILE_TYPE_ERROR_SHOW_TIME = 5000;

const uploadFileInput = document.querySelector('#upload-file');
const uploadImg = document.querySelector('.img-upload__preview').querySelector('img');


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

export { uploadImg, uploadFileInput };
