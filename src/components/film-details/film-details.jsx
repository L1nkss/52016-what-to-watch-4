import Tabs from "../tabs/tabs";
import Details from "./components/details";
import Overview from "./components/overview";
import Reviews from "./components/reviews.connect";
import MoreLikeFilms from "../more-like-films/more-like-films.connect";
import {Loading} from "@components/loading/loading";
import Header from "@components/header/header.connect";
import {Link} from "react-router-dom";
import {RoutePathes} from "../../utils/constans";

const FilmDetails = (props) => {
  const {activeTab, details} = props;
  if (details === undefined) {
    return <Loading />;
  }
  const {director, starring, rating, description, scoresCount, id} = details;
  const {userAuthStatus} = props;
  const {runTime, genre, released} = details;
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
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
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
              <Tabs tabs={props.tabs} handleTabClick={props.handleTabClick} activeTab={activeTab}/>
              {activeTab === `Overview` && <Overview data={OverviewData}/>}
              {activeTab === `Details` && <Details data={DetailsData} />}
              {activeTab === `Reviews` && <Reviews getReviews={ () => props.getReviews(id)}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreLikeFilms genre={details.genre} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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


FilmDetails.propTypes = {
  tabs: propTypes.array.isRequired,
  activeTab: propTypes.string.isRequired,
  handleTabClick: propTypes.func.isRequired,
  data: propTypes.shape({
    Overview: propTypes.shape({
      rating: propTypes.number.isRequired,
      score: propTypes.number.isRequired,
      director: propTypes.string.isRequired,
      starring: propTypes.string.isRequired
    }).isRequired,
    Details: propTypes.shape({
      director: propTypes.string.isRequired,
      starring: propTypes.arrayOf(propTypes.string).isRequired,
      runTime: propTypes.string.isRequired,
      genre: propTypes.string.isRequired,
      released: propTypes.number.isRequired
    }).isRequired,
    Reviews: propTypes.arrayOf(propTypes.object).isRequired,
    Header: propTypes.shape({
      poster: propTypes.string.isRequired,
      background: propTypes.string.isRequired,
      genre: propTypes.string.isRequired,
      year: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired
  })
};

export default FilmDetails;
