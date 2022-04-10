import {
  FETCH_MOVIE,
  SAVE_MOVIE
} from "../Actions/actionTypes";


const INITIAL_STATE = {};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_MOVIE:
      return { ...state, [action.movie.imdbID]: action.movie };

    default:
      return state;

  }
}