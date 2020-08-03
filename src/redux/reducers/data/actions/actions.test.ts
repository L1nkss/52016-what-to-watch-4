import ActionType from "@redux/reducers/data/constants/constants";
import {ActionCreator} from "@redux/reducers/data/actions/actions";

describe(`Data action creators testing`, () => {
  it(`Action creator return correct action`, () => {
    expect(ActionCreator.loadFilmsRequest()).toEqual({
      type: ActionType.LOAD_FILMS_REQUEST
    });
    expect(ActionCreator.loadFilmsSuccess([{name: `Legend`, genre: `Comedy`, id: 5}])).toEqual({
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Comedy`, id: 5}]
    });
    expect(ActionCreator.loadFilmError()).toEqual({
      type: ActionType.LOAD_FILMS_ERROR
    });
    expect(ActionCreator.changeFilms([{name: `Legend`, genre: `Crime`, id: 5}])).toEqual({
      type: ActionType.CHANGE_FILMS,
      payload: [{name: `Legend`, genre: `Crime`, id: 5}]
    });
  });
});
