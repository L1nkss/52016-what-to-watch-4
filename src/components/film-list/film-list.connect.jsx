import {connect} from "react-redux";
import {FilmList} from "./film-list";
import {selectFilmsByGenre} from "./selectors/selectors";

const mapStateToProps = (state) => ({
  films: selectFilmsByGenre(state)
});

export default connect(mapStateToProps, null)(FilmList);
