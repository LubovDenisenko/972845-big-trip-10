export const createTotalTemplate = (data) => {
  return (`<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${data.price * 4}</span>
  </p>`);
};
