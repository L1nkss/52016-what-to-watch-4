import {TFilm} from "../../../../constants/types";

interface IInitialState {
  film: TFilm | {},
  loading: boolean,
  error: boolean
}

export default IInitialState;
