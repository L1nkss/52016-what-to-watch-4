import ActionType from "../utils/constants";

const ActionCreator = {
  loadFilmDetailsRequest: () => {
    return {
      type: ActionType.LOAD_FILM_DETAIL_REQUEST
    };
  },
  loadFilmDetailsSuccess: (details) => {
    return {
      type: ActionType.LOAD_FILM_DETAIL_SUCCESS,
      payload: details
    };
  },
  loadFilmDetailsERROR: () => {
    return {
      type: ActionType.LOAD_FILM_DETAIL_ERROR
    };
  }
};

export default ActionCreator;
