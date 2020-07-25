// import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "@components/app/app.connect";
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Api from "./api";
// import reducer from "redux/reducer";
// import {ActionCreator} from "redux/user/user";
// import {AuthorizationStatus} from "redux/user/constants/constants.ts";
import history from "@utils/history";
import {RoutePathes} from "./constants/constants";
import {ErrorCodes} from "./constants/constants";

// временное решение
import * as React from "react"
import * as ReactDOM from 'react-dom';
import store from "./redux/store";


// const onUnauthorized = () => {
//   store.dispatch(ActionCreator.authorizationSuccess(AuthorizationStatus.NO_AUTH));
// };
//
// const onSuccess = (response) => {
//   return response;
// };
//
// const onFailRequest = (error) => {
//   const {response} = error;
//   if (response.status === ErrorCodes.UNAUTHORIZED) {
//     onUnauthorized();
//     // Необходимо, чтобы цепочка промисов прервались и в Operation не выполнился промис success
//     throw error;
//   }
//   if (response.status === ErrorCodes.BAD_REQUEST) {
//     throw error;
//   }
//
//   if (response.status === ErrorCodes.NOT_FOUND) {
//     history.push(RoutePathes.NOT_FOUND);
//     throw error;
//   }
// };
//
// const api = new Api(onSuccess, onFailRequest);
//
// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
// );

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
