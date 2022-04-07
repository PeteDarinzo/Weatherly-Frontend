import React, { useState } from "react";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const MovieSearchForm = ({ getMovies }) => {

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
      <form onSubmit={handleSubmit}>
        <FormControl onSubmit={handleSubmit}>
          <TextField
            name="title"
            id="title"
            label="Title"
            variant="standard"
            value={formData.title}
            onChange={handleChange} />
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Search</Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default MovieSearchForm;