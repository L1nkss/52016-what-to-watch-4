import {reducer} from "@redux/reducers/favorite/favorite";
import ActionType from "@redux/reducers/favorite/constants/constants";

describe(`Favorite reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      films: null,
      loading: false,
      error: false
    });
  });
  it(`Should change data state correctly`, () => {
    // Запрос на получение фильмов
    expect(reducer({films: [], loading: false, error: false}, {
      type: ActionType.LOAD_FAVORITE_FILMS_REQUEST
    })).toEqual({
      films: [],
      loading: true,
      error: false
    });
    // Запрос прошел успешно. Получили 1 фильм
    expect(reducer({films: [], loading: true, error: false}, {
      type: ActionType.LOAD_FAVORITE_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Comedy`, id: 10}]
    })).toEqual({
      films: [{name: `Legend`, genre: `Comedy`, id: 10}],
      loading: false,
      error: false
    });
    // Запрос прошел успешно. Получили 2 фильма
    expect(reducer({films: [], loading: true, error: false}, {
      type: ActionType.LOAD_FAVORITE_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Comedy`, id: 10}, {name: `Legend`, genre: `Crime`, id: 10}]
    })).toEqual({
      films: [{name: `Legend`, genre: `Comedy`, id: 10}, {name: `Legend`, genre: `Crime`, id: 10}],
      loading: false,
      error: false
    });
    // Ошибка при запросе
    expect(reducer({films: [], loading: true, error: false}, {
      type: ActionType.LOAD_FAVORITE_FILMS_ERROR
    })).toEqual({
      films: [],
      loading: false,
      error: true
    })
  });
});
