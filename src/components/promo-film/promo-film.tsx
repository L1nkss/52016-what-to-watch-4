import Header from "@components/header/header.connect";
import * as React from "react";
import {TFilm, TUserAuthStatus} from "../../constants/types";

interface IPromoFilm {
  film: TFilm,
  userAuthStatus: TUserAuthStatus,
  changeStatusFilm: (id: number, isFavorite: number) => void,
}

export default class PromoFilm extends React.Component<IPromoFilm> {
  render() {
    const {id, isFavorite} = this.props.film;
    return (
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={this.props.film.backgroundImage} alt={this.props.film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={this.props.film.posterImage} alt={`${this.props.film.name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{this.props.film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{this.props.film.genre}</span>
                <span className="movie-card__year">{this.props.film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {this.props.userAuthStatus === `AUTH` &&
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => this.props.changeStatusFilm(id, Number(!isFavorite))}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={isFavorite ? `#in-list` : `#add`}/>
                  </svg>
                  <span>My list</span>
                </button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// PromoFilm.propTypes = {
//   film: propTypes.shape({
//     backgroundImage: propTypes.string,
//     name: propTypes.string,
//     posterImage: propTypes.string,
//     genre: propTypes.string,
//     id: propTypes.number,
//     isFavorite: propTypes.bool,
//     released: propTypes.number
//   }),
//   changeStatusFilm: propTypes.func.isRequired
// };