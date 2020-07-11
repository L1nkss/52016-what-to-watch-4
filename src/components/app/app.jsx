import Main from "../main/main.connect";
import FilmDetails from "../film-details/film-details";
import {Switch, Route, Router} from "react-router-dom";
import withTabs from "@hocs/with-tabs/with-tabs";
import {TabList} from "../../utils/constans";
import SignIn from "@components/sign-in/sign-in.connect";
import {RoutePathes} from "../../utils/constans";
import history from "../../utils/history";
import {NotFound} from "@components/not-found/not-found";
import {Loading} from "@components/loading/loading";

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
    const isShow = true;
    const FilmDetailsWrapper = withTabs(FilmDetails, TabList);
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={RoutePathes.ROOT}>
            <Main changePath={this.changeRoutePathToDev}/>
          </Route>
          <Route exact path="/dev-component">
            <FilmDetailsWrapper />
          </Route>
          <Route exact path={RoutePathes.SIGN_IN}>
            <SignIn />
          </Route>
          <Route exact path={RoutePathes.NOT_FOUND}>
            <NotFound />
          </Route>
          <Route exact path={RoutePathes.LOADING}>
            <Loading />
          </Route>
        </Switch>
      </Router>
    );
  }
}
