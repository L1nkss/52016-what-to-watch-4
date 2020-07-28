import {reducer} from "@redux/reducers/reviews/reviews";
import ActionType from "@redux/reducers/reviews/constants/constants";

describe(`Reviews reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      reviews: null,
      loading: false,
      error: false
    });
  });
  it(`Should change reviews status correctly`, () => {
    // Запрос на получение отзывов о фильме
    expect(reducer({reviews: null, loading: false, error: false}, {
      type: ActionType.LOAD_REVIEWS_REQUEST
    })).toEqual({
      reviews: null,
      loading: true,
      error: false
    });
    // Успешная загрузка отзывов
    expect(reducer({reviews: null, loading: true, error: false}, {
      type: ActionType.LOAD_REVIEWS_SUCCESS,
      payload: [{rating: 10, comment: `Cool`}]
    })).toEqual({
      reviews: [{rating: 10, comment: `Cool`}],
      loading: false,
      error: false
    });
    // Ошибка при загрузке
    expect(reducer({reviews: null, loading: true, error: false}, {
      type: ActionType.LOAD_REVIEWS_ERROR
    })).toEqual({
      reviews: null,
      loading: false,
      error: true
    });
  });
});
