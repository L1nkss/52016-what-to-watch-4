import {ActionType} from "../utils/constants";

const ActionCreator = {
  authorizationRequest: () => {
    return {
      type: ActionType.AUTHORIZATION_REQUEST
    };
  },
  authorizationSuccess: (status) => {
    return {
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: status
    };
  },
  saveUserInformation: (info) => {
    return {
      type: ActionType.SAVE_USER_INFORMATION,
      payload: info
    };
  }
};

export default ActionCreator;
