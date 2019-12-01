const createMenuMarkup = (item) =>{
return (`<a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${item}</a>`)
}

export const createSiteMenuTemplate = (items) => {
  const menuMarkup = items.map((it, i)=> createMenuMarkup(it, i ===0)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
            ${menuMarkup}
            </nav>`
  );
};
