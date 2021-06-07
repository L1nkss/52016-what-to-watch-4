import FilmList from "../film-list/film-list";
import withLimits from "@hocs/with-limits/with-limits";
import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import {FILM_LIMIT, RoutePathes} from "../../constants/constants";
import PromoFilm from "@components/promo-film/promo-film.connect";
import {Footer} from "@components/footer/footer";
import {TFilm} from "../../constants/types";
import {Redirect} from "react-router-dom";

interface IMain {
  isError: boolean,
  promoFilm: TFilm,
  films: Array<TFilm>
}

const Main = (props: IMain) => {
  if (props.isError) {
    return <Redirect to={RoutePathes.SERVER_ERROR} />;
  }
  const FilmListWrapper = withLimits(FilmList, FILM_LIMIT);
  return (
    <>
      <PromoFilm film={props.promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <CatalogNav />
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmListWrapper films={props.films} />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Main;
