import App from "@components/app/app";
import {connect} from "react-redux";
import {selectFilmsByGenre} from "@components/main/selectors/selectors";
import {Operation as OperationData} from "@redux/reducers/data/data";
import {Operation as OperationPromo} from "@redux/reducers/promo/promo";
import {Operation as OperationUser} from "@redux/reducers/user/user";
import {Operation as OperationFavorite} from "@redux/reducers/favorite/favorite";
// import {Operation as OperationData} from "redux/data/data";
// import {Operation as OperationPromo} from "redux/promo/promo";
// import {Operation as OperationUser} from "redux/user/user";
// import {Operation as OperationFavorite} from "redux/favorite/favorite";

import {TApp} from "@components/app/app";
import {TFilm} from "../../types/types";

const mapStateToProps = (state) => ({
  isDataLoading: state.DATA.loading || state.PROMO.loading,
  isError: state.DATA.error || state.PROMO.error,
  films: selectFilmsByGenre(state),
  promoFilm: state.PROMO.film,
});

interface IProps {
  loadFilms: () => void,
  loadPromoFilm: () => void,
  checkAuthStatus: () => void,
  loadFavoritesFilms: () => void,
  changeStatusFilm: (id: number, status: string) => void
}

const mapDispatchToProps = (dispatch):IProps => ({
  loadFilms: () => dispatch(OperationData.loadFilms()),
  loadPromoFilm: () => dispatch(OperationPromo.loadFilm()),
  checkAuthStatus: () => dispatch(OperationUser.checkAuthStatus()),
  loadFavoritesFilms: () => dispatch(OperationFavorite.loadFavoriteFilms()),
  changeStatusFilm: (id, status) => dispatch(OperationFavorite.postFavoriteFilm(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
