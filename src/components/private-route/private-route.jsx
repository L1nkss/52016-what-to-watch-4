import {Route, Redirect} from "react-router";
import {AuthorizationStatus} from "redux/user/constants/constants.ts";
import {RoutePathes} from "../../constants/constants.ts";

const PrivateRoute = (props) => {
  const {userAuth, path, exact, render} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          userAuth === AuthorizationStatus.AUTH
            ? render(props)
            : <Redirect to={RoutePathes.SIGN_IN}/>
        );
      }
      }
    />
  );
};

PrivateRoute.propTypes = {
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
  userAuth: propTypes.string.isRequired
};

export default PrivateRoute;

