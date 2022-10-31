const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 0,
    step: 0,
    getFilterStyle() {
      return 'none';
    }
  },

  {
    name: 'chrome',
    min: 0,
    max: 1,
    step: 0.1,
    getFilterStyle(value) {
      return `grayscale(${value})`;
    }
  },

  {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    getFilterStyle(value) {
      return `sepia(${value})`;
    }
  },

  {
    name: 'marvin',
    min: 0,
    max: 100,
    step: 1,
    getFilterStyle(value) {
      return `invert(${value}%)`;
    }
  },

  {
    name: 'phobos',
    min: 0,
    max: 3,
    step: 0.1,
    getFilterStyle(value) {
      return `blur(${value}px)`;
    }
  },

  {
    name: 'heat',
    min: 1,
    max: 3,
    step: 0.1,
    getFilterStyle(value) {
      return `brightness(${value})`;
    }
  }

];

const DEFAULT_EFFECT = EFFECTS[0];

const uploadImg = document.querySelector('.img-upload__preview').querySelector('img');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderInputElement = document.querySelector('.effect-level__value');
const effectsListContainer = document.querySelector('.effects__list');

let chosenEffect = DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'upper',
});


const resetPhotoEffect = () => {
  uploadImg.style.filter = 'none';
  uploadImg.className = '';
};

const resetPhotoEffectSlider = () => {
  sliderElement.classList.add('hidden');
  sliderInputElement.value = 0;
};

sliderElement.noUiSlider.on('update', () => {
  sliderInputElement.value = sliderElement.noUiSlider.get();
  uploadImg.style.filter = chosenEffect.getFilterStyle(sliderInputElement.value);
});

const effectsListClickHandler = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {

    chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

    if (chosenEffect.name === 'none') {
      resetPhotoEffect();
      resetPhotoEffectSlider();
      return;
    }

    sliderElement.classList.remove('hidden');
    uploadImg.className = `effects__preview--${chosenEffect.name}`;

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: chosenEffect.min,
        max: chosenEffect.max,
      },
      step: chosenEffect.step,
      start: chosenEffect.max
    });

  }
};

export { effectsListContainer, effectsListClickHandler, resetPhotoEffect, resetPhotoEffectSlider };
