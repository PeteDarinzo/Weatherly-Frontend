import { GET_FORECAST } from "../Actions/actionTypes";


const INITIAL_STATE = [];


export default function forecast(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_FORECAST:
      return [...action.forecast];

    default:
      return state;

  }
}