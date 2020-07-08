import ActionType from "./utils/constants";
import ActionCreator from "./actions/actions";

const initialState = {
  films: [],
  // promoFilm: null,
  loading: false,
  error: false
};


const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreator.loadFilms(response.data)));
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadPromoFilmLoading());
    return api.get(`/films/promo`)
      .then((response) => dispatch(ActionCreator.loadPromoFilmSuccess(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS_LOADING:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_FILMS_SUCCESS:
      return Object.assign({}, state, {films: action.payload, loading: false});
    case ActionType.LOAD_PROMO_FILM_LOADING:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_PROMO_FILM_SUCCESS:
      return Object.assign({}, state, {promoFilm: action.payload, loading: false});
    default:
      return state;
  }
};

export {reducer, Operation};
