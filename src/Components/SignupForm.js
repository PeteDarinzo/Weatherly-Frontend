import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { countryList, countryListAlpha2 } from "../countryData";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});

const SignupForm = ({ register }) => {

  const classes = useStyles();

  const initialState = {
    username: "",
    password: "",
    postalCode: "",
    countryCode: ""
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
    register(formData);
    setFormData(initialState);
  }


  return (
    <Container sx={{ p: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h3">Sign Up</Typography>
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
              <TextField
                className={classes.field}
                name="postalCode"
                id="postal-code"
                label="Postal Code"
                variant="outlined"
                value={formData.zipCode}
                onChange={handleChange}
                fullWidth
                required />
              <TextField
                className={classes.field}
                name="countryCode"
                id="country-code"
                value={formData.countryCode}
                label="Country"
                onChange={handleChange}
                select
                fullWidth>
                {countryList.map(country => <MenuItem key={countryListAlpha2[country]} value={countryListAlpha2[country]}>{country}</MenuItem>)}
              </TextField>
              <Button
                size="large"
                type="submit"
                variant="contained"
                color="primary">Submit</Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container >
  );
}

export default SignupForm;