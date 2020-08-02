import FilmCardItem from "@components/film-list/components/film-card-item";
import {TFilm} from "../../constants/types";

interface IMoreLikeFilms {
  films: Array<TFilm>
}

const MoreLikeFilms = (props: IMoreLikeFilms) => {
  const filmList = props.films.slice(0, 4);
  return (
    <div className="catalog__movies-list">
      {filmList.map((film) => {
        return <FilmCardItem key={film.id} data={film} />;
      })}
    </div>
  );
};

export default MoreLikeFilms;
