import FilmList from "../film-list/film-list.connect";
import withLimits from "@hocs/with-limits/with-limits";
import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import {filmLimit} from "../../utils/constans";
import PromoFilm from "@components/promo-film/promo-film.connect";
import {Footer} from "@components/footer/footer";
import {Loading} from "@components/loading/loading";
import {ServerError} from "@components/server-error/server-error";


const Main = (props) => {
  const FilmListWrapper = withLimits(FilmList, filmLimit);
  if (props.isDataLoading) {
    return <Loading />;
  }
  if (props.isError) {
    return <ServerError/>;
  }
  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <CatalogNav />
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmListWrapper />
        </section>
        <Footer />
      </div>
    </>
  );
};

Main.propTypes = {
  isDataLoading: propTypes.bool,
  isError: propTypes.bool
};

export default Main;
