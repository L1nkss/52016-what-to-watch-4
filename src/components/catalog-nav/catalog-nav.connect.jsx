import {ActionCreate} from "../../actions";
import {CatalogNav} from "./catalog-nav";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(evt, type) {
    evt.preventDefault();
    dispatch(ActionCreate.changeFilter(type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogNav);

