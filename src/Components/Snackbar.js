import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { makeStyles } from "@mui/styles";
import { setSnackbar } from "../Actions/actions";


// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2)
//     }
//   }
// }));


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
        anchorOrigin={{ vertical, horizontal}}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={snackbarType}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );

}

export default CustomizedSnackbars