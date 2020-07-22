import ActionType from "@reducer/favorite/constants/constants";
import ActionCreator from "@reducer/favorite/actions/actions";
import {ActionCreator as ActionCreatorData} from "../data/actions/actions";

const initialState = {
  films: null,
  loading: false,
  error: false
};

const Operation = {
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadFavoriteFilmsRequest());
    return api.getFavorite()
      .then((response) => dispatch(ActionCreator.loadFavoriteFilmsSuccess(response.data)));
  },
  postFavoriteFilm: (id, status) => (dispatch, getState, api) => {
    return api.postFavoriteFilm(id, status)
      .then(() => {
        // Получаем список всех фильмов
        const films = getState().DATA.films;
        // Находим индекс элемента, у которого изменился статус фильма
        const idx = films.findIndex((film) => film.id === id);
        // Меняем статус внутри фильма
        films[idx].isFavorite = Boolean(status);
        // Вызываем диспачт для обновления глобального стейта
        dispatch(ActionCreatorData.changeFilms(films));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_FILMS_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.LOAD_FAVORITE_FILMS_SUCCESS:
      return Object.assign({}, state, {loading: false, films: action.payload});
    case ActionType.LOAD_FAVORITE_FILMS_ERROR:
      return Object.assign({}, state, {loading: false, error: true});
    default:
      return state;
  }
};

export {reducer, Operation};
