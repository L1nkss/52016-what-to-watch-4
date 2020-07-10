import {connect} from "react-redux";
import {SignIn} from "./sign-in";
import {Operation} from "../../reducer/user/user";

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(Operation.login(data));
  }
});


export default connect(null, mapDispatchToProps)(SignIn);
