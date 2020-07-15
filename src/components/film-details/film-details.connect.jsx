import FilmDetails from "@components/film-details/film-details";
import {connect} from "react-redux";
import {selectFilmById} from "../../utils/selectors";
import {Operation} from "../../reducer/reviews/reviews";

const mapStateToProps = (state, props) => ({
  details: selectFilmById(Number(props.match.params.id), state),
  userAuthStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (id) => {
    dispatch(Operation.loadReviews(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
