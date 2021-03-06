import {createElement} from '../utils.js';

const createCardTemplate = (data) => {
  return (
    ` <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${data.activity.icon}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${data.activity.name} at ${data.cityName}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">${data.time}</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">${data.time}</time>
                      </p>
                      <p class="event__duration">0H 0M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${data.price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">${data.optionName}</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">${data.price}</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
          </li>`
  );
};

export default class SiteCard {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  getTemplate() {
    return createCardTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
