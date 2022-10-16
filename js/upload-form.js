import { showPopup } from './popup.js';

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

const validateHashtagRepeatValues = (arr) => {
  const objOfValueQuantity = arr.reduce((acc, elem) => {
    acc[elem] = acc[elem] ? acc[elem] + 1 : 1;
    return acc;
  }, {});
  if (Object.values(objOfValueQuantity).some((value) => value > 1)) {
    return false;
  }
  return true;
};

const validateHashtag = () => {
  const regex = /^#[a-zа-яё0-9]{1,19}$/i;
  const hastagsArr = uploadHashtag.value.split(' ');
  if (hastagsArr.length > 5 || !validateHashtagRepeatValues(hastagsArr)) {
    return false;
  }
  if (hastagsArr.every((hastag) => regex.test(hastag)) || uploadHashtag.value === '') {
    return true;
  }
};

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(uploadHashtag, validateHashtag, 'Введите корректное значение');
pristine.addValidator(uploadDescription, validateDescription, 'Максимальное длина 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

uploadFileInput.addEventListener('change', () => {
  showPopup(uploadPopup, uploadResetBtn, true, true);
});


