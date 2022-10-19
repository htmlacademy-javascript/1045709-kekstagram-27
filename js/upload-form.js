import { checkMaxLength, checkArrValuesNotRepeat } from './util.js';
import { showPopup } from './popup.js';

const HASTAG_REGEX = /^#[a-zа-яё0-9]/i;
const MAX_HASTAG_LENGTH = 20;
const MAX_HASTAG_QUANTITY = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const IS_CLEAR_INPUTS_ON_CLOSE_POPUP = true;
const IS_PRISTINE_IN_POPUP = true;

const uploadForm = document.querySelector('.img-upload__form');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadResetBtn = uploadForm.querySelector('#upload-cancel');
const uploadHashtag = uploadForm.querySelector('.text__hashtags');
const uploadDescription = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
});

const validateHashtagSymbols = () => {
  if (uploadHashtag.value !== '') {
    return uploadHashtag.value.split(' ').every((hastag) => HASTAG_REGEX.test(hastag));
  }
  return true;
};
const validateHastagLength = () => uploadHashtag.value.split(' ').every((hastag) => checkMaxLength(hastag, MAX_HASTAG_LENGTH));
const validateHashtagsQuantity = () => checkMaxLength(uploadHashtag.value.split(' '), MAX_HASTAG_QUANTITY);
const validateHashtagValuesRepeat = () => checkArrValuesNotRepeat(uploadHashtag.value.split(' '), true);

pristine.addValidator(uploadHashtag, validateHashtagSymbols, 'Хэштег должен начинаться с # и состоять из букв и чисел');
pristine.addValidator(uploadHashtag, validateHastagLength, `Длина хэштега меньше ${MAX_HASTAG_LENGTH} символов`);
pristine.addValidator(uploadHashtag, validateHashtagsQuantity, `Максимум ${MAX_HASTAG_QUANTITY} хэштегов`);
pristine.addValidator(uploadHashtag, validateHashtagValuesRepeat, 'Хэштеги не могут повторяться');

const validateDescriptionMaxLength = () => checkMaxLength(uploadDescription.value, MAX_DESCRIPTION_LENGTH);

pristine.addValidator(uploadDescription, validateDescriptionMaxLength, `Максимальное длина ${MAX_DESCRIPTION_LENGTH} символов`);

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

uploadFileInput.addEventListener('change', () => {
  showPopup(uploadPopup, uploadResetBtn, IS_CLEAR_INPUTS_ON_CLOSE_POPUP, IS_PRISTINE_IN_POPUP);
});


