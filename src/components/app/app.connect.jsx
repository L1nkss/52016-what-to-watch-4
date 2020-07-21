import App from "@components/app/app";
import {connect} from "react-redux";
import {selectFilmsByGenre} from "@components/main/selectors/selectors";
import {Operation as OperationData} from "@reducer/data/data";
import {Operation as OperationPromo} from "@reducer/promo/promo";
import {Operation as OperationUser} from "@reducer/user/user";

const mapStateToProps = (state) => ({
  isDataLoading: state.DATA.loading || state.PROMO.loading,
  isError: state.DATA.error || state.PROMO.error,
  films: selectFilmsByGenre(state),
  promoFilm: state.PROMO.film,
  isUserStatusChecked: state.USER.loading
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(OperationData.loadFilms()),
  loadPromoFilm: () => dispatch(OperationPromo.loadFilm()),
  checkAuthStatus: () => dispatch(OperationUser.checkAuthStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
