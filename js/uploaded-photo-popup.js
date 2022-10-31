import { showPopup, clearInputsInPopup } from './popup.js';
import { pictures } from './uploaded-photos-render.js';

const COMMENTS_TO_UPLOAD_QUANTITY = 5;

const gallery = document.querySelector('.pictures');
const popup = document.querySelector('.big-picture');
const popupImg = popup.querySelector('.big-picture__img').querySelector('img');
const popupLikesCount = popup.querySelector('.likes-count');
const popupCommentsCount = popup.querySelector('.comments-count');
const popupDescription = popup.querySelector('.social__caption');
const popupCloseButton = popup.querySelector('.big-picture__cancel');

const popupCommentsList = popup.querySelector('.social__comments');
const commentElementTemplate = popupCommentsList.querySelector('.social__comment');
const uploadedCommentsCollection = popupCommentsList.children;
const popupUploadedCommentsCount = popup.querySelector('.uploaded-comments-count');
const popupCommentsLoaderBtn = popup.querySelector('.comments-loader');


const createCommentElement = (commentObj) => {
  const comment = commentElementTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = commentObj.avatar;
  comment.querySelector('.social__picture').alt = commentObj.name;
  comment.querySelector('.social__text').textContent = commentObj.message;
  return comment;
};

const uploadComments = (commentsArr) => {
  for (let i = 1; i <= COMMENTS_TO_UPLOAD_QUANTITY; i++) {
    const comment = createCommentElement(commentsArr[uploadedCommentsCollection.length]);
    popupCommentsList.appendChild(comment);

    if (!commentsArr[uploadedCommentsCollection.length]) {
      popupCommentsLoaderBtn.classList.add('hidden');
      popupUploadedCommentsCount.textContent = commentsArr.length;
      return;
    }

  }
  popupUploadedCommentsCount.textContent = uploadedCommentsCollection.length;
};

const generatePopupContent = (dataObj) => {
  popupImg.src = dataObj.url;
  popupLikesCount.textContent = dataObj.likes;
  popupCommentsCount.textContent = dataObj.comments.length;
  popupDescription.textContent = dataObj.description;

  popupCommentsLoaderBtn.classList.remove('hidden');
  popupCommentsList.innerHTML = '';
  uploadComments(dataObj.comments);
};

const onClosePopupFunc = () => {
  clearInputsInPopup(popup);
};

const photoClickHandler = (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const pictureObj = pictures.find((elem) => elem.id === Number(picture.dataset.id));
    generatePopupContent(pictureObj);

    const commentsLoaderClickHandler = () => uploadComments(pictureObj.comments);
    const popupHandlers = [
      {'target': popupCommentsLoaderBtn, 'type': 'click', 'func': commentsLoaderClickHandler}
    ];

    showPopup(popup, popupCloseButton, popupHandlers, onClosePopupFunc);
  }
};

gallery.addEventListener('click', photoClickHandler);

export { popupCommentsLoaderBtn };
