import ActionType from "../constants/constants.js";

const ActionCreator = {
  postReviewRequest: () => {
    return {
      type: ActionType.POST_REVIEW_REQUEST
    };
  },
  postReviewSuccess: () => {
    return {
      type: ActionType.POST_REVIEW_SUCCESS
    };
  },
  postReviewError: () => {
    return {
      type: ActionType.POST_REVIEW_ERROR
    };
  }
};

export default ActionCreator;
