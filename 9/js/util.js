// getRandomInRange источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values

const getRandomPositiveInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  return max < min ? getRandomPositiveInteger(max, min) : Math.round(Math.random() * (max - min) + min);
};

const checkMaxLength = (value, maxLength) => value.length <= maxLength;

const checkArrValuesNotRepeat = (arr, isStringsArr = false) => {
  if (isStringsArr) {
    arr = arr.map((string) => string.toLowerCase());
  }
  const arrWithoutRepeats = new Set(arr);
  return arrWithoutRepeats.size === arr.length;
};

const getRandomArrayElement = (arr) => arr[getRandomPositiveInteger(0, arr.length - 1)];

const createRandomUniqueId = (arr, range) => {
  const randomId = getRandomPositiveInteger(1, range);
  return arr.some((elem) => elem.id === randomId) ? createRandomUniqueId(arr, range) : randomId;
};

export {getRandomPositiveInteger, checkMaxLength, checkArrValuesNotRepeat, createRandomUniqueId, getRandomArrayElement};
