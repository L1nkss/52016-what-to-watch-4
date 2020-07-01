import {connect} from "react-redux";
import {FilmList} from "./film-list";
import {selectFilmsByType} from "./selectors/selectors";

const mapStateToProps = (state) => ({
  films: selectFilmsByType(state)
});

export default connect(mapStateToProps, null)(FilmList);
