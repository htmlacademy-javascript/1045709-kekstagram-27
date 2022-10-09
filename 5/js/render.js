import { createPhotoDescriptions } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createPhotoDescriptions();

const pictureFragment = document.createDocumentFragment();

pictures.forEach(({url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(picture);
});

picturesContainer.appendChild(pictureFragment);
