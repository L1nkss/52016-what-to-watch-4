import {reducer} from "./data";
import ActionType from "./utils/constants";

describe(`Data reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      films: [],
      loading: false,
      error: false
    });
  });
  it(`Should change data state correctly`, () => {
    expect(reducer({films: [], loading: false, error: false}, {
      type: ActionType.LOAD_FILMS_REQUEST
    })).toEqual({
      films: [],
      loading: true,
      error: false
    });
    expect(reducer({films: [], loading: false, error: false}, {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`}]
    })).toEqual({
      films: [{name: `Legend`, genre: `Crime`}],
      loading: false,
      error: false
    });
    expect(reducer({films: [{name: `Legend`, genre: `Crime`}], loading: false, error: false}, {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: [{name: `Snatch`, genre: `Comedy`}]
    })).toEqual({
      films: [{name: `Snatch`, genre: `Comedy`}],
      loading: false,
      error: false
    });
  });
});
