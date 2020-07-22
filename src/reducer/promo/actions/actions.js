import ActionType from "../constants/constants.js";

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
  },
  loadPromoFilmError: () => {
    return {
      type: ActionType.LOAD_PROMO_FILM_ERROR
    };
  },
  changePromoFilmField: (newValue) => {
    return {
      type: ActionType.CHANGE_PROMO_FILM_FIELD,
      payload: newValue
    };
  }
};

export {ActionCreator};

