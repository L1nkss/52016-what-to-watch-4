import ReactDOM from 'react-dom';
import App from '@components/app/App';
import reducer from './reducer/reducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./api";
import {Operation as OperationData} from "./reducer/data/data";
import {Operation as OperationPromo} from "./reducer/promo/promo";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(OperationData.loadFilms());
store.dispatch(OperationPromo.loadFilm());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
