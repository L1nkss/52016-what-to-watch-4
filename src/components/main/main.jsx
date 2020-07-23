import FilmList from "../film-list/film-list";
import withLimits from "@hocs/with-limits/with-limits";
import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import {filmLimit} from "../../constants/constants";
import PromoFilm from "@components/promo-film/promo-film.connect";
import {Footer} from "@components/footer/footer";


export default class Main extends React.Component {
  render() {
    const FilmListWrapper = withLimits(FilmList, filmLimit);
    return (
      <>
        <PromoFilm film={this.props.promoFilm} />
        <div className="page-content">
          <section className="catalog">
            <CatalogNav />
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <FilmListWrapper films={this.props.films} />
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

Main.propTypes = {
  isDataLoading: propTypes.bool.isRequired,
  isError: propTypes.bool.isRequired,
  promoFilm: propTypes.object.isRequired,
  films: propTypes.array.isRequired
};

