import PromoFilm from "@components/promo-film/promo-film";
import {connect} from "react-redux";
import {Operation as OperationFavorite} from "redux/favorite/favorite";

const mapDispatchToProps = (dispatch) => ({
  changeStatusFilm: (id, status) => dispatch(OperationFavorite.postFavoriteFilm(id, status))
});

export default connect(null, mapDispatchToProps)(PromoFilm);
