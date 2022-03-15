import axios from "axios";
import {
  SAVE_MOVIE,
  FETCH_TITLES,
  DELETE_MOVIE
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
    console.log("requesting titles");
    const res = await axios.get(`${API_URL}/users/${username}/movies`);
    console.log("Titles:", res.data);
    dispatch(getTitles(res.data));
  }
}

function getTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  }
}