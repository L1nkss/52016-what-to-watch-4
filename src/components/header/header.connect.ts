import {connect} from "react-redux";
import {Header} from "./header";

const mapStateToProps = (state) => ({
  userAuthStatus: state.USER.authorizationStatus,
  userInformation: state.USER.authorizationUserInfo
});

export default connect(mapStateToProps, null)(Header);
