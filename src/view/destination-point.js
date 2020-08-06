import {getRandomIndex} from "../util.js";
import {typeOfDestinationPoint} from "../const.js";
import {externalOprionsList} from "../const.js";

const descriptionList = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const townsList = [`Amsterdam`, `Chamonix`, `Geneva`];

const generateDescriptionLength = () => {
  const maxLengthDescription = 5;
  const minLengthDescription = 1;
  return getRandomIndex(minLengthDescription, maxLengthDescription);
};

const generateDescription = () => {
  const description = ``;
  for (let i = 0; i < generateDescriptionLength(); i++) {
    description += descriptionList[i];
  }
  return description;
};

const generateOption = () => {
  const element = externalOprionsList[getRandomIndex(0, externalOprionsList.lenght)];
  return element.name + element.price;
};

const generateExternalOptionsList = () => {
  const options = [];
  const minOptionsCount = 0;
  const maxOptionsCount = 5;
  const optionsCount = getRandomIndex(minOptionsCount, maxOptionsCount);

  for (let i = 0; i < optionsCount; i++) {
    options.push(generateOption());
  }
  return options;
};

console.log(generateExternalOptionsList());

const generateDestinationPoint = () => {
  const destinationPoint = {
    typeOfPoint: typeOfDestinationPoint[getRandomIndex(0, typeOfDestinationPoint.length)],
    destinationPoint: townsList[getRandomIndex(0, townsList.length)],

    info: {
      description: generateDescription(),
      photos: `http://picsum.photos/248/152?r=${Math.random()}`
    }
  };

  return destinationPoint;
};

export const createDestinationPointsTemplate = () => {
  return (
    `<ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">
        <li class="trip-events__item">
          <div class="event">
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
            </div>
            <h3 class="event__title">Taxi to Amsterdam</h3>

            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
                &mdash;
                <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
              </p>
              <p class="event__duration">30M</p>
            </div>

            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">20</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              <li class="event__offer">
                <span class="event__offer-title">Order Uber</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">20</span>
               </li>
            </ul>

            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
        </li>


        </ul>
    </li>
  </ul>`
  );
};
