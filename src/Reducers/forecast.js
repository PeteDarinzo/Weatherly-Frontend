import { GET_FORECAST, USER_LOGOUT } from "../Actions/actionTypes";


const INITIAL_STATE = [];


export default function forecast(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_FORECAST:
      return [...action.forecast];

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;

  }
}