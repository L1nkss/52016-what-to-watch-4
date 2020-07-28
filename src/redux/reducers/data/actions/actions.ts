import ActionType from "../constants/constants";

const ActionCreator = {
  loadFilmsRequest: () => {
    return {
      type: ActionType.LOAD_FILMS_REQUEST
    };
  },
  loadFilmsSuccess: (films) => {
    return {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: films
    };
  },
  loadFilmError: () => {
    return {
      type: ActionType.LOAD_FILMS_ERROR
    };
  },
  changeFilms: (films) => {
    return {
      type: ActionType.CHANGE_FILMS,
      payload: films
    };
  }
};

export {ActionCreator};
