import NameSpace from "./utils/constants";
import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as genre} from "./genre/genre";
import {reducer as promo} from "./promo/promo";
import {reducer as user} from "./user/user";
import {reducer as review} from "./review/review";
import {reducer as reviews} from "./reviews/reviews";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.GENRE]: genre,
  [NameSpace.PROMO]: promo,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review,
  [NameSpace.REVIEWS]: reviews
});
