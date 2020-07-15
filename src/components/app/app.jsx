import Main from "../main/main.connect";
import FilmDetails from "../film-details/film-details.connect";
import {Switch, Route, Router} from "react-router-dom";
import withTabs from "@hocs/with-tabs/with-tabs";
import {TabList} from "../../utils/constans";
import SignIn from "@components/sign-in/sign-in.connect";
import {RoutePathes} from "../../utils/constans";
import history from "../../utils/history";
import {ServerError} from "@components/server-error/server-error";
import {NotFound} from "@components/not-found/not-found";
import AddReview from "@components/add-review/add-review.connect";
import PrivateRoute from "@components/private-route/private-route.connect";

export default class App extends React.PureComponent {
  render() {
    const FilmDetailsWrapper = withTabs(FilmDetails, TabList);
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={RoutePathes.ROOT}>
            <Main />
          </Route>
          <Route exact path={`${RoutePathes.FILM_DETAIL}/:id?`} component={FilmDetailsWrapper} />
          <PrivateRoute component={AddReview} exact path={`${RoutePathes.ADD_REVIEW}/:id?`}/>
          <Route exact path={RoutePathes.SIGN_IN}>
            <SignIn />
          </Route>
          <Route exact path={RoutePathes.SERVER_ERROR}>
            <ServerError />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}
