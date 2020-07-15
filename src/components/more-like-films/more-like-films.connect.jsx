import MoreLikeFilms from "@components/more-like-films/more-like-films";
import {connect} from "react-redux";
import {selectFilmsByFilmGenre} from "@components/more-like-films/selectors/selectors";

const mapStateToProps = (state, props) => ({
  films: selectFilmsByFilmGenre(state, props)
});


export default connect(mapStateToProps, null)(MoreLikeFilms);
