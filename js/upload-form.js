import { checkMaxLength, checkArrValuesNotRepeat } from './util.js';
import { showPopup } from './popup.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadFileInput = uploadForm.querySelector('#upload-file');
const uploadResetBtn = uploadForm.querySelector('#upload-cancel');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
});

const uploadHashtag = uploadForm.querySelector('.text__hashtags');
const hastagRegex = /^#[a-zа-яё0-9]/i;
const maxHastagLength = 20;
const maxHastagsQuantity = 5;

const validateHashtagSymbols = () => {
  if (uploadHashtag.value !== '') {
    return uploadHashtag.value.split(' ').every((hastag) => hastagRegex.test(hastag));
  }
  return true;
};
const validateHastagLength = () => uploadHashtag.value.split(' ').every((hastag) => checkMaxLength(hastag, maxHastagLength));
const validateHashtagsQuantity = () => checkMaxLength(uploadHashtag.value.split(' '), maxHastagsQuantity);
const validateHashtagValuesRepeat = () => checkArrValuesNotRepeat(uploadHashtag.value.split(' '), true);

pristine.addValidator(uploadHashtag, validateHashtagSymbols, 'Хэштег должен начинаться с # и состоять из букв и чисел');
pristine.addValidator(uploadHashtag, validateHastagLength, `Длина хэштега меньше ${maxHastagLength} символов`);
pristine.addValidator(uploadHashtag, validateHashtagsQuantity, `Максимум ${maxHastagsQuantity} хэштегов`);
pristine.addValidator(uploadHashtag, validateHashtagValuesRepeat, 'Хэштеги не могут повторяться');


const uploadDescription = uploadForm.querySelector('.text__description');
const maxDescriptionLength = 140;

const validateDescriptionMaxLength = () => checkMaxLength(uploadDescription.value, maxDescriptionLength);

pristine.addValidator(uploadDescription, validateDescriptionMaxLength, `Максимальное длина ${maxDescriptionLength} символов`);

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

uploadFileInput.addEventListener('change', () => {
  showPopup(uploadPopup, uploadResetBtn, true, true);
});


