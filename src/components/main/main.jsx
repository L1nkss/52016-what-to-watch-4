import FilmList from "../film-list/film-list";
import withLimits from "@hocs/with-limits/with-limits";
import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import {filmLimit} from "@utils/constans";
import PromoFilm from "@components/promo-film/promo-film";
import {Footer} from "@components/footer/footer";
import {Loading} from "@components/loading/loading";
import {ServerError} from "@components/server-error/server-error";


export default class Main extends React.Component {
  componentDidMount() {
    // Загружаем все фильмы
    this.props.loadFilms();
    // Загружаем промо фильм
    this.props.loadPromoFilm();
    // Проверяем статус авторизации пользователя
    this.props.checkAuthStatus();
  }
  render() {
    const FilmListWrapper = withLimits(FilmList, filmLimit);
    if (this.props.isDataLoading || !this.props.films || !this.props.promoFilm) {
      return <Loading />;
    }
    if (this.props.isError) {
      return <ServerError/>;
    }
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
  isDataLoading: propTypes.bool,
  isError: propTypes.bool
};

