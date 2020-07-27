import {Route, Redirect} from "react-router";
import {AuthorizationStatus} from "@redux/reducers/user/constants/constants";
import {RoutePathes} from "../../constants/constants";
import * as React from "react";
import {TUserAuthStatus, RouteProps} from "../../constants/types";

interface IPrivateRoute extends RouteProps {
  userAuth: TUserAuthStatus
}

const PrivateRoute = (props: IPrivateRoute) => {
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

