import ActionType from "../utils/constants";

const ActionCreator = {
  loadPromoFilmRequest: () => {
    return {
      type: ActionType.LOAD_PROMO_FILM_REQUEST
    };
  },
  loadPromoFilmSuccess: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: film
    };
  }
};

export default ActionCreator;

