import Tabs from "../tabs/tabs";
import Details from "./components/details/details";
import Overview from "./components/overview/overview";
import Reviews from "./components/reviews/reviews.connect";
import MoreLikeFilms from "../more-like-films/more-like-films.connect";
import {Loading} from "@components/loading/loading";
import Header from "@components/header/header.connect";
import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants.ts";
import {Footer} from "@components/footer/footer";

export default class FilmDetails extends React.PureComponent {
  componentDidMount() {
    if (this.props.details) {
      const {id} = this.props.details;
      this.props.getReviews(id);
    }
  }
  render() {
    const {activeTab, details, userAuthStatus} = this.props;
    if (!details) {
      return <Loading />;
    }
    const {
      director, starring, rating, description, scoresCount, id, runTime, genre, released, isFavorite
    } = details;
    const OverviewData = {
      director,
      starring,
      rating,
      description,
      scoresCount
    };
    const DetailsData = {
      director,
      starring,
      runTime,
      genre,
      released
    };
    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={details.backgroundImage} alt={details.name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{details.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{details.genre}</span>
                  <span className="movie-card__year">{details.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => this.props.changeStatusFilm(id, Number(!isFavorite))}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref={isFavorite ? `#in-list` : `#add`} />
                    </svg>
                    <span>My list</span>
                  </button>
                  {userAuthStatus === `AUTH` &&
                  <Link to={`${RoutePathes.ADD_REVIEW}/${id}`} className="btn movie-card__button">Add review</Link>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={details.posterImage} alt={`${details.name} poster`} width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <Tabs tabs={this.props.tabs} handleTabClick={this.props.handleTabClick} activeTab={activeTab}/>
                {activeTab === `Overview` && <Overview data={OverviewData}/>}
                {activeTab === `Details` && <Details data={DetailsData} />}
                {activeTab === `Reviews` && <Reviews getReviews={ () => this.props.getReviews(id)}/>}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoreLikeFilms genre={details.genre} />
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}

FilmDetails.propTypes = {
  tabs: propTypes.array.isRequired,
  activeTab: propTypes.string.isRequired,
  handleTabClick: propTypes.func.isRequired,
  userAuthStatus: propTypes.string.isRequired,
  getReviews: propTypes.func,
  changeStatusFilm: propTypes.func,
  details: propTypes.shape({
    runTime: propTypes.number.isRequired,
    genre: propTypes.string.isRequired,
    released: propTypes.number.isRequired,
    director: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
    scoresCount: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
    starring: propTypes.array.isRequired,
    backgroundImage: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    posterImage: propTypes.string.isRequired,
    isFavorite: propTypes.bool.isRequired
  })
};
