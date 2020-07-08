import ActionType from "./utils/constants";
import ActionCreator from "./actions/actions";

const initialState = {
  films: []
};


const Operaiton = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreator.loadFilms(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {films: action.payload});
    default:
      return state;
  }
};

export {reducer, Operaiton};
