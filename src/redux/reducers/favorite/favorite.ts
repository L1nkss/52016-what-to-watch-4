import ActionType from "./constants/constants";
import ActionCreator from "./actions/actions";
import {ActionCreator as ActionCreatorData} from "../data/actions/actions";
import {ActionCreator as ActionCreatorPromo} from "../promo/actions/actions";
import IInitialState from "./types/types";

const initialState:IInitialState = {
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
        // Получаем список всех фильмов (делаем spread оператор, чтобы получить новый массив)
        const films = [...getState().DATA.films];
        // Получаем промо фильм
        const promoFilm = Object.assign({}, getState().PROMO.film);
        // Находим индекс элемента, у которого изменился статус фильма
        const idx = films.findIndex((film) => film.id === id);
        // Меняем статус внутри фильма
        films[idx].isFavorite = Boolean(status);
        // Вызываем диспачт для обновления глобального стейта
        dispatch(ActionCreatorData.changeFilms(films));
        // Сравниваем изменившийся фильм с промо фильмом, если совпадает, меняем информацию
        if (promoFilm.id === id) {
          promoFilm.isFavorite = Boolean(status);
          dispatch(ActionCreatorPromo.changePromoFilmField(promoFilm));
        }
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
