import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { makeStyles } from "@mui/styles";
import { setSnackbar } from "../Actions/actions";


/** Styling */
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2)
//     }
//   }
// }));

/** Snackbar/Redux implementation adapted from Anthony Sistilli Youtube tutorial
 * https://www.youtube.com/watch?v=CVnSrLZ_HaQ
*/

const CustomizedSnackbars = () => {

  // const classes = useStyles();

  const dispatch = useDispatch();

  const snackbarOpen = useSelector(store => store.snackbar.snackbarOpen);
  const snackbarType = useSelector(store => store.snackbar.snackbarType);
  const snackbarMessage = useSelector(store => store.snackbar.snackbarMessage);
  const vertical = useSelector(store => store.snackbar.snackbarVertical);
  const horizontal = useSelector(store => store.snackbar.snackbarHorizontal);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(false, snackbarType, snackbarMessage));
  };

  return (
    <div
    // className={classes.root}
    >
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={snackbarType}
          sx={{ fontSize: "1.5rem" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );

}

export default CustomizedSnackbars