import ActionCreator from "./actions";
import ActionType from "../constants/constants.js";

describe(`Genre action creators work correctly`, () => {
  it(`Action creator should return correct action`, () => {
    expect(ActionCreator.changeActiveGenre(`Crime`)).toEqual({
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Crime`
    });
  });
});
