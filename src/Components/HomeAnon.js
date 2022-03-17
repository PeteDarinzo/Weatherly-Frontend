import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

/** Landing page for logged out users */

const HomeAnon = () => {

  return (
    <div>
      <Typography variant="h2">WELCOME TO WEATHERLY</Typography>
      <ButtonGroup>
        <Button component={Link} to="/signup" variant="outlined">Signup</Button>
        <Button component={Link} to="/login" variant="outlined">Login</Button>
      </ButtonGroup>
    </div>
  )
}

export default HomeAnon;