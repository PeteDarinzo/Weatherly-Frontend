import { UPDATE_USER, USER_LOGOUT } from "../Actions/actionTypes";



const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {

    case UPDATE_USER:
      return { ...action.userData };

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}