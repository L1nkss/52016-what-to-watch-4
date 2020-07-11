import FilmList from "../film-list/film-list.connect";
import withLimits from "@hocs/with-limits/with-limits";
import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import {filmLimit} from "../../utils/constans";
import PromoFilm from "@components/promo-film/promo-film.connect";
import {Footer} from "@components/footer/footer";

export default class Main extends React.PureComponent {
  render() {
    const {changePath} = this.props;
    const FilmListWrapper = withLimits(FilmList, filmLimit);
    return (
      <>
        <PromoFilm />
        <div className="page-content">
          <section className="catalog">
            <CatalogNav />
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <FilmListWrapper changePath={changePath} />
          </section>
          <Footer />
        </div>
      </>
    );
  }
};


// const Main = (props) => {
//   const {changePath} = props;
//   const FilmListWrapper = withLimits(FilmList, filmLimit);
//   return (
//     <>
//       <PromoFilm />
//       <div className="page-content">
//         <section className="catalog">
//           <CatalogNav />
//           <h2 className="catalog__title visually-hidden">Catalog</h2>
//           <FilmListWrapper changePath={changePath} />
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// };

Main.propTypes = {
  changePath: propTypes.func.isRequired
};

// export default Main;
