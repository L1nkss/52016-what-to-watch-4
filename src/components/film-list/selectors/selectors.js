import adapterFilmGenreNavigation from '../utils/utils';
import {createSelector} from 'reselect';

const getActiveGenre = (state) => state.GENRE.genre;
const getAllFilms = (state) => state.DATA.films;

export const selectFilmsByGenre = createSelector(
    getActiveGenre,
    getAllFilms,
    (genre, films) => {
      return films.filter((film) => {
        if (genre === `All genres`) {
          return film;
        }
        return film.genre === adapterFilmGenreNavigation(genre);
      });
    }
);
