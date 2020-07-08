import ActionType from "./utils/constants";
import ActionCreator from "./actions/actions";

const initialState = {
  film: null,
  loading: false,
  error: false
};

const Operation = {
  loadFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadPromoFilmRequest())
    return api.get(`/films/promo`)
      .then((response) => dispatch(ActionCreator.loadPromoFilmSuccess(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_FILM_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_PROMO_FILM_SUCCESS:
      return Object.assign({}, state, {film: action.payload, loading: false});
    default:
      return state;
  }
};

export {reducer, Operation};
