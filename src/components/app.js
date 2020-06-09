import React from 'react';
import Main from './main';

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Main filmData={props.data} />
  );
};

export default App;
