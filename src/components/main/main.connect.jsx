import Main from "./main";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  isDataLoading: state.DATA.loading || state.PROMO.loading,
  isError: state.DATA.error || state.PROMO.error
});

export default connect(mapStateToProps, null)(Main);
