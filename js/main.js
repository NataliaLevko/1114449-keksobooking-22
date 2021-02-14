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



const authorElement = {
  avatar: `img/avatars/user0${randomIntNumber(1, 8)}.png`,
};

const offerElement = {
    title: 'Новое интересное объявление',
    description: 'Просторное светлое помещение с высокими потолками',
};




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

let locationElement = {
  x: randomFloatNumber (35.65000, 35.70000, 5),
  y: randomFloatNumber (139.70000, 139.80000, 5),
};

offerElement.address = String(locationElement.x) + ', ' + String(locationElement.y);
offerElement.price = randomIntNumber (0, 1000000);
offerElement.checkin = randomIntNumber(12, 14) + ':00';
offerElement.checkout = randomIntNumber(12, 14) + ':00';
offerElement.rooms = randomIntNumber (0, 100);
offerElement.guests = randomIntNumber (0, 3);
offerElement.type = types [randomNumberType];
offerElement.features = createFeature ();

/*const createTotalObject = () => {
  return {
  author: authorElement,
  offer: offerElement,
  location: locationElement,
  };
};*/

const createTotalArray = new Array(10).fill(null).map(() =>
createTotalObject ());
console.log(createTotalArray);




//первый вариант
function createTotalObject () {
  let newObj = {
    author: authorElement,
    offer: offerElement,
    location: locationElement,
  };
  for (let i = 0; i < 10; i++) {
   //newObj += newObj[i];
   //console.log(newObj);
  }
  return newObj;
}


//второй вариант
function createTotalObject () {
  for (let i = 0; i < 10; i++) {
    let newObj = {
    author: authorElement,
    offer: offerElement,
    location: locationElement,
    };
    let totalObject = Object.create(newObj); //здесь как то нужно добавлять новый объекты в результирующий объект, но не знаю как.
    //console.log(totalObject);
    }
  return totalObject;
}

//еще попытки решить это как то по другому
/*function* createTotalObject() {
  let index = 0;
  while(index < 10)
      yield index++;
      author = authorElement;
      offer = offerElement;
      location = locationElement;
}

var gen = createTotalObject();
