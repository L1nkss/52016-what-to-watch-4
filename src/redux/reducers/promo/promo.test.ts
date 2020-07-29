import {reducer} from "@redux/reducers/promo/promo";
import ActionType from "@redux/reducers/promo/constants/constants";

describe(`Promo reducer test`, () => {
  it(`Should return inital state`, () => {
    expect(reducer(undefined, {})).toEqual({
      film: {},
      loading: false,
      error: false
    });
  });
  it(`Should change promo status correctly depens on inbox values`, () => {
    // Запрос на фильм
    expect(reducer({film: {}, loading: false, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_REQUEST
    })).toEqual({
      film: {},
      loading: true,
      error: false
    });
    // Запрос на фильм прошел успешно
    expect(reducer({film: {}, loading: true, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_SUCCESS,
      payload: {name: `Legend`, genre: `Crime`, id: 1}
    })).toEqual({
      film: {name: `Legend`, genre: `Crime`, id: 1},
      loading: false,
      error: false
    });
    // Запрос упал с ошибкой
    expect(reducer({film: {}, loading: true, error: false}, {
      type: ActionType.LOAD_PROMO_FILM_ERROR
    })).toEqual({
      film: {},
      loading: false,
      error: true
    });
    // Изменить поле в фильме
    expect(reducer({film: {name: `Legend`, genre: `Crime`, id: 1}, loading: false, error: false}, {
      type: ActionType.CHANGE_PROMO_FILM_FIELD,
      payload: {name: `Legend`, genre: `Comedy`, id: 1}
    })).toEqual({
      film: {name: `Legend`, genre: `Comedy`, id: 1},
      loading: false,
      error: false
    });
  });
});
