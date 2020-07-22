import ActionType from "./constants/constants.js";
import ActionCreator from "./actions/actions";

const initialState = {
  reviews: null,
  loading: false,
  error: false
};

const Operation = {
  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadFilmReviewsRequest());
    return api.getReviews(id)
      .then((response) => {
        dispatch(ActionCreator.loadFilmReviewsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(ActionCreator.loadFilmReviewsError());
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS_REQUEST:
      return Object.assign({}, state, {loading: true, error: false});
    case ActionType.LOAD_REVIEWS_SUCCESS:
      return Object.assign({}, state, {loading: false, reviews: action.payload});
    case ActionType.LOAD_REVIEWS_ERROR:
      return Object.assign({}, state, {loading: false, error: true});
    default:
      return state;
  }
};

export {reducer, Operation};
