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

  const createPhotoComments = (LIKES_QUANTITY = 15) => {
    const COMMENTS_QUANTITY = Math.round(LIKES_QUANTITY / 20);
    const comments = [];

    const createRandomCommentId = () => {
      const RANDOM_ID = getRandomInRange(1, COMMENTS_QUANTITY);
      return comments.some((elem) => elem.id === RANDOM_ID) ? createRandomCommentId() : RANDOM_ID;
    };

    for (let i = 1; i <= COMMENTS_QUANTITY; i++) {
      comments.push({
        'id': createRandomCommentId(),
        'avatar': `img/avatar-${getRandomInRange(1, 6)}.svg`,
        'message': ['Всё отлично!', 'В целом всё неплохо. Но не всё.'][getRandomInRange(0, 1)],
        'name': ['Артём', 'Алексей', 'Дмитрий', 'Василий', 'Сергей'][getRandomInRange(0, 4)]
      });
    }

    return comments;
  };

  for (let i = 1; i <= 25; i++) {
    const PHOTO_LIKES = getRandomInRange(15, 200);
    photoArr.push({
      'id': i,
      'url': `photos/${i}.jpg`,
      'description': 'Красивое фото',
      'likes': PHOTO_LIKES,
      'comments': createPhotoComments(PHOTO_LIKES)
    });
  }

  return photoArr;
};

createPhotoDescArr();
