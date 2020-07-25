import Main from "@components/main/main";
import {connect} from "react-redux";
import {selectFilmsByGenre} from "@components/main/selectors/selectors";

const mapStateToProps = (state) => ({
  isDataLoading: state.DATA.loading || state.PROMO.loading,
  isError: state.DATA.error || state.PROMO.error,
  films: selectFilmsByGenre(state),
  promoFilm: state.PROMO.film
});

export default connect(mapStateToProps, null)(Main);
