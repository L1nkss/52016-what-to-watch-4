import {films} from "./mocks/mocks";

const ActionType = {
  FILTER_FILMS: `FILTER_FILMS`
};

const initialState = {
  genre: `All genres`,
  allFilms: films,
  filteredFilms: films
};

const ActionCreate = {
  changeFilter: (type) => ({
    type: ActionType.FILTER_FILMS,
    payload: type
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_FILMS:
      // const filteredFilms = state.films.filter((film) => film.genre.indexOf(action.payload) !== -1)
      const filteredFilms = state.allFilms.filter((film) => {
        if (action.payload === `All genres`) {
          return film;
        }
        return film.genre.indexOf(action.payload) !== -1;
      });
      return Object.assign({}, state, {genre: action.payload, filteredFilms});
  }
  return state;
};

export {reducer, ActionCreate};
