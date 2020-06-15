import React from 'react';
import propTypes from 'prop-types';
import Main from '../Main/Main';
const App = (props) => {

  return (
    <Main filmData={props.data} />
  );
};


App.propTypes = {
  data: propTypes.arrayOf(
      propTypes.string
  ).isRequired
};

export default App;
