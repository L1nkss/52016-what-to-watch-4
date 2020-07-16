import {Link} from "react-router-dom";
import {RoutePathes} from "../../utils/constans";
import {baseUrl} from "../../utils/constans";

export const Header = (props) => {
  const {userAuthStatus, userInformation} = props;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {props.children}
      <div className="user-block">
        {userAuthStatus === `AUTH` &&
          <div className="user-block__avatar">
            <img src={`${baseUrl}${userInformation.avatarUrl}`} alt="User avatar" width="63" height="63"/>
          </div>
        }
        {userAuthStatus === `NO_AUTH` &&
        <Link to={RoutePathes.SIGN_IN} className="user-block__link" >Sign in</Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  userAuthStatus: propTypes.string.isRequired,
  children: propTypes.element,
  userInformation: propTypes.shape({
    avatarUrl: propTypes.string.isRequired
  })
};
