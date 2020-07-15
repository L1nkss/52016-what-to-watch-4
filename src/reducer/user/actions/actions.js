import {ActionType} from "../utils/constants";

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  requireAuthorizationData: (data) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION_DATA,
      payload: data
    };
  }
};

export default ActionCreator;
