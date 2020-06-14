import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const films = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
];

ReactDOM.render(<App data={films} />, document.querySelector(`#root`));
