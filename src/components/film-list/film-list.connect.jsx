import {connect} from "react-redux";
import {FilmList} from "./film-list";
const mapStateToProps = (state) => ({
  films: state.films
});

export default connect(mapStateToProps, null)(FilmList);
