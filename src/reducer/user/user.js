import {AuthorizationStatus, ActionType} from "./utils/constants";
import {RoutePathes} from "../../utils/constans";
import history from "../../utils/history";
import ActionCreator from "./actions/actions";
import Adapter from "./utils/adapter";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationUserInfo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
    case ActionType.REQUIRED_AUTHORIZATION_DATA:
      return Object.assign({}, state, {authorizationUserInfo: action.payload});
    default:
      return state;
  }
};

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorizationData(Adapter.convertData(response.data)));
        dispatch(ActionCreator.requireAuthorization((AuthorizationStatus.AUTH)));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (data) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: data.login,
      password: data.password
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorizationData(Adapter.convertData(response.data)));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        history.push(RoutePathes.ROOT);
      });
  },
};

export {Operation, reducer, ActionCreator};
