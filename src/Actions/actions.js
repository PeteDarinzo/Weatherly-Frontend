import axios from "axios";
import WeatherlyApi from "../Components/Api";
import {
  SAVE_MOVIE,
  FETCH_TITLES,
  DELETE_MOVIE,
  FETCH_MOVIE,
  GET_FORECAST,
  UPDATE_USER
} from "./actionTypes";
import CircularlyLinkedList from "../Components/DataStructures/CircularLinkedList";
import { DateTime } from "luxon";

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

/** circularly linked list containing days of the week */
const DAYS_OF_WEEK = new CircularlyLinkedList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?"


/*** SAVE MOVIE ***/

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

function saveMovie(movie) {
  return {
    type: SAVE_MOVIE,
    movie
  }
}

/*** FETCH TITLE ***/

export function fetchTitlesFromAPI(username) {
  return async function (dispatch) {
    const titles = await WeatherlyApi.getAllTitles(username);
    dispatch(getTitles(titles));
  }
}

function getTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  }
}

/*** FETCH MOVIE ***/

export function fetchMovieFromAPI(movieId) {
  return async function (dispatch) {
    const movie = await WeatherlyApi.searchMoviesById(movieId);
    dispatch(getMovie(movie));
  }
}

function getMovie(movie) {
  return {
    type: FETCH_MOVIE,
    movie
  }
}

/*** DELETE MOVIE ***/

/**
 * DELETE second param is options
 * https://masteringjs.io/tutorials/axios/delete-with-body#:~:text=To%20send%20a%20request%20body,should%20set%20the%20data%20option.&text=Remember%20that%20the%202nd%20parameter,like%20you%20can%20with%20axios.
 */

export function deleteFromWatchList(username, movieId) {
  return async function (dispatch) {
    // await axios.delete(`${API_URL}/users/${userId}/movies`, { data: { movieId } });
    WeatherlyApi.removeFromWatchList(username, movieId)
    dispatch(deleteMovie(movieId));
  }

  function deleteMovie(movieId) {
    return {
      type: DELETE_MOVIE,
      movieId
    }
  }

}

/** FETCH FORECAST */

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

function getForecast(forecast) {
  return {
    type: GET_FORECAST,
    forecast
  }
}

/** UPDATE USER */

export function saveUserData(userData) {
  return {
    type: UPDATE_USER,
    userData
  }
}