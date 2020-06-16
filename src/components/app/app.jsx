import Main from "../main/main";

const onCardClick = () => {
  // console.log(`Кликнули по фильму ${name}`);
};

const App = (props) => {

  return (
    <Main filmData={props.data} onCardClick={onCardClick} />
  );
};


App.propTypes = {
  data: propTypes.arrayOf(
      propTypes.string
  ).isRequired
};

export default App;
