import ReactDOM from 'react-dom';
import App from '@components/app/App';
import {films} from './mocks/mocks';
import {reducer} from './reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App data={films} />
    </Provider>, document.querySelector(`#root`)
);
