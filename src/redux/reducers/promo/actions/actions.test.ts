import ActionType from "@redux/reducers/promo/constants/constants";
import {ActionCreator} from "@redux/reducers/promo/actions/actions";

describe(`Promo action creators work correctly`, () => {
  it(`Action creator should return correct action`, () => {
    expect(ActionCreator.loadPromoFilmRequest()).toEqual({
      type: ActionType.LOAD_PROMO_FILM_REQUEST
    });
    expect(ActionCreator.loadPromoFilmSuccess({name: `Legend`, id: 10})).toEqual({
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: {name: `Legend`, id: 10}
    });
    expect(ActionCreator.loadPromoFilmError()).toEqual({
      type: ActionType.LOAD_PROMO_FILM_ERROR
    });
    expect(ActionCreator.changePromoFilmField({name: `Legend`, id: 10})).toEqual({
      type: ActionType.CHANGE_PROMO_FILM_FIELD,
      payload: {name: `Legend`, id: 10}
    });
  });
});
