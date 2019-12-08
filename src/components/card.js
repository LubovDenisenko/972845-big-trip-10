export const createCardTemplate = (mock) => {
  return (
    ` <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="${mock.icon}" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${mock.activityName} at ${mock.cityName}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">${mock.time}</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">${mock.time}</time>
                      </p>
                      <p class="event__duration">0H 0M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${mock.price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">${mock.optionName}</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">${mock.price}</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
          </li>`
  );
};
const cardsArray = [];
export const generateArrayOfCards = (mock) => {
  for (let i = 0; i < 3; i++) {
    cardsArray.push(createCardTemplate(mock));
  }
  return cardsArray;
};
