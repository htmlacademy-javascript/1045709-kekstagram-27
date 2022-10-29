const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const SCALE_STEP = 25;

const uploadImg = document.querySelector('.img-upload__preview').querySelector('img');
const smallerScaleBtn = document.querySelector('.scale__control--smaller');
const biigerScaleBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');


const getPhotoScale = () => parseInt(scaleInput.value, 10);

const setPhotoScale = (scale) => {
  uploadImg.style.transform = `scale(${scale / 100})`;
  scaleInput.value = `${scale}%`;
};

const smallerScaleBtnClickHandler = () => {
  if (getPhotoScale() > MIN_SCALE_VALUE) {
    const newScale = getPhotoScale() - SCALE_STEP;
    setPhotoScale(newScale);
  }
};

const biggerScaleBtnClickHandler = () => {
  if (getPhotoScale() < MAX_SCALE_VALUE) {
    const newScale = getPhotoScale() + SCALE_STEP;
    setPhotoScale(newScale);
  }
};

export { scaleInput, smallerScaleBtn, biigerScaleBtn, smallerScaleBtnClickHandler, biggerScaleBtnClickHandler, uploadImg };
