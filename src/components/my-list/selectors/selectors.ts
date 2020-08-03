export const getFavoriteFilms = (state) => state.DATA.films.filter((film) => film.isFavorite);
