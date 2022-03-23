import { useReducer } from "react";
import { UPDATE_USER } from "../Actions/actionTypes";



const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {

    case UPDATE_USER:
      return { ...action.userData };

    default:
      return state;
  }
}