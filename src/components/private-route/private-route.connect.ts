import PrivateRoute from "@components/private-route/private-route";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  userAuth: state.USER.authorizationStatus
});

export default connect(mapStateToProps, null)(PrivateRoute);
