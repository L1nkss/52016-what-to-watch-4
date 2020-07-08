import ActionType from "../utils/constants";

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  }
};

export default ActionCreator;
