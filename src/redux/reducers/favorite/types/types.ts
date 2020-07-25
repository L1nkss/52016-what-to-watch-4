import {TFilm} from "../../../../constants/types";

interface IInitialState {
  films: Array<TFilm>,
  loading: boolean,
  error: boolean
}

export default IInitialState
