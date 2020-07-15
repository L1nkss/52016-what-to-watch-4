import FilmDetails from "@components/film-details/film-details";
import {connect} from "react-redux";
import {selectFilmById} from "../../utils/selectors";

const mapStateToProps = (state, props) => ({
  details: selectFilmById(Number(props.match.params.id), state),
  userAuthStatus: state.USER.authorizationStatus,
});

export default connect(mapStateToProps, null)(FilmDetails);
