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




let getAuthor = function () {
  return {
    avatar: `img/avatars/user0${randomIntNumber(1, 8)}.png`,
  }
}


let getLocation = function () {
  return {
      x: randomFloatNumber (35.65000, 35.70000, 5),
      y: randomFloatNumber (139.70000, 139.80000, 5),
      }
  }

//ничего не передается в параметрах функции
let getOffer = function () {
  let types = ['palace', 'flat', 'house', 'bungalow'];
  let randomNumberType = randomIntNumber (0, types.length - 1);
  let photo = [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
    ];

    let createPhoto = () => {
    let randomTotalPhotos = 0; //случайная длина из значений
    randomTotalPhotos = randomIntNumber(1, photo.length);
    let randomValue = [];
    for (let i = 0; i < randomTotalPhotos; i++) {
      randomValue.push(photo[randomIntNumber (0, photo.length - 1)]);
    }
    return randomValue;
    }

    let feature = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

    let createFeature = () => {
      let randomTotalFeature = 0; //случайная длина из значений
      randomTotalFeature = randomIntNumber(1, feature.length);
      let randomValueFeature = [];
      for (let i = 0; i < randomTotalFeature; i++) {
          let currentValue = feature[randomIntNumber (0, feature.length - 1)];
          if (randomValueFeature.includes(currentValue) !== true)  {
              randomValueFeature.push(currentValue);
          }
          randomValueFeature.slice(currentValue);
      }
      return randomValueFeature;
    }


  return {
    title: 'Новое интересное объявление',
    address: '', //пустая строчка адреса
    price: randomIntNumber (0, 1000000),
    type: types [randomNumberType],
    rooms: randomIntNumber (0, 100),
    guests: randomIntNumber (0, 3),
    checkin: randomIntNumber(12, 14) + ':00',
    checkout: randomIntNumber(12, 14) + ':00',
    features: createFeature (),
    description: 'Просторное светлое помещение с высокими потолками',
    photos: createPhoto (),
  }
}

const countNumber = 10;


function createTotalObject () {

  let locationValue = getLocation ();

    let newObj = {
    author: getAuthor(),
    offer: getOffer(locationValue),
    location: locationValue,
    }
    newObj.offer[address] = String(locationValue.x) + ', ' + String(locationValue.y);
  return newObj;
}


const createTotalArray = new Array(countNumber).fill(null).map(() =>
createTotalObject ());
console.log(createTotalArray);



//или можно так:
/*const createTotalArray = () => {
let resultArray = [];
for (let i = 0; i < countNumber; i++) {
  resultArray.push(createTotalObject ());
}
return resultArray;
}
*/






