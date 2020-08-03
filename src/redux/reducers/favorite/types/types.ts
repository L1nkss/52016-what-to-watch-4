import {TFilm} from "../../../../constants/types";

interface IFavoriteState {
  films: Array<TFilm>,
  loading: boolean,
  error: boolean
}

export default IFavoriteState;
