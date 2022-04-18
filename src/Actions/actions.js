import axios from "axios";
import WeatherlyApi from "../Components/Api";
import {
  SAVE_MOVIE,
  FETCH_TITLES,
  DELETE_MOVIE,
  FETCH_MOVIE,
  GET_FORECAST,
  UPDATE_USER,
  SET_SNACKBAR,
  USER_LOGOUT
} from "./actionTypes";
import CircularlyLinkedList from "../Components/DataStructures/CircularLinkedList";
import { DateTime } from "luxon";

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

/** circularly linked list containing days of the week */
const DAYS_OF_WEEK = new CircularlyLinkedList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?"


/* SAVE MOVIE
 * 
 * Saves a movie in the database, then adds to the user's watchlist
 */

export function sendMovieToAPI(movie, username) {
  const movieObj = {
    id: movie.imdbID,
    title: movie.Title,
    posterUrl: movie.Poster
  }
  return async function (dispatch) {
    await WeatherlyApi.saveMovie(movieObj); // must execute first
    await WeatherlyApi.addToWatchList(username, movieObj.id);
    dispatch(saveMovie(movie));
  }
}

/** Add movie title to the titles reducer */

function saveMovie(movie) {
  return {
    type: SAVE_MOVIE,
    movie
  }
}

/** FETCH TITLES 
*
* Fetch a user's watchlist from the database
*/

export function fetchTitlesFromAPI(username) {
  return async function (dispatch) {
    const titles = await WeatherlyApi.getAllTitles(username);
    dispatch(getTitles(titles));
  }
}

/** Save titles to the titles reducer */

function getTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  }
}

/** FETCH MOVIE
 *
 * Query the database for a movie from the user's watchlist, by id 
 */

export function fetchMovieFromAPI(movieId) {
  return async function (dispatch) {
    const movie = await WeatherlyApi.searchMoviesById(movieId);
    dispatch(getMovie(movie));
  }
}

/** Save movie details the movies reducer */

function getMovie(movie) {
  return {
    type: FETCH_MOVIE,
    movie
  }
}

/** DELETE MOVIE
 * 
 * Remove a movie from a user's watchlist
 *  
 */

export function deleteFromWatchList(username, movieId) {
  return async function (dispatch) {
    WeatherlyApi.removeFromWatchList(username, movieId)
    dispatch(deleteMovie(movieId));
  }
}

function deleteMovie(movieId) {
  return {
    type: DELETE_MOVIE,
    movieId
  }
}

/** FETCH FORECAST 
 * 
 * Fetch forecast, add weekday and data
*/

export function fetchForecastFromAPI(lat, lon, units) {
  return async function (dispatch) {
    const res = await axios.get(OPEN_WEATHER_URL, {
      params: {
        lat,
        lon,
        exclude: "minutely,hourly,alerts",
        appId: OPEN_WEATHER_API_KEY,
        units
      }
    });
    const d = (new Date()).toString();
    let dt = DateTime.now();
    const today = d.slice(0, 3);
    let days = DAYS_OF_WEEK.traverse(today, 8);
    const forecast = res.data.daily.map(day => {
      day.name = days.shift();
      day.date = dt.toLocaleString();
      dt = dt.plus({ days: 1 });
      return day;
    });
    dispatch(getForecast(forecast));
  }
}

/** Save to the forecast reducer */

function getForecast(forecast) {
  return {
    type: GET_FORECAST,
    forecast
  }
}

/** UPDATE USER 
 * 
 * Update a user's profile
*/

export function saveUserData(userData) {
  return {
    type: UPDATE_USER,
    userData
  }
}

/** SET SNACKBAR
 * 
 * Set the snackbar to open from any component
 * Includes snackbar color (alert color) and message 
 */

export function setSnackbar(snackbarOpen, snackbarType = "success", snackbarMessage = "") {
  return {
    type: SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage
  }
}

/** LOGOUT
 * 
 * User logout will reset all reducers
 */

export function resetStore() {
  return {
    type: USER_LOGOUT
  }
}