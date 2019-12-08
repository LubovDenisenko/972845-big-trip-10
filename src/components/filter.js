const createFilterMarkup = (name, value) =>{
  return (`<div class="trip-filters__filter">
  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}">
  <label class="trip-filters__filter-label" for="filter-everything">${name}</label>
</div>`);
};

export const createFilterTemplate = (filters) => {
  const FilterMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return (
    `<form class="trip-filters" action="#" method="get">
    ${FilterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
};
