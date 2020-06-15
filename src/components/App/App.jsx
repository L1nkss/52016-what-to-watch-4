import Main from 'main';
const App = (props) => {
  return (
    <Main filmData={props.data} />
  );
};


App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.string
  )
};

export default App;
