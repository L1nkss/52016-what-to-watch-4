import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={RoutePathes.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

