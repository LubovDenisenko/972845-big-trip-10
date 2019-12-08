import {createSiteMenuTemplate} from './components/menu.js'
import {createFilterTemplate} from './components/filter'
import {createInfoTemplate} from './components/info.js';
import {createRouteHeaderTemplate} from './components/route-header.js';
import {generateArrayOfCards} from './components/card.js';
import {createAddAndEditFormTemplate} from './components/add-edit-form.js';
import {generateMenu} from '../mocks/menu-mock.js';
import {generateFilters} from '../mocks/filter-mock';
import {generateEvent} from '../mocks/card-edit-mock';
import {createTotalTemplate} from './components/total.js'

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const editCard = generateEvent();

const siteMainElement = document.querySelector(`.trip-main`);
const tripMainInfo = siteMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainInfo, createInfoTemplate(), `afterbegin`);
render(tripMainInfo, createTotalTemplate(editCard), `beforeend`);

const menu = generateMenu();
const filter = generateFilters();
const tripControls = document.querySelector(`.trip-main__trip-controls`);
render(tripControls, createSiteMenuTemplate(menu), `afterbegin`);
render(tripControls, createFilterTemplate(filter), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createRouteHeaderTemplate(), `afterbegin`);

const newCardsArray = generateArrayOfCards(editCard);
const formTemplate = document.querySelector(`.trip-events__list`);
for (let card of newCardsArray) {
  render(formTemplate, card, `afterbegin`);
}
render(formTemplate, createAddAndEditFormTemplate(editCard), `afterbegin`);
