import {createElement} from '../utils.js';

const createAddEditMarkup = (data) => {
  return (`<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${data.id}-1" type="checkbox" name="${data.id}" >
      <label class="event__offer-label" for="${data.id}-1">
      <span class="event__offer-title">${data.name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${data.price}</span>
      </label>
  </div>`);
};

const createInputMarkup = (constant) => {
  return (
    `<div class="event__type-item">
      <input id="event-type-${constant}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${constant}">
      <label class="event__type-label  event__type-label--${constant}" for="event-type-${constant}-1">${constant}</label>
    </div>`
  );
};

const createAddAndEditFormTemplate = (data, constantsTransfer, constantsActivity) => {
  const addAndEditFormTemplate = data.additionalOptions.map((it) => createAddEditMarkup(it)).join(`\n`);
  const inputTemplateTransfer = constantsTransfer.map((it) => createInputMarkup(it)).join(`\n`);
  const inputTemplateActivity = constantsActivity.map((it) => createInputMarkup(it)).join(`\n`);
  return (
    `<li class="trip-events__item">
    <form class="event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${data.activity.icon}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>
              ${inputTemplateTransfer}
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>
              ${inputTemplateActivity}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${data.activity.name} at
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${data.cityName}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${data.date}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${data.dateEnd}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${data.price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>

        <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
        <label class="event__favorite-btn" for="event-favorite-1">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </label>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>

      <section class="event__details">

        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
          ${addAndEditFormTemplate}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${data.description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
            ${data.pictures.join(`\n`)}
            </div>
          </div>
        </section>
      </section>
    </form>
    </li> `
  );
};

export default class SiteAddEditForm {
  constructor(data, constantsTransfer, constantsActivity) {
    this._data = data;
    this._element = null;
    this._constantsTransfer = constantsTransfer;
    this._constantsActivity = constantsActivity;
  }

  getTemplate() {
    return createAddAndEditFormTemplate(this._data, this._constantsTransfer, this._constantsActivity);
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
