import Main from "../main/main";
import FilmDetails from "../film-details/film-details";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {detailFilmInformation} from '../../mocks/mocks';
import withTabs from "../../hocs/with-tabs/with-tabs";
import {connect} from "react-redux";

class App extends React.PureComponent {
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
    window.location.href = `/dev-component`;
    this.setState(() => {
      return {
        currentPage: `/dev-component`
      };
    });
  }
  render() {
    console.log(this.props)
    const FilmDetailsWrapper = withTabs(FilmDetails);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main filmData={this.props.data} changePath={this.changeRoutePathToDev}/>
          </Route>
          <Route exact path="/dev-component">
            <FilmDetailsWrapper data={detailFilmInformation} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.genres
});

export default connect(mapStateToProps, null)(App);

App.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  })).isRequired
};
