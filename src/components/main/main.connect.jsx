import Main from "./main";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  isPromoLoading: state.PROMO.loading,
  isFilmsLoading: state.DATA.loading
});

export default connect(mapStateToProps,null)(Main);
