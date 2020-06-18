import Main from "../main/main";
import FilmDetails from "../film-details/film-details";
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {detailFilmInformation} from '../../mocks/mocks';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: `/`
    };

    this.changeRoutePathToDev = this.changeRoutePathToDev.bind(this);
  }
  changeRoutePathToDev(evt) {
    evt.preventDefault();
    // Меняет url, возможно вариант не самый лучший
    window.location.href = `/dev-component`
    this.setState(() => {
      return {
        currentPage: `/dev-component`
      };
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main filmData={this.props.data} changePath={this.changeRoutePathToDev}/>
          </Route>
          <Route exact path="/dev-component">
            <FilmDetails data={detailFilmInformation} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    image: propTypes.string
  }))
};
