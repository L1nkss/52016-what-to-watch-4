import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import Api from "../api";
import history from "@utils/history";
import {ActionCreator} from "./reducers/user/user";
import {AuthorizationStatus} from "./reducers/user/constants/constants";
import {RoutePathes} from "../constants/constants";
import {ErrorCodes} from "../constants/constants";
import reducer from "./reducers/reducer";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.authorizationSuccess(AuthorizationStatus.NO_AUTH));
};

const onSuccess = (response) => {
  return response;
};

const onFailRequest = (error) => {
  const {response} = error;
  if (response.status === ErrorCodes.UNAUTHORIZED) {
    onUnauthorized();
    // Необходимо, чтобы цепочка промисов прервались и в Operation не выполнился промис success
    throw error;
  }
  if (response.status === ErrorCodes.BAD_REQUEST) {
    throw error;
  }

  if (response.status === ErrorCodes.NOT_FOUND) {
    history.push(RoutePathes.SERVER_ERROR);
    throw error;
  }
};

const api = new Api(onSuccess, onFailRequest);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

export default store;
