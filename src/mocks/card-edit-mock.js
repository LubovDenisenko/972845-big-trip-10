const cityNames = [
  `Moscow`, `Paris`, `London`, `Tel-Aviv`, `Milan`, `Hamburg`, `New York`
];

const sentences = [
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

const activities = [
  {
    name: `Bus`,
    icon: `bus`,
  },
  {
    name: `Transport`,
    icon: `transport`,
  },
  {
    name: `Check`,
    icon: `check-in`,
  },
  {
    name: `Drive`,
    icon: `drive`,
  },
  {
    name: `Flight`,
    icon: `flight`,
  },
  {
    name: `Restaurant`,
    icon: `restaurant`,
  },
  {
    name: `Ship`,
    icon: `ship`,
  },
  {
    name: `Sightseeing`,
    icon: `sightseeing`,
  },
  {
    name: `Taxi`,
    icon: `taxi`,
  },
  {
    name: `Trip`,
    icon: `trip`,
  },
  {
    name: `Train`,
    icon: `train`,
  },
];

const additionalOptions = [
  {
    id: `event-offer-luggage`,
    name: `Add luggage`,
    price: `+10 €`,
  },
  {
    id: `event-offer-comfort`,
    name: `Switch to comfort class`,
    price: `+150 €`
  },
  {
    id: `event-offer-meal`,
    name: `Add meal`,
    price: `+2 €`,
  },
  {
    id: `event-offer-seats`,
    name: `Choose seats`,
    price: `+9 €`,
  }
];

const getRandomArrayItem = (array) => {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getOptionsArray = (arr) => {
  const makeRandomArr = (array) => {
    return array.sort(() => {
      return Math.random() - 0.5;
    });
  };
  const newArrayOfOptions = makeRandomArr(arr);
  return newArrayOfOptions.slice(0, getRandomIntegerNumber(0, 3));
};

const getRandomDate = () => {
  return getRandomIntegerNumber(1, 31) + `/0` + getRandomIntegerNumber(1, 9) + `/19 ` + getRandomIntegerNumber(1, 12) + `:` + getRandomIntegerNumber(10, 59);
};

const generateRandomPicture = () => {
  return ` <img class="event__photo" src="http://picsum.photos/300/150?r=${Math.random()}" alt="Event photo">`;
};

const generateArrayOfPhotos = () => {
  const photosArray = [];
  for (let i = 0; i < 4; i++) {
    photosArray.push(generateRandomPicture());
  }
  return photosArray;
};

const getRandomSplicedArray = (arr, maxLength, minLength) => {
  const newArr = arr.slice();
  newArr.sort(function () {
    return Math.random() - 0.5;
  });
  return newArr.slice(0, getRandomIntegerNumber(minLength, maxLength));
};

const getRandomTime = () => {
  return getRandomIntegerNumber(1, 12) + `:` + getRandomIntegerNumber(10, 59);
};

export const generateCardMock = () => {
  return {
    activity: getRandomArrayItem(activities),
    cityName: getRandomArrayItem(cityNames),
    description: getRandomSplicedArray(sentences, 3, 1).join(` `),
    additionalOptions: getOptionsArray(additionalOptions),
    optionName: additionalOptions[getRandomIntegerNumber(0, 3)].name,
    pictures: generateArrayOfPhotos(),
    date: getRandomDate(),
    time: getRandomTime(),
    dateEnd: getRandomDate(),
    price: getRandomIntegerNumber(0, 500),
  };
};
