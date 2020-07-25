import {TFilm} from "../../../../constants/types";

interface IInitialState {
  loading: boolean,
  error: boolean,
  films: Array<TFilm>
}

export default IInitialState;
