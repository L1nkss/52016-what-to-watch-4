import {connect} from "react-redux";
import {SignIn} from "./sign-in";
import {Operation} from "@redux/reducers/user/user";

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(Operation.login(data));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
