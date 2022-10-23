import { createPhotoDescriptions } from './photo-data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createPhotoDescriptions();

const pictureFragment = document.createDocumentFragment();

pictures.forEach(({id, url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.dataset.id = id;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(picture);
});

picturesContainer.appendChild(pictureFragment);

export { pictures };
