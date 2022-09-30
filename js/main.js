// getRandomInRange источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values

const getRandomInRange = (min, max) => {
  if (min <= 0 || max <= 0) {
    return NaN;
  }
  return max < min ? getRandomInRange(max, min) : Math.round(Math.random() * (max - min) + min);
};

getRandomInRange(13, 10);

const checkMaxStringLength = (string, maxStringLength) => string.length <= maxStringLength;

checkMaxStringLength('строка', 5);
