import React, { useState } from "react";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    margin: 20,
    padding: 20
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});

const MovieSearchForm = ({ getMovies }) => {

  const classes = useStyles();

  const intialState = {
    title: ""
  }

  const [formData, setFormData] = useState(intialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(formData.title);
  }

  return (
    <Container>
      <Box className={classes.form} sx={{ border: '3px solid black' }}>
        <Typography variant="h4">Search Titles</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField
              className={classes.field}
              name="title"
              id="title"
              label="Title"
              variant="outlined"
              value={formData.title}
              fullWidth
              onChange={handleChange}
              required />
            <Button type="submit" variant="contained" color="secondary">Search</Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}

export default MovieSearchForm;