import {menuArray} from './mocks/menu-mock.js';
import {filtersArray} from './mocks/filter-mock';
import {generateCardMock} from './mocks/card-edit-mock';
import {transportTypes} from '../src/constants';
import {activityTypes} from '../src/constants';
import {render, RenderPosition} from './utils.js';
import SiteMenu from './components/menu.js';
import SiteFilter from './components/filter.js';
import SiteAddEditForm from './components/add-edit-form.js';
import SiteCard from './components/card.js';
import SiteInfo from './components/info.js';
import SiteRoutHeader from './components/route-header.js';
import SiteTotal from './components/total.js';


const editCard = generateCardMock();
const siteMainElement = document.querySelector(`.trip-main`);
const tripMainInfo = siteMainElement.querySelector(`.trip-main__trip-info`);
render(tripMainInfo, new SiteInfo().getElement(), RenderPosition.AFTERBEGIN);
render(tripMainInfo, new SiteTotal(editCard).getElement(), RenderPosition.BEFOREEND);

const tripControls = document.querySelector(`.trip-main__trip-controls`);
render(tripControls, new SiteMenu(menuArray).getElement(), RenderPosition.AFTERBEGIN);
render(tripControls, new SiteFilter(filtersArray).getElement(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, new SiteRoutHeader().getElement(), RenderPosition.AFTERBEGIN);

const formTemplate = document.querySelector(`.trip-events__list`);
const siteCard = new SiteCard(editCard).getElement();
const siteAddEditForm = new SiteAddEditForm(editCard, transportTypes, activityTypes).getElement();
render(formTemplate, siteCard, RenderPosition.AFTERBEGIN);
const editButton = siteCard.querySelector('.event__rollup-btn');
editButton.addEventListener('click', () => {
  formTemplate.replaceChild(siteAddEditForm, siteCard);
});
const rollUpButton = siteAddEditForm.querySelector('.event__rollup-btn')
rollUpButton.addEventListener('click', () => {
  formTemplate.replaceChild(siteCard, siteAddEditForm);
});
