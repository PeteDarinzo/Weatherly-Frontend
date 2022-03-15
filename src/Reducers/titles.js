import {
  FETCH_TITLES
} from "../Actions/actionTypes";


function makeTitleFromMovie({ title, poster, plot }) {
  return { title, poster, plot };
}


const INITIAL_STATE = [];

export default function titles(state = INITIAL_STATE, action) {

  switch (action.type) {

    case FETCH_TITLES:
      return [...action.titles];

    default:
      return state;

  }
}