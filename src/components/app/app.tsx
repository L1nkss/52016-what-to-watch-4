import Main from "../main/main.connect";
import FilmDetails from "../film-details/film-details.connect";
import {Switch, Route, Router} from "react-router-dom";
import withTabs from "@hocs/with-tabs/with-tabs";
import {TabList} from "../../constants/constants";
import SignIn from "@components/sign-in/sign-in.connect";
import {RoutePathes} from "../../constants/constants";
import history from "@utils/history";
import {ServerError} from "@components/server-error/server-error";
import {NotFound} from "@components/not-found/not-found";
import MyList from "@components/my-list/my-list.connect";
import AddReview from "@components/add-review/add-review.connect";
import PrivateRoute from "@components/private-route/private-route.connect";
import {Loading} from "@components/loading/loading";
import Player from "@components/player/player.connect";
import {TFilm} from "../../constants/types";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";


interface TApp {
  loadFilms: () => void,
  loadPromoFilm: () => void,
  checkAuthStatus: () => void,
  loadFavoritesFilms: () => void,
  isDataLoading: boolean,
  films: Array<TFilm>,
  promoFilm: TFilm,
  isError: boolean
}

export default class App extends React.PureComponent<TApp> {
  componentDidMount(): void {
    // Загружаем все фильмы
    this.props.loadFilms();
    // Загружаем промо фильм
    this.props.loadPromoFilm();
    // Проверяем статус авторизации пользователя
    this.props.checkAuthStatus();
    // Загружаем список фильмов(my-list)
    this.props.loadFavoritesFilms();
  }
  render() {
    const FilmDetailsWrapper = withTabs(FilmDetails, TabList);
    const PlayerWrapper = withVideoPlayer(Player);
    if (this.props.isDataLoading || !this.props.films || !this.props.promoFilm) {
      return <Loading />;
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
          <Route exact path={`${RoutePathes.PLAYER}/:id?`} component={PlayerWrapper} />
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
