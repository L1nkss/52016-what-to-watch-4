import ReactDOM from 'react-dom';
import App from './components/App/App';

const films = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
];

ReactDOM.render(<App data={films} />, document.querySelector(`#root`));
