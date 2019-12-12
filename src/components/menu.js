const createMenuMarkup = (item) => {
  return (`<a class="trip-tabs__btn" href="#">${item}</a>`);
};

export const createSiteMenuTemplate = (items) => {
  const menuMarkup = items.map((it) => createMenuMarkup(it)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
            ${menuMarkup}
            </nav>`
  );
};
