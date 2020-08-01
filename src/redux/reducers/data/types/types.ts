import {TFilm} from "../../../../constants/types";
import ActionType from "@redux/reducers/data/constants/constants";

interface IDataState {
  loading: boolean,
  error: boolean,
  films: Array<TFilm>
}

interface IDataActions {
  type: typeof ActionType[keyof typeof ActionType],
  payload?: Array<TFilm>,
}

export {IDataState, IDataActions};
