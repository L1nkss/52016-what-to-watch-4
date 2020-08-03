import PromoFilm from "@components/promo-film/promo-film";
import {connect} from "react-redux";
import {Operation as OperationFavorite} from "@redux/reducers/favorite/favorite";

const mapStateToPRops = (state) => ({
  userAuthStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatusFilm: (id, status) => dispatch(OperationFavorite.postFavoriteFilm(id, status)),
});

export default connect(mapStateToPRops, mapDispatchToProps)(PromoFilm);
