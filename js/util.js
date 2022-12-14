const checkMaxLength = (value, maxLength) => value.length <= maxLength;

const getRandomArrValues = (arr, valuesQuantity) => {
  const result = [];

  const createRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (result.includes(arr[randomIndex])) {
      return createRandomIndex();
    }
    return randomIndex;
  };

  for (let i = 0; i < valuesQuantity; i++) {
    result.push(arr[createRandomIndex()]);
  }

  return result;
};

const checkArrValuesNotRepeat = (arr, isStringsArr = false) => {
  if (isStringsArr) {
    arr = arr.map((string) => string.toLowerCase());
  }
  const arrWithoutRepeats = new Set(arr);
  return arrWithoutRepeats.size === arr.length;
};

const clearInputs = (container) => {
  const inputsWithoutDefaultVal = container.querySelectorAll('input:not([value])');
  const allTextAreas = container.querySelectorAll('textarea');
  inputsWithoutDefaultVal.forEach((input) => (input.value = ''));
  allTextAreas.forEach((textArea) => (textArea.value = ''));
};

const showErrorAlert = (message, showTime = false) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '22px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'Crimson';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  if (showTime) {
    setTimeout(() => {
      alertContainer.remove();
    }, showTime);
  }

};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { checkMaxLength, getRandomArrValues, checkArrValuesNotRepeat, clearInputs, showErrorAlert, debounce };
