const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const SCALE_STEP = 25;

const uploadImg = document.querySelector('.img-upload__preview').querySelector('img');
const smallerScaleBtn = document.querySelector('.scale__control--smaller');
const biigerScaleBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');

let photoScaleValue = 100;

const setPhotoScale = () => {
  uploadImg.style.transform = `scale(${photoScaleValue / 100})`;
  scaleInput.value = `${photoScaleValue}%`;
};

const smallerScaleBtnClickHandler = () => {
  if (photoScaleValue > MIN_SCALE_VALUE) {
    photoScaleValue -= SCALE_STEP;
    setPhotoScale();
  }
};

const biggerScaleBtnClickHandler = () => {
  if (photoScaleValue < MAX_SCALE_VALUE) {
    photoScaleValue += SCALE_STEP;
    setPhotoScale();
  }
};

export { smallerScaleBtn, biigerScaleBtn, smallerScaleBtnClickHandler, biggerScaleBtnClickHandler };
