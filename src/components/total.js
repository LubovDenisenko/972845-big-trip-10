export const createTotalTemplate = (mock) => {
  return (`<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${mock.price * 4}</span>
  </p>`);
};

