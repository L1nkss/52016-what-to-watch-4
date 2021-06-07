import Header from "@components/header/header.connect";
import {TFilm, TUserAuthStatus} from "../../constants/types";
import {Link} from "react-router-dom";
import {RoutePathes} from "../../constants/constants";
import history from "@utils/history";

interface IPromoFilm {
  film: TFilm,
  userAuthStatus: TUserAuthStatus,
  changeStatusFilm: (id: number, isFavorite: number) => void,
}

const PromoFilm = (props: IPromoFilm) => {
  const {id, isFavorite} = props.film;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={props.film.backgroundImage} alt={props.film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={props.film.posterImage} alt={`${props.film.name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{props.film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{props.film.genre}</span>
              <span className="movie-card__year">{props.film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={`${RoutePathes.PLAYER}/${props.film.id}`} className="btn btn--play movie-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={() => {
                  if (props.userAuthStatus === `AUTH`) {
                    props.changeStatusFilm(id, Number(!isFavorite));
                    return;
                  }

                  history.push(RoutePathes.SIGN_IN);
                }}
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref={isFavorite ? `#in-list` : `#add`}/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoFilm;
