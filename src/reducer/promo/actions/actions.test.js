import ActionType from "../constants/constants.js";
import {ActionCreator} from "./actions";

describe(`Promo action creators work correctly`, () => {
  it(`Action creator should return correct action`, () => {
    expect(ActionCreator.loadPromoFilmRequest()).toEqual({
      type: ActionType.LOAD_PROMO_FILM_REQUEST
    });
    expect(ActionCreator.loadPromoFilmSuccess({name: `Legend`})).toEqual({
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: {name: `Legend`}
    });
  });
});
