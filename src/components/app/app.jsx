import Main from "../main/main";
import FilmDetails from "../film-details/film-details";
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import {detailFilmInformation} from '../../mocks/mocks';
import withTabs from "@hocs/with-tabs/with-tabs";
import {TabList} from "../../utils/constans";
import SignIn from "@components/sign-in/sign-in.connect";
import {RoutePathes} from "../../utils/constans";
import history from "../../utils/history";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.changeRoutePathToDev = this.changeRoutePathToDev.bind(this);
  }
  changeRoutePathToDev(evt) {
    evt.preventDefault();
    // Меняет url, возможно вариант не самый лучший
    window.location.href = `/dev-component`;
  }
  render() {
    const FilmDetailsWrapper = withTabs(FilmDetails, TabList);
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={RoutePathes.ROOT}>
            <Main changePath={this.changeRoutePathToDev}/>
          </Route>
          <Route exact path="/dev-component">
            <FilmDetailsWrapper data={detailFilmInformation} />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    );
  }
}
