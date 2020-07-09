import ActionType from "./utils/constants";

const initialState = {
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

export {reducer};
