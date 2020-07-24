import {reducer} from "./promo";
import ActionType from "./constants/constants.js";

describe(`Promo reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      film: {},
      loading: false,
      error: false
    });
  });
  it(`Should change promo status correctly depends on inbox values`, () => {
    expect(reducer({film: {}, loading: false, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_REQUEST
    })).toEqual({
      film: {}, loading: true, error: false
    });
    expect(reducer({film: {}, loading: false, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: []
    })).toEqual({
      film: [], loading: false, error: false
    });
    expect(reducer({film: {}, loading: false, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: [{name: `Legend`}]
    })).toEqual({
      film: [{name: `Legend`}], loading: false, error: false
    });
    expect(reducer({film: {}, loading: false, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`}, {name: `Snatch`, genre: `Comedy`}]
    })).toEqual({
      film: [{name: `Legend`, genre: `Crime`}, {name: `Snatch`, genre: `Comedy`}], loading: false, error: false
    });
  });
});
