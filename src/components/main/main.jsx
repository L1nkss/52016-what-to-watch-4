import FilmList from "../film-list/film-list.connect";
import withLimits from "../../hocs/with-limits/with-limits";
import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import {filmLimit} from "../../utils/constans";
import PromoFilm from "@components/promo-film/promo-film.connect";

const Main = (props) => {
  const {changePath} = props;
  const FilmListWrapper = withLimits(FilmList, filmLimit);

  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <CatalogNav />
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {/* Отрисовка списка фильмов */}
          <FilmListWrapper changePath={changePath} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

// Подключение PropTypes
Main.propTypes = {
  changePath: propTypes.func.isRequired
};

export default Main;
