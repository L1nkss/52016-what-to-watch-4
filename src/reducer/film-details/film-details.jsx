import ActionType from "./utils/constants";
import ActionCreator from "./actions/actions";

const initialState = {
  filmDetails: null,
  loading: false,
  error: false
};

// const Operation = {
//   loadFilmDetails: (id) => (dispatch, getState, api) => {
//     dispatch(ActionCreator.loadFilmDetailsRequest());
//     return api.get(`/`)
//   }
// };
