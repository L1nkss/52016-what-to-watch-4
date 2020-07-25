import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";
import {baseUrl} from "../../constants/constants";
import * as React from "react";
import {TUserAuthStatus, TUserInfo} from "../../constants/types";
import {ReactNode} from "react";

interface IHeader {
  userAuthStatus: TUserAuthStatus,
  children: ReactNode,
  isUserPage: boolean,
  userInformation: TUserInfo
}

export const Header = (props: IHeader) => {
  const {userAuthStatus, userInformation, isUserPage = false} = props;
  return (
    <header className={`page-header ${isUserPage ? `user-page__head` : `movie-card__head`}`}>
      <div className="logo">
        <Link to={RoutePathes.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {props.children}
      <div className="user-block">
        {userAuthStatus === `AUTH` &&
          <div className="user-block__avatar">
            <Link to={RoutePathes.MY_LIST}><img src={`${baseUrl}${userInformation.avatarUrl}`} alt="User avatar" width="63" height="63"/></Link>
          </div>
        }
        {userAuthStatus === `NO_AUTH` &&
        <Link to={RoutePathes.SIGN_IN} className="user-block__link" >Sign in</Link>
        }
      </div>
    </header>
  );
};
