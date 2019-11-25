import {createSiteMenuTemplate} from './components/menu.js'
import {createFilterTemplate} from './components/filter'
import {createInfoTemplate} from './components/info.js';
import {createRouteHeaderTemplate} from './components/route-header.js';
import {createCardTemplate} from './components/card.js';
import {createAddAndEditFormTemplate} from './components/add-edit-form.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.trip-main`);
const tripMainInfo = siteMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainInfo, createInfoTemplate(), `afterbegin`);

const tripControls = document.querySelector(`.trip-main__trip-controls`);
render(tripControls, createSiteMenuTemplate(), `afterbegin`);
render(tripControls, createFilterTemplate(), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createRouteHeaderTemplate(), `afterbegin`);

const formTemplate = document.querySelector(`.trip-events__list`);
for (let i = 0; i < 3; i++) {
  render(formTemplate, createCardTemplate(), `afterbegin`);
}
render(formTemplate, createAddAndEditFormTemplate(), `afterbegin`);
