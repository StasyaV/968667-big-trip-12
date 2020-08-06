export const render = (container, template) => {
  container.insertAdjacentHTML(DEFAULT_RENDER_PLACE, template);
};

const DEFAULT_RENDER_PLACE = `afterbegin`;

export const getRandomIndex = function (minValue, maxValue) {
  let randomNum = Math.floor(Math.random() * maxValue);
  return randomNum > minValue ? randomNum : minValue;
};
