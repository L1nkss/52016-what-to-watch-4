import Main from "../main/main";

const App = (props) => {

  return (
    <Main filmData={props.data}/>
  );
};


App.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    image: propTypes.string
  }))
};

export default App;
