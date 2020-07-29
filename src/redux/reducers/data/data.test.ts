import {reducer, Operation} from "@redux/reducers/data/data";
import ActionType from "@redux/reducers/data/constants/constants";
import MockAdapter from "axios-mock-adapter";
import Api from "../../../api";

const testingApi = new Api(() => {}, () => {});

describe(`Data async operation test`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(testingApi.api);
    const dispatch = jest.fn();
    const dataOperation = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, [{fake: true}]);

    dataOperation(dispatch, () => {}, testingApi)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(1, {
          type: ActionType.LOAD_FILMS_REQUEST
        },
        {
          type: ActionType.LOAD_FILMS_SUCCESS,
          payload: [{fake: true}]
        });
      });
  });
});

describe(`Data reducer test`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      films: [],
      loading: false,
      error: false
    });
  });
  it(`Should change state correctly`, () => {
    // Запрос на сервер на получение данных
    expect(reducer({films: [], loading: false, error: false}, {
      type: ActionType.LOAD_FILMS_REQUEST
    })).toEqual({
      films: [],
      loading: true,
      error: false
    });
    // Запрос прошел успешно (получили массив из 1 фильма)
    expect(reducer({films: [], loading: true, error: false}, {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`}]
    })).toEqual({
      films: [{name: `Legend`, genre: `Crime`}],
      loading: false,
      error: false
    });
    // Запрос прошел успешно (получили массив из 2 фильма)
    expect(reducer({films: [], loading: true, error: false}, {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`}, {name: `Legend`, genre: `Crime`}]
    })).toEqual({
      films: [{name: `Legend`, genre: `Crime`}, {name: `Legend`, genre: `Crime`}],
      loading: false,
      error: false
    });
    // Запрос прошел с ошибкой
    expect(reducer({films: [], loading: true, error: false}, {
      type: ActionType.LOAD_FILMS_ERROR
    })).toEqual({
      films: [],
      loading: false,
      error: true
    });
    // Изменение существующего массива данных
    expect(reducer({films: [{name: `Legend`, genre: `Crime`, id: 5}], loading: false, error: false}, {
      type: ActionType.CHANGE_FILMS,
      payload: [{name: `Legend`, genre: `Comedy`, id: 5}]
    })).toEqual({
      films: [{name: `Legend`, genre: `Comedy`, id: 5}],
      loading: false,
      error: false
    });
  });
});
