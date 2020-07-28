import ActionType from "@redux/reducers/favorite/constants/constants";
import ActionCreator from "@redux/reducers/favorite/actions/actions";

describe(`Favorite actions creators work correctly`, () => {
  it(`Action creator return correct action`, () => {
    expect(ActionCreator.loadFavoriteFilmsRequest()).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS_REQUEST
    });
    // Загрузили 1 фильм
    expect(ActionCreator.loadFavoriteFilmsSuccess(
      [{name: `Legend`, genre: `Crime`, id: 10}]
    )).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`, id: 10}]
    })
    // Загрузили 2 фильма
    expect(ActionCreator.loadFavoriteFilmsSuccess(
      [{name: `Legend`, genre: `Crime`, id: 10}, {name: `Legend`, genre: `Crime`, id: 16}]
    )).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS_SUCCESS,
      payload: [{name: `Legend`, genre: `Crime`, id: 10}, {name: `Legend`, genre: `Crime`, id: 16}]
    });
    expect(ActionCreator.loadFavoriteFilmsError()).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS_ERROR
    });
  });
});
