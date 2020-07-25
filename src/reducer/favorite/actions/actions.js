import ActionType from "redux/favorite/constants/constants";

const ActionCreator = {
  loadFavoriteFilmsRequest: () => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS_REQUEST
    };
  },
  loadFavoriteFilmsSuccess: (films) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS_SUCCESS,
      payload: films
    };
  },
  loadFavoriteFilmsError: () => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS_ERRORLo
    };
  }
};

export default ActionCreator;
