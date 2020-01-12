import {createElement} from '../utils.js';

const createFilterMarkup = (name, value) => {
  return (`<div class="trip-filters__filter">
  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}">
  <label class="trip-filters__filter-label" for="filter-everything">${name}</label>
</div>`);
};

const createFilterTemplate = (filters) => {
  const filterMarkup = filters.map((it) => createFilterMarkup(it)).join(`\n`);
  return (
    `<form class="trip-filters" action="#" method="get">
    ${filterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
};

export default class SiteFilter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
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
