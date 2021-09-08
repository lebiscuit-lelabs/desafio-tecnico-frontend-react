import { combineReducers } from "redux";

import data from "./data/reducer";
import favorite from "./favorite/reducer";

export default combineReducers({
  data,
  favorite,
});
