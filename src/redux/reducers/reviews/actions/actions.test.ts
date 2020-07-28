import ActionType from "@redux/reducers/reviews/constants/constants";
import ActionCreator from "@redux/reducers/reviews/actions/actions";

describe(`Reviews action creators work correctly`, () => {
  it(`Action creator should return correct action`, () => {
    expect(ActionCreator.loadFilmReviewsRequest()).toEqual({
      type: ActionType.LOAD_REVIEWS_REQUEST
    });
    expect(ActionCreator.loadFilmReviewsSuccess([{rating: 10, comment: `Cool`}])).toEqual({
      type: ActionType.LOAD_REVIEWS_SUCCESS,
      payload: [{rating: 10, comment: `Cool`}]
    });
    expect(ActionCreator.loadFilmReviewsError()).toEqual({
      type: ActionType.LOAD_REVIEWS_ERROR
    });
  })
});
