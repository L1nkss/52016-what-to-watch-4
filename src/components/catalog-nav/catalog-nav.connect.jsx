// import ActionCreate from "../../reducer/genre/actions/actions";
import ActionCreator from "@redux/reducers/genre/actions/actions";
import {CatalogNav} from "./catalog-nav";
import {connect} from "react-redux";
import {getAllGenres} from "@components/catalog-nav/selectors/selectors";

const mapStateToProps = (state) => ({
  genre: state.GENRE.genre,
  allGenres: getAllGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(evt, type) {
    evt.preventDefault();
    dispatch(ActionCreator.changeActiveGenre(type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogNav);

