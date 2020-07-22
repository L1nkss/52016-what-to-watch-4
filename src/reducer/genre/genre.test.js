import {reducer} from "./genre";
import ActionType from "./constants/constants.js";

describe(`Genre reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`
    });
  });
  it(`Should correctly change genre`, () => {
    expect(reducer({genre: `All genres`}, {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: `Crime`
    })).toEqual({
      genre: `Crime`
    });
  });
});
