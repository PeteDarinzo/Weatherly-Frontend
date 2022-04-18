import {
  FETCH_MOVIE,
  USER_LOGOUT
} from "../Actions/actionTypes";


const INITIAL_STATE = {};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_MOVIE:
      return { ...state, [action.movie.imdbID]: action.movie };

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;

  }
}