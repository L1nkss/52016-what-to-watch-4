import * as React from "react";
import {getFilmRating} from "@components/film-details/utils/utils";

type TData = {
    rating: number
    director: string,
    starring: Array<string>,
    description: string,
    scoresCount: number
}

interface IOverview {
  data: TData
}

const Overview = (props: IOverview) => {
  const {rating, director, starring, description, scoresCount} = props.data;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmRating(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(` `)}</strong></p>
      </div>
    </>
  );
};

export default Overview;
