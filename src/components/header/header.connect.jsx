import {connect} from "react-redux";
import {Header} from "./header";

const mapStateToProps = (state) => ({
  userAuthStatus: state.USER.authorizationStatus
});

export default connect(mapStateToProps, null)(Header);
