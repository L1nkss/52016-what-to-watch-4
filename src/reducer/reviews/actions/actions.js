import ActionType from "../constants/constants.js";

const ActionCreator = {
  loadFilmReviewsRequest: () => {
    return {
      type: ActionType.LOAD_REVIEWS_REQUEST
    };
  },
  loadFilmReviewsSuccess: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS_SUCCESS,
      payload: reviews
    };
  },
  loadFilmReviewsError: () => {
    return {
      type: ActionType.LOAD_REVIEWS_ERROR
    };
  }
};

export default ActionCreator;
