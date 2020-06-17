import Main from "../main/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main filmData={props.data}/>
        </Route>
        <Route exact path="/dev-component">
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    image: propTypes.string
  }))
};

export default App;
