import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});


const LoginForm = ({ login }) => {

  const classes = useStyles();

  const initialState = {
    username: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    login({ ...formData });
    setFormData(initialState);
  }


  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h3">Log In</Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                className={classes.field}
                name="username"
                id="username"
                label="Username"
                variant="outlined"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                required />
              <TextField
                className={classes.field}
                type="password"
                name="password"
                id="password"
                label="Password"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required />
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="info">Submit</Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginForm;