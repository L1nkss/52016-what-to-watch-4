import {createSelector} from 'reselect';

export const selectFilmById = createSelector(
    (id, state) => {
      const index = state.DATA.films.findIndex((film) => film.id === id);
      return state.DATA.films[index];
    },
    (film) => film
);
