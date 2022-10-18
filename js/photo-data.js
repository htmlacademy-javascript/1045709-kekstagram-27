import {getRandomPositiveInteger, createRandomUniqueId, getRandomArrayElement} from './util.js';

const NAMES = ['Артём', 'Алексей', 'Дмитрий', 'Василий', 'Сергей'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];
let photoQuantity = 0;

const createPhotoComment = () => ({
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoComments = () => {
  const comments = Array.from({length: getRandomPositiveInteger(1, 20)}, createPhotoComment);
  comments.forEach((elem) => (elem.id = createRandomUniqueId(comments, 20)));
  return comments;
};


const createPhotoDescription = () => ({
  id: ++photoQuantity,
  url: `photos/${photoQuantity}.jpg`,
  description: 'Красивое фото',
  likes: getRandomPositiveInteger(15, 200),
  comments: createPhotoComments()
});

const createPhotoDescriptions = () => Array.from({length: 25}, createPhotoDescription);

export {createPhotoDescriptions};
