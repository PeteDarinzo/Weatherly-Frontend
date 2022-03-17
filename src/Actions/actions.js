import axios from "axios";
import {
  SAVE_MOVIE,
  FETCH_TITLES,
  DELETE_MOVIE,
  FETCH_MOVIE
} from "./actionTypes";

const API_URL = "http://localhost:3001";


/*** SEARCH MOVIES ***/




/*** SAVE MOVIE ***/

export function sendMovieToAPI(userId, movieId, title, posterUrl) {
  const movieObj = {
    id: movieId,
    title,
    posterUrl
  }
  return async function (dispatch) {
    await Promise.all([
      axios.post(`${API_URL}/movies/save`, movieObj),
      axios.post(`${API_URL}/users/${userId}/movies`, { movieId }),
    ]);
    dispatch(saveMovie(movieObj));
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
    const res = await axios.get(`${API_URL}/users/${username}/movies`);
    dispatch(getTitles(res.data));
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

