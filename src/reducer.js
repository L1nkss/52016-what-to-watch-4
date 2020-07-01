import {films} from "./mocks/mocks";
import {ActionType} from "./utils/constans";

const initialState = {
  genre: `All genres`,
  films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_TYPE:
      return Object.assign({}, state, {genre: action.payload});
    default:
      return state;
  }
};

export {reducer};
