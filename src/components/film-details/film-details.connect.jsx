import FilmDetails from "@components/film-details/film-details";
import {connect} from "react-redux";
import {selectFilmById} from "../../utils/selectors";
// import {Operation} from "../../reducer/reviews/reviews";
// import {Operation as OperationFavorite} from "redux/favorite/favorite";
import {Operation as OperationFavorite} from "@redux/reducers/favorite/favorite";
import {Operation as OperationReviews} from "@redux/reducers/reviews/reviews";

const mapStateToProps = (state, props) => ({
  details: selectFilmById(Number(props.match.params.id), state),
  userAuthStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (id) => {
    dispatch(OperationReviews.loadReviews(id));
  },
  changeStatusFilm: (id, status) => dispatch(OperationFavorite.postFavoriteFilm(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
