import ActionType from "./utils/constants";
import ActionCreator from "./actions/actions";
import Adapter from "../utils/adapter";

const initialState = {
  films: [],
  loading: false,
  error: false
};


const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadFilmsRequest());
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(Adapter.convertData(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_FILMS_SUCCESS:
      return Object.assign({}, state, {films: action.payload, loading: false});
    default:
      return state;
  }
};

export {reducer, Operation};
