import ActionCreate from "../../reducer/genre/actions/actions";
import {CatalogNav} from "./catalog-nav";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  genre: state.GENRE.genre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(evt, type) {
    evt.preventDefault();
    dispatch(ActionCreate.changeActiveGenre(type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogNav);

