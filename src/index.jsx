import ReactDOM from 'react-dom';
import App from '@components/app/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Api} from "./api";
import reducer from "@reducer/reducer";
import {ActionCreator} from "@reducer/user/user";
import {AuthorizationStatus} from "@reducer/user/utils/constants";
import history from "@utils/history";
import {RoutePathes} from "@utils/constans";
import {ErrorCodes} from "@utils/constans";


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
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
    history.push(RoutePathes.NOT_FOUND);
    throw error;
  }
};

const api = new Api(onSuccess, onFailRequest);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
