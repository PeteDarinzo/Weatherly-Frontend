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
import CircularlyLinkedList from "../Components/CircularLinkedList";

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

/** circularly linked list containing days of the week */
const DAYS_OF_WEEK = new CircularlyLinkedList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

const API_URL = "http://localhost:3001";

const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?"


/*** SEARCH MOVIES ***/




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

// export function sendMovieToAPI(userId, movieId, title, posterUrl) {
//   const movieObj = {
//     id: movieId,
//     title,
//     posterUrl
//   }
//   return async function (dispatch) {
//     await Promise.all([
//       axios.post(`${API_URL}/movies/save`, movieObj),
//       axios.post(`${API_URL}/users/${userId}/movies`, { movieId }),
//     ]);
//     dispatch(saveMovie(movieObj));
//   }
// }

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
    const res = await axios.get(`${API_URL}/movies/${movieId}`);
    const movie = res.data;
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

export function deleteFromWatchList(userId, movieId) {
  return async function (dispatch) {
    await axios.delete(`${API_URL}/users/${userId}/movies`, { data: { movieId } });
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
    const today = d.slice(0, 3);
    let days = DAYS_OF_WEEK.traverse(today, 8);
    const forecast = res.data.daily.map(day => {
      day.name = days.shift();
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

// export function sendUserDataToApi(userData) {
//   // return async function(dispatch) {

//   // }
// }

export function saveUserData(userData) {
  return {
    type: UPDATE_USER,
    userData
  }
}