import {createMenuTemplate} from "./view/menu.js";
import {createTripInfoTemplate} from "./view/trip-info.js";
import {createFilterTemplate} from "./view/filter.js";
import {createDestinationPointsTemplate} from "./view/destination-point.js";
import {createFirstDirectionTemplate} from "./view/direction.js";
import {createSortTemplate} from "./view/sort.js";

const DEFAULT_RENDER_PLACE = `afterbegin`;

const render = (container, template) => {
  container.insertAdjacentHTML(DEFAULT_RENDER_PLACE, template);
};

const siteHeaderContainer = document.querySelector(`.page-header__container`);
const headerMainTripContainer = siteHeaderContainer.querySelector(`.trip-main`);
const headerTripControls = siteHeaderContainer.querySelector(`.trip-controls`);
const siteMainContainer = document.querySelector(`.page-main`);
const tripEventsContainer = siteMainContainer.querySelector(`.trip-events`);

render(headerMainTripContainer, createTripInfoTemplate());
render(headerTripControls, createFilterTemplate());
render(headerTripControls, createMenuTemplate());
render(tripEventsContainer, createDestinationPointsTemplate());
render(tripEventsContainer, createFirstDirectionTemplate());
render(tripEventsContainer, createSortTemplate());
