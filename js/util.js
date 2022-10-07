// getRandomInRange источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values

const getRandomPositiveInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  return max < min ? getRandomPositiveInteger(max, min) : Math.round(Math.random() * (max - min) + min);
};

const checkMaxLength = (value, maxLength) => value.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createRandomUniqueId = (arr, range) => {
  const randomId = getRandomPositiveInteger(1, range);
  return arr.some((elem) => elem.id === randomId) ? createRandomUniqueId(arr, range) : randomId;
};


export {getRandomPositiveInteger, checkMaxLength, createRandomUniqueId, getRandomArrayElement};
