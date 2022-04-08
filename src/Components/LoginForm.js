import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
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
      <Typography variant="h3">Log In</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl>
          <TextField className={classes.field} name="username" id="username" label="Username" variant="outlined" value={formData.username} onChange={handleChange} />
          <TextField className={classes.field} name="password" id="password" label="Password" variant="outlined" value={formData.password} onChange={handleChange} />
          <Button type="submit" variant="outlined">Submit</Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default LoginForm;