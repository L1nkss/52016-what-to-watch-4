import FilmCardItem from "./components/film-card-item";
import * as React from "react";
import {TFilm} from "../../constants/types";

interface IFilmList {
  films: Array<TFilm>,
  visible: number,
  changeVisible: (films: Array<TFilm>) => void
}

const FilmList = (props: IFilmList) => {
  const {films, visible, changeVisible} = props;
  const filmList = films.slice(0, visible);
  return (
    <>
      <div className="catalog__movies-list">
        {filmList.map((film) => {
          return <FilmCardItem key={film.id} data={film} />;
        })}
      </div>
      {films.length > visible && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={() => changeVisible(films)}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
};

export default FilmList;
