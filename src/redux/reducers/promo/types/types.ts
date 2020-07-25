import {TFilm} from "../../../../types/types";

interface IInitialState {
  film: TFilm | {},
  loading: boolean,
  error: boolean
}

export default IInitialState
