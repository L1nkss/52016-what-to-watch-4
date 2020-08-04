import {Footer} from "@components/footer/footer";
import {RoutePathes} from "../../constants/constants";
import {Link} from "react-router-dom";


export const ServerError = () => {
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
        <div>Упс, что то пошло не так, попробуйте перезагрузить страницу</div>
      </div>

      <Footer/>
    </div>
  );
};
