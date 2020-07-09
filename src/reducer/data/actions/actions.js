import ActionType from "../utils/constants";

const ActionCreator = {
  loadFilmsLoading: () => {
    return {
      type: ActionType.LOAD_FILMS_LOADING
    };
  },
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: films
    };
  },
  loadFilmsError: () => {
    return {
      type: ActionType.LOAD_FILMS_ERROR
    };
  },
  loadPromoFilmLoading: () => {
    return {
      type: ActionType.LOAD_PROMO_FILM_LOADING
    };
  },
  loadPromoFilmSuccess: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: film
    };
  },
};

export default ActionCreator;
