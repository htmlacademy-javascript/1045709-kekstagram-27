// getRandomInRange источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values

const getRandomInRange = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  return max < min ? getRandomInRange(max, min) : Math.round(Math.random() * (max - min) + min);
};

getRandomInRange(13, 10);

const checkMaxStringLength = (string, maxStringLength) => string.length <= maxStringLength;

checkMaxStringLength('строка', 5);

const createPhotoDescArr = () => {
  const photoArr = [];

  const createPhotoComments = (likesQuantity = 15) => {
    const commentsQuantity = Math.round(likesQuantity / 20);
    const comments = [];

    const createRandomCommentId = () => {
      const randomId = getRandomInRange(1, commentsQuantity);
      return comments.some((elem) => elem.id === randomId) ? createRandomCommentId() : randomId;
    };

    for (let i = 1; i <= commentsQuantity; i++) {
      comments.push({
        id: createRandomCommentId(),
        avatar: `img/avatar-${getRandomInRange(1, 6)}.svg`,
        message: ['Всё отлично!', 'В целом всё неплохо. Но не всё.'][getRandomInRange(0, 1)],
        name: ['Артём', 'Алексей', 'Дмитрий', 'Василий', 'Сергей'][getRandomInRange(0, 4)]
      });
    }

    return comments;
  };

  for (let i = 1; i <= 25; i++) {
    const photoLikes = getRandomInRange(15, 200);
    photoArr.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Красивое фото',
      likes: photoLikes,
      comments: createPhotoComments(photoLikes)
    });
  }

  return photoArr;
};

createPhotoDescArr();
