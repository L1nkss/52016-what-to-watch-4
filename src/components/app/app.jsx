import Main from "../main/main";
import FilmDetails from "../film-details/film-details";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {detailFilmInformation} from '../../mocks/mocks';
import withTabs from "@hocs/with-tabs/with-tabs";
import {TabList} from "../../utils/constans";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main changePath={this.changeRoutePathToDev}/>
          </Route>
          <Route exact path="/dev-component">
            <FilmDetailsWrapper data={detailFilmInformation} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
