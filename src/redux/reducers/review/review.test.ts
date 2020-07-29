import {reducer} from "@redux/reducers/review/review";
import ActionType from "@redux/reducers/review/constants/constants";

describe(`Review post reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      error: false,
    });
  });
  it(`Should change review status correctly`, () => {
    // Запрос на отправку отзыва о фильме
    expect(reducer({loading: false, error: false}, {
      type: ActionType.POST_REVIEW_REQUEST
    })).toEqual({
      loading: true,
      error: false
    });
    // Данные отправлены
    expect(reducer({loading: true, error: false}, {
      type: ActionType.POST_REVIEW_SUCCESS
    })).toEqual({
      loading: false,
      error: false
    });
    // Ошибка при запросе
    expect(reducer({loading: true, error: false}, {
      type: ActionType.POST_REVIEW_ERROR
    })).toEqual({
      loading: false,
      error: true
    });
  });
});
