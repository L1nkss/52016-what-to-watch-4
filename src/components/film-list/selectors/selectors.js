const selectFilmsByType = (state) => {
  return state.films.filter((film) => {
    if (state.genre === `All genres`) {
      return film;
    }
    return film.genre === state.genre;
  });
};

export {selectFilmsByType};
