const cityNames = [
  `Moscow`, `Paris`, `London`, `Tel-Aviv`, `Milan`, `Hamburg`, `New York`
];

const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const img = [
  `bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeing`, `taxi`, `train`, `transport`, `trip`
];

const additionalOptions = [
  `Add luggage +10 €`, `Switch to comfort class +150 €`, `Add meal +2 €`, `Choose seats +9 €`
];


const generateRandomItem = (array) => {
  let rand = Math.floor(Math.random()*array.length);
  return array[rand]
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomDate = () => {
  const eventDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0,7);
  eventDate.setDate(eventDate.getDate() + diffValue);
  return eventDate
}
const generateRandomPicture = () => {
  return `http://picsum.photos/300/150?r=${Math.random()}`;
}

const getRandomIcon = () => {
  return `img/icons/${generateRandomItem(img)}.png`
}

const getRandomSplicedArray = (arr, maxLength, minLength) => {
  let newArr = arr.slice();
  newArr.sort(function(){
    return Math.random() - 0.5;
  })
  return newArr.slice(0, getRandomIntegerNumber(minLength, maxLength))
}

const generateEvent = () => {
  return {
cityName: generateRandomItem(cityNames),
description: getRandomSplicedArray(description, 3, 1).join(` `),
icon: getRandomIcon(),
additionalOptions: getRandomSplicedArray(additionalOptions, 2, 0),
picture: generateRandomPicture(),
date: getRandomDate(),
  }
}
