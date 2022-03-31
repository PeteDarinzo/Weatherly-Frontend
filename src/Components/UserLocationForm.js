import { Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RangeSlider from "./RangeSlider";
import { countryList, countryListAlpha2, codeListAlpha2 } from "../countryData";
import { makeStyles } from "@mui/styles";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});

const UserLocationForm = ({ postalCode, countryCode, updateUserLocation }) => {

  const classes = useStyles();

  const initialState = {
    postalCode,
    countryCode
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    updateUserLocation(formData);
  }

  return (
    <FormControl>
      <TextField
        className={classes.field}
        name="postalCode"
        id="postalCode"
        label="Postal Code"
        variant="outlined"
        value={formData.postalCode}
        onChange={handleChange}
      />
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
      <Button variant="contained" color="secondary" onClick={handleSubmit}>Save Location</Button>
    </FormControl>
  );
}

export default UserLocationForm;