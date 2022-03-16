import axios from "axios";
import {
  SAVE_MOVIE,
  FETCH_TITLES,
  DELETE_MOVIE,
  FETCH_MOVIE
} from "./actionTypes";

const API_URL = "http://localhost:3001";


/*** SEARCH MOVIES ***/

export function searchMovies() {

}


/*** SAVE MOVIE ***/

export function sendMovieToAPI(userId, movieId, title, poster, plot) {
  return async function (dispatch) {
    const res1 = await axios.post(`${API_URL}/movies/save`, { movieId, title, poster, plot });
    const res2 = await axios.post(`${API_URL}/users/movies`, { userId, movieId });
    dispatch(saveMovie(res1.data));
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
    const movie = res.data
    dispatch(getMovie(movie));
  }
}

function getMovie(movie) {
  return {
    type: FETCH_MOVIE,
    movie
  }
}