import {createSelector} from "reselect";

export const getAllGenres = createSelector(
    (state: any) => state.DATA.films.map((film) => film.genre),
    (genres) => {
      const allGenres = [`All genres`, ...genres];
      return [...new Set(allGenres)];
    }
);
