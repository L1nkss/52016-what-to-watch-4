import {AuthorizationStatus, ActionType} from "./utils/constants";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization((AuthorizationStatus.AUTH)));
      })
      .catch((err) => {
        throw err;
      });
  }
};

export {Operation, reducer, ActionCreator};
