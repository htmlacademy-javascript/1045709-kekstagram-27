import { pictures } from './render.js';

const popup = document.querySelector('.big-picture');
const popupImg = popup.querySelector('.big-picture__img').querySelector('img');
const popupLikesCount = popup.querySelector('.likes-count');
const popupCommentsCount = popup.querySelector('.comments-count');
const popupDescription = popup.querySelector('.social__caption');
const popupCommentsList = popup.querySelector('.social__comments');
const popupCommentsLoader = popup.querySelector('.comments-loader');
const popupCommentsLoaderCount = popup.querySelector('.social__comment-count');
const popupCloseButton = popup.querySelector('.big-picture__cancel');

const popupCloseClickHandler = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  popupCloseButton.removeEventListener('click', popupCloseClickHandler);
};

const popupCloseKeydownHandler = (evt) => {
  if (evt.code === 'Escape') {
    popup.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', popupCloseKeydownHandler);
  }
};

const showPopup = () => {
  popupCloseButton.addEventListener('click', popupCloseClickHandler);
  document.addEventListener('keydown', popupCloseKeydownHandler);
  document.body.classList.add('modal-open');
  popup.classList.remove('hidden');
};

const generatePopupContent = (dataObj) => {
  popupImg.src = dataObj.url;
  popupLikesCount.textContent = dataObj.likes;
  popupCommentsCount.textContent = dataObj.comments.length;
  popupDescription.textContent = dataObj.description;
  popupCommentsList.innerHTML = '';
  popupCommentsLoader.classList.add('hidden');
  popupCommentsLoaderCount.classList.add('hidden');

  dataObj.comments.forEach(({avatar, name, message}) => {
    popupCommentsList.innerHTML += `
    <li class="social__comment">
        <img
            class="social__picture"
            src="${avatar}"
            alt="${name}"
            width="35" height="35">
        <p class="social__text">${message}</p>
    </li>`;
  });
};

const photoClickHandler = (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const pictureObj = pictures.find((elem) => elem.id === +picture.dataset.id);
    generatePopupContent(pictureObj);
    showPopup();
  }
};

const gallery = document.querySelector('.pictures');
gallery.addEventListener('click', photoClickHandler);
