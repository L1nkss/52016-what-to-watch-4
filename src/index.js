import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const filmInformation = {
  date: 2014,
  genre: `Drama`
};

ReactDOM.render(<App data={filmInformation} />, document.querySelector(`#root`));
