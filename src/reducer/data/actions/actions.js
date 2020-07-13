import ActionType from "../utils/constants";

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
  }
};

export default ActionCreator;
