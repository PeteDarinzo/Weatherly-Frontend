
import { combineReducers } from "redux";
import titlesReducer from "./titles";
import moviesReducer from "./movies";
import forecastReducer from "./forecast";
import userReducer from "./user";
import snackbarReducer from "./snackbar";

const rootReducer = combineReducers({
  titles: titlesReducer,
  movies: moviesReducer,
  forecast: forecastReducer,
  user: userReducer,
  snackbar: snackbarReducer
});

export default rootReducer;