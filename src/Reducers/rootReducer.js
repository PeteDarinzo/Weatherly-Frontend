
import { combineReducers } from "redux";
import titlesReducer from "./titles";
import { FETCH_TITLES, SAVE_MOVIE } from "../Actions/actionTypes";

const rootReducer = combineReducers({ titles: titlesReducer });

export default rootReducer;