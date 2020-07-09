import {connect} from "react-redux";
import PromoFilm from "@components/promo-film/promo-film";

const mapStateToProps = (state) => ({
  film: state.PROMO.film,
  loading: state.PROMO.loading
});

export default connect(mapStateToProps, null)(PromoFilm);
