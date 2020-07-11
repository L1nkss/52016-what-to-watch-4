import {ActionType} from "../utils/constants";

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  }
};

export default ActionCreator;
