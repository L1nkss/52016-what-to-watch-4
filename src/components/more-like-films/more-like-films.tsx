import FilmCardItem from "@components/film-list/components/film-card-item";
import * as React from "react";
import {TFilm} from "../../constants/types";

interface IMoreLikeFilms {
  films: Array<TFilm>
}

export default class MoreLikeFilms extends React.Component<IMoreLikeFilms> {
  render() {
    const filmList = this.props.films.slice(0, 4);
    return (
      <div className="catalog__movies-list">
        {filmList.map((film, index) => {
          return <FilmCardItem key={film.id} data={film} />;
        })}
      </div>
    );
  }
}
