import { getData } from './api.js';
import { renderPhotosList } from './uploaded-photos-render.js';
import { addPhotoFilters } from './uploaded-photos-filters.js';
import { addPhotoClickHandler } from './uploaded-photo-popup.js';
import { showErrorAlert } from './util.js';
import './photo-upload-popup.js';
import './photo-upload-submit.js';
import './photo-upload.js';

getData(
  (photos) => {
    renderPhotosList(photos);
    addPhotoFilters(photos);
    addPhotoClickHandler(photos);
  },
  () => {
    showErrorAlert('Не удалось загрузить изображения. Попробуйте перезагрузить страницу');
  }
);
