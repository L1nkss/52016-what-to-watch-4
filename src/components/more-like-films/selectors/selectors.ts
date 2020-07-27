import {createSelector} from 'reselect';

export const selectFilmsByFilmGenre = createSelector(
    (state: any) => state.DATA.films,
    (films, props) => props,
    (films, props) => {
      return films.filter((film) => {
        return film.genre === props.genre;
      });
    }
);
