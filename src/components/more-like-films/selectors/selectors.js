import {createSelector} from 'reselect';
import adapterFilmGenreNavigation from "@components/film-list/utils/utils";

export const selectFilmsByFilmGenre = createSelector(
    (state) => state.DATA.films,
    (films, props) => props,
    (films, props) => {
      return films.filter((film) => {
        return film.genre === adapterFilmGenreNavigation(props.genre);
      });
    }
);
