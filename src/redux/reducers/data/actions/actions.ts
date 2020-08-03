import ActionType from "../constants/constants";
import {IDataActions} from "@redux/reducers/data/types/types";
import {TFilm} from "../../../../constants/types";

const ActionCreator = {
  loadFilmsRequest: (): IDataActions => {
    return {
      type: ActionType.LOAD_FILMS_REQUEST
    };
  },
  loadFilmsSuccess: (films: Array<TFilm>): IDataActions => {
    return {
      type: ActionType.LOAD_FILMS_SUCCESS,
      payload: films
    };
  },
  loadFilmError: (): IDataActions => {
    return {
      type: ActionType.LOAD_FILMS_ERROR
    };
  },
  changeFilms: (films: Array<TFilm>): IDataActions => {
    return {
      type: ActionType.CHANGE_FILMS,
      payload: films
    };
  }
};

export {ActionCreator};
