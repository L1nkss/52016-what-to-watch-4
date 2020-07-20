import ActionType from "./utils/constants";
import ActionCreator from "./actions/actions";
import history from "../../utils/history";
import {RoutePathes} from "../../utils/constans";

const initialState = {
  loading: false,
  error: false,
  reviews: null
};
const Operation = {
  postReview: (id, data) => (dispatch, getState, api) => {
    dispatch(ActionCreator.postReviewRequest());
    return api.postReview(id, data)
      .then(() => {
        dispatch(ActionCreator.postReviewSuccess());
        history.push(`${RoutePathes.FILM_DETAIL}/${id}`);
      })
      .catch(() => {
        dispatch(ActionCreator.postReviewError());
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POST_REVIEW_REQUEST:
      return Object.assign({}, state, {loading: true, error: false});
    case ActionType.POST_REVIEW_SUCCESS:
      return Object.assign({}, state, {loading: false});
    case ActionType.POST_REVIEW_ERROR:
      return Object.assign({}, state, {loading: false, error: true});
    default:
      return state;
  }
};

export {reducer, Operation};

