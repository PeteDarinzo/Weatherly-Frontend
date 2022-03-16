
import { combineReducers } from "redux";
import titlesReducer from "./titles";
import moviesReducer from "./movies";
import movies from "./movies";

const rootReducer = combineReducers({ titles: titlesReducer, movies: moviesReducer });

export default rootReducer;