import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  box: {
    border: "2px solid white",
    width: "25px",
    height: "25px"
  }
});

const Scale = ({ compatibility }) => {

  const classes = useStyles();
  return (
    <Container>
      <Box
        className={classes.box}
        sx={{ backgroundColor: (compatibility > 2 ? "blue" : "none") }}
      >
      </Box>
      <Box
        className={classes.box}
        sx={{ backgroundColor: (compatibility > 1 ? "green" : "none") }}
      >
      </Box>
      <Box
        className={classes.box} sx={{ backgroundColor: (compatibility > 0 ? "#ffe135" : "none") }}>
      </Box>
    </Container >
  );
}

export default Scale;