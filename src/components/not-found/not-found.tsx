import {Footer} from "@components/footer/footer";
import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";

export const NotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={RoutePathes.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
      </header>

      <div className="sign-in user-page__content">
        <div>Страница не найдена</div>
      </div>
      <Footer/>
    </div>
  );
};
