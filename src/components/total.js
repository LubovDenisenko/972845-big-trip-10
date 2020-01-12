import {createElement} from '../utils.js'
const createTotalTemplate = (data) => {
  return (`<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${data.price * 4}</span>
  </p>`);
};

export default class SiteTotal {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  getTemplate() {
    return createTotalTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null
  }
}
