import {Route, Redirect} from "react-router";
// import {AuthorizationStatus} from "redux/user/constants/constants.ts";
import {AuthorizationStatus} from "@redux/reducers/user/constants/constants";
import {RoutePathes} from "../../constants/constants";
import * as React from "react";

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

export default PrivateRoute;

