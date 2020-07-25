import ActionType from "./constants/constants";
import IInitialState from "./types/types";

const initialState: IInitialState = {
  genre: `All genres`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return Object.assign({}, state, {genre: action.payload});
    default:
      return state;
  }
};

export default reducer;
