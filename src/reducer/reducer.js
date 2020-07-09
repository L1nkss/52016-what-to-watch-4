import NameSpace from "./utils/constants";
import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as genre} from "./genre/genre";
import {reducer as promo} from "./promo/promo";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.GENRE]: genre,
  [NameSpace.PROMO]: promo
});