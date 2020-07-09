import ActionType from "../utils/constants";

const ActionCreator = {
  changeActiveGenre: (genre) => {
    return {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: genre
    };
  }
};

export default ActionCreator;
