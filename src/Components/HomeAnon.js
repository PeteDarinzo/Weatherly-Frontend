import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


/** Landing page for logged out users */

const HomeAnon = () => {


  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ margin: "20px" }}>WELCOME TO WEATHERLY</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{ marginTop: "10px", marginBottom: "10px", textAlign: "left" }}>What is it?</Typography>
          <Typography sx={{ textAlign: "left" }}>Your time is valuable.</Typography>
          <Typography sx={{ textAlign: "left" }}>Don't scroll endlessly looking for something to watch on a sunny day.</Typography>
          <Typography sx={{ textAlign: "left" }}>Keep your "to-watch" list close at hand.</Typography>
          <Typography sx={{ textAlign: "left" }}>Let the app find the next inclement weather day for you.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
          // sx={{ width: "250px", backgroundColor: "" }}
          >
            <Typography
              sx={{ margin: "10px", textAlign: "left" }}>
              New to Weatherly?
              <Button
                component={Link}
                to="/signup"
                variant="outlined"
                sx={{ m: 2 }}
                color="primary"
              >Signup</Button>
            </Typography>
            <Typography
              sx={{ margin: "10px", textAlign: "left" }}>
              Already a user?
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{ m: 2 }}
                color="secondary"
              >Login</Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeAnon;