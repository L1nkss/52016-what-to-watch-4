import ReactDOM from 'react-dom';
import App from '@components/app/App';
import {films} from './mocks/mocks';

ReactDOM.render(<App data={films} />, document.querySelector(`#root`));
