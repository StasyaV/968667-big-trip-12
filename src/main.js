'use strict';

const siteHeaderContainer = document.querySelector(`.page-header__container`);
const headerMainTripContainer = siteHeaderContainer.querySelector(`.trip-main`);
const headerTripControls = siteHeaderContainer.querySelector(`.trip-controls`);
const siteMainContainer = document.querySelector(`.page-main`);
const mainContainerElement = siteMainContainer.querySelector(`.trip-events`);

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createHeaderInfoTemplate = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">0</span>
      </p>
    </section>`
  );
};

const createMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};

renderElement(headerMainTripContainer, createHeaderInfoTemplate, `afterbegin`);
renderElement(headerTripControls, createMenuTemplate, `afterbegin`);
