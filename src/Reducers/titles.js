import {
  DELETE_MOVIE,
  FETCH_TITLES, SAVE_MOVIE
} from "../Actions/actionTypes";


function makeTitleFromMovie({ id, title, posterUrl }) {
  return { id, title, posterUrl };
}


const INITIAL_STATE = [];

export default function titles(state = INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_TITLES:
      return [...action.titles];

    case SAVE_MOVIE:
      return [...state, makeTitleFromMovie(action.movie)];

    case DELETE_MOVIE:
      return state.filter(title => title.id !== action.movieId);

    default:
      return state;
  }
}