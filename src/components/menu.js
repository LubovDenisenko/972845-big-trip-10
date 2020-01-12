import {createElement} from '../utils.js';
const createMenuMarkup = (item) => {
  return (`<a class="trip-tabs__btn" href="#">${item}</a>`);
};

const createSiteMenuTemplate = (items) => {
  const menuMarkup = items.map((it) => createMenuMarkup(it)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
            ${menuMarkup}
            </nav>`
  );
};

export default class SiteMenu {
  constructor(items) {
    this._items = items;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._items);
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
