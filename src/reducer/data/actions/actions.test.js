import ActionType from "../utils/constants";
import ActionCreator from "./actions";

describe(`Data action creators work correctly`, () => {
  it(`Action creator return correct action`, () => {
    expect(ActionCreator.loadFilmsRequest()).toEqual({
      type: ActionType.LOAD_FILMS_REQUEST
    });
    expect(ActionCreator.loadFilms([{name: `Legend`, genre: `Crime`}])).toEqual({
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`}]
    });
  });
});
