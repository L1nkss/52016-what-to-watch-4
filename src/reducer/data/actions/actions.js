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
};

export default ActionCreator;
