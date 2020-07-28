import reducer from "@redux/reducers/genre/genre";
import ActionType from "@redux/reducers/genre/constants/constants";

describe(`Genre reducer test`, () => {
  it(`Should return inital state`, () => {
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
    })
  })
});
