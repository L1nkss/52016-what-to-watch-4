import ActionCreator from "@redux/reducers/genre/actions/actions";
import ActionType from "@redux/reducers/genre/constants/constants";

describe(`Genre action creators work correctly`, () => {
  it(`Action creator should return correct action`, () => {
    expect(ActionCreator.changeActiveGenre(`Crime`)).toEqual({
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Crime`
    });
  });
});
