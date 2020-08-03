import ActionType from "./constants/constants";
import {ActionCreator} from "./actions/actions";
import Adapter from "../../utils/adapter";
import {IDataState} from "./types/types";

const initialState: IDataState = {
  films: [],
  loading: false,
  error: false
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadFilmsRequest());
    return api.getFilms()
      .then((response) => {
        dispatch(ActionCreator.loadFilmsSuccess(Adapter.convertData(response.data)));
      })
      .catch(() => dispatch(ActionCreator.loadFilmError()));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_FILMS_SUCCESS:
      return Object.assign({}, state, {films: action.payload, loading: false});
    case ActionType.LOAD_FILMS_ERROR:
      return Object.assign({}, state, {loading: false, error: true});
    case ActionType.CHANGE_FILMS:
      return Object.assign({}, state, {films: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation};
