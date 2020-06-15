import Main from 'main';
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
