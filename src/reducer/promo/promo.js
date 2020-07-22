import ActionType from "./constants/constants.js";
import {ActionCreator} from "./actions/actions";
import Adapter from "../utils/adapter";

const initialState = {
  film: null,
  loading: false,
  error: false
};

const Operation = {
  loadFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadPromoFilmRequest());
    return api.getPromoFilm()
      .then((response) => dispatch(ActionCreator.loadPromoFilmSuccess(Adapter.convertItem(response.data))))
      .catch(() => dispatch(ActionCreator.loadPromoFilmError()));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_FILM_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_PROMO_FILM_SUCCESS:
      return Object.assign({}, state, {film: action.payload, loading: false});
    case ActionType.LOAD_PROMO_FILM_ERROR:
      return Object.assign({}, state, {loading: false, error: true});
    case ActionType.CHANGE_PROMO_FILM_FIELD:
      return Object.assign({}, state, {film: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
