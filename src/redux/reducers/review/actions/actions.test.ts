import ActionType from "@redux/reducers/review/constants/constants";
import ActionCreator from "@redux/reducers/review/actions/actions";

describe(`Review post action creators work correctly`, () => {
  it(`Action creator should return correct action`, () => {
    expect(ActionCreator.postReviewRequest()).toEqual({
      type: ActionType.POST_REVIEW_REQUEST
    });
    expect(ActionCreator.postReviewSuccess()).toEqual({
      type: ActionType.POST_REVIEW_SUCCESS
    });
    expect(ActionCreator.postReviewError()).toEqual({
      type: ActionType.POST_REVIEW_ERROR
    });
  });
});
