import Main from "../main/main.connect";
import FilmDetails from "../film-details/film-details.connect";
import {Switch, Route, Router} from "react-router-dom";
import withTabs from "@hocs/with-tabs/with-tabs";
import {TabList} from "@utils/constans";
import SignIn from "@components/sign-in/sign-in.connect";
import {RoutePathes} from "@utils/constans";
import history from "@utils/history";
import {ServerError} from "@components/server-error/server-error";
import {NotFound} from "@components/not-found/not-found";
import MyList from "@components/my-list/my-list";
import AddReview from "@components/add-review/add-review.connect";
import PrivateRoute from "@components/private-route/private-route.connect";
import {Loading} from "@components/loading/loading";

export default class App extends React.PureComponent {
  componentDidMount() {
    // Загружаем все фильмы
    this.props.loadFilms();
    // Загружаем промо фильм
    this.props.loadPromoFilm();
    // Проверяем статус авторизации пользователя
    this.props.checkAuthStatus();
  }
  render() {
    const FilmDetailsWrapper = withTabs(FilmDetails, TabList);
    if (this.props.isDataLoading || !this.props.films || !this.props.promoFilm || this.props.isUserStatusChecked) {
      return <Loading />;
    }
    if (this.props.isError) {
      return <ServerError/>;
    }
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={RoutePathes.ROOT}>
            <Main />
          </Route>
          <Route exact path={`${RoutePathes.FILM_DETAIL}/:id?`} component={FilmDetailsWrapper} />
          <PrivateRoute exact path={`${RoutePathes.ADD_REVIEW}/:id?`} render={(props) => {
            return <AddReview {...props} />;
          }}/>
          <PrivateRoute exact path={`${RoutePathes.MY_LIST}`} render={(props) => {
            return <MyList {...props} />;
          }}/>
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

App.propTypes = {
  isDataLoading: propTypes.bool.isRequired,
  isError: propTypes.bool.isRequired,
  promoFilm: propTypes.object.isRequired,
  films: propTypes.array.isRequired,
  loadFilms: propTypes.func.isRequired,
  loadPromoFilm: propTypes.func.isRequired,
  checkAuthStatus: propTypes.func.isRequired,
};
