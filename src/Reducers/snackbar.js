import {
  SET_SNACKBAR
} from "../Actions/actionTypes";


const INITIAL_STATE = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: ""
};

export default function snackbar(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage
      };

    default:
      return state;

  }
}