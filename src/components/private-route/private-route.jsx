import {Route, Redirect} from "react-router";
import {RoutePathes} from "../../utils/constans";

const PrivateRoute = (props) => {
  const {userAuth, component: Component} = props;
  return (
    <Route exact={props.exact} path={props.path}  render={(props) => (
      userAuth === `AUTH` ? <Component {...props} /> : <Redirect to={RoutePathes.SIGN_IN} />
    )} />
  );
};

export default PrivateRoute;

