import ActionType from "../constants/constants.js";

const ActionCreator = {
  loadFilmsRequest: () => {
    return {
      type: ActionType.LOAD_FILMS_REQUEST
    };
  },
  loadFilms: (films) => {
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
