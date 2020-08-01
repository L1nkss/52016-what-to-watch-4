import {TFilm} from "../../../../constants/types";

interface IPromoState {
  film: TFilm | {},
  loading: boolean,
  error: boolean
}

export default IPromoState;
