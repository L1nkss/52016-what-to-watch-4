import {AuthorizationStatus, ActionType} from "./constants/constants";
import {RoutePathes} from "../../../constants/constants";
import history from "@utils/history";
import ActionCreator from "./actions/actions";
import Adapter from "./utils/adapter";
import IUserState from "./types/types";

const initialState: IUserState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationUserInfo: null,
  loading: false
};

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.authorizationRequest());
    return api.getLogin()
      .then((response) => {
        dispatch(ActionCreator.saveUserInformation(Adapter.convertData(response.data)));
        dispatch(ActionCreator.authorizationSuccess((AuthorizationStatus.AUTH)));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (data) => (dispatch, getState, api) => {
    return api.postLogin(data)
      .then((response) => {
        dispatch(ActionCreator.saveUserInformation(Adapter.convertData(response.data)));
        dispatch(ActionCreator.authorizationSuccess(AuthorizationStatus.AUTH));
        history.push(RoutePathes.ROOT);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTHORIZATION_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.AUTHORIZATION_SUCCESS:
      return Object.assign({}, state, {
        loading: false, authorizationStatus: action.payload
      });
    case ActionType.SAVE_USER_INFORMATION:
      return Object.assign({}, state, {loading: false, authorizationUserInfo: action.payload});
    default:
      return state;
  }
};

export {Operation, reducer, ActionCreator};
