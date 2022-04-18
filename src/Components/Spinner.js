import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Spinner = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item sx={{marginTop: "40%"}}>
          <Box
            component="img"
            src="gear.svg"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Spinner;