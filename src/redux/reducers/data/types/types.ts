import {TFilm} from "../../../../types/types";

interface IInitialState {
  loading: boolean,
  error: boolean,
  films: Array<TFilm>
}

export default IInitialState;
