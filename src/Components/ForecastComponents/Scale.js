import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";


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
        sx={{ backgroundColor: (compatibility > 2 ? "#4caf50" : "none") }}
      >
      </Box>
      <Box
        className={classes.box}
        sx={{ backgroundColor: (compatibility > 1 ? "#81c784" : "none") }}
      >
      </Box>
      <Box
        className={classes.box} sx={{ backgroundColor: (compatibility > 0 ? "#a5d6a7" : "none") }}>
      </Box>
    </Container >
  );
}

export default Scale;