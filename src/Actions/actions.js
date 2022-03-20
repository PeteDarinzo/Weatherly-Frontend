import axios from "axios";
import WeatherlyApi from "../Components/Api";
import {
  SAVE_MOVIE,
  FETCH_TITLES,
  DELETE_MOVIE,
  FETCH_MOVIE
} from "./actionTypes";

const API_URL = "http://localhost:3001";


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
    // const res = await axios.get(`${API_URL}/users/${username}/movies`);
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

