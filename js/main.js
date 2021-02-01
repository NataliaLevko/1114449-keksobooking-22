//Функция, возвращающая случайное целое число из переданного диапазона включительно
const randomIntNumber = function (min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if (max <= min || min < 0) {
    console.log('Задайте корректный диапазон');
  }
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const randomFloatNumber = function (minNumber, maxNumber, floatValue) {
  let totalNumber = 0;

  if (minNumber >= 0 && maxNumber > minNumber) {
    totalNumber = Math.random() * (maxNumber - minNumber) + minNumber;
    return totalNumber = totalNumber.toFixed(floatValue);
  }
  if (maxNumber <= minNumber || minNumber < 0) {
    console.log('Задайте корректный диапазон');
  }
}
/*
Во втором задании нет уточнения относительно значения параметра floatValue (количество_знаков_после_запятой).
Сейчас по умолчанию в этом параметре может также передаваться дробное значение, что не очень правильно, как я считаю.
Но в задании нет пояснения, какой должен быть результат, если пользователь передает аргумент floatValue дробный.
*/
