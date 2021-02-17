//Функция, возвращающая случайное целое число из переданного диапазона включительно
const randomIntNumber = function (min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
//floatValue - кол-во знаков после запятой
const randomFloatNumber = function (minNumber, maxNumber, floatValue) {
  let totalNumber = 0;

  if (minNumber >= 0 && maxNumber > minNumber) {
    floatValue = Math.round(floatValue);
    totalNumber = Math.random() * (maxNumber - minNumber) + minNumber;
    return totalNumber = totalNumber.toFixed(floatValue);
  }
  return false;
}

export {randomIntNumber, randomFloatNumber};
