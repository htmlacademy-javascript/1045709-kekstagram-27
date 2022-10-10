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

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

function popupCloseClickHandler() {
  closePopup();
  popupCloseButton.removeEventListener('click', popupCloseClickHandler);
  document.removeEventListener('keydown', popupCloseKeydownHandler);
}

function popupCloseKeydownHandler(evt) {
  if (evt.code === 'Escape') {
    closePopup();
    document.removeEventListener('keydown', popupCloseKeydownHandler);
    popupCloseButton.removeEventListener('click', popupCloseClickHandler);
  }
}

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
  popupCommentsLoader.classList.add('hidden');
  popupCommentsLoaderCount.classList.add('hidden');

  const commentElement = popupCommentsList.querySelector('.social__comment');
  popupCommentsList.innerHTML = '';
  dataObj.comments.forEach(({avatar, name, message}) => {
    const comment = commentElement.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    popupCommentsList.appendChild(comment);
  });
};

const photoClickHandler = (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const pictureObj = pictures.find((elem) => elem.id === Number(picture.dataset.id));
    generatePopupContent(pictureObj);
    showPopup();
  }
};

const gallery = document.querySelector('.pictures');
gallery.addEventListener('click', photoClickHandler);
