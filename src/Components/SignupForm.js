import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const SignupForm = ({ register }) => {


  const initialState = {
    username: "",
    password: "",
    zipCode: ""
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
    register({ ...formData });
    setFormData(initialState);
  }


  return (
    <div>
      <Typography variant="h3">Sign Up</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField name="username" id="username" label="Username" variant="standard" value={formData.username} onChange={handleChange} />
        <TextField name="password" id="password" label="Password" variant="standard" value={formData.password} onChange={handleChange} />
        <TextField name="zipCode" id="zip-code" label="Zip Code" variant="standard" value={formData.zipCode} onChange={handleChange} />
        <Button onClick={handleSubmit} variant="outlined">Submit</Button>
      </Box>
    </div>
  );
}

export default SignupForm;