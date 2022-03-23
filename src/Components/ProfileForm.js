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
import Switch from '@mui/material/Switch';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})


const ProfileForm = () => {

  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector(store => store.user);

  const { postalCode, countryCode, minTemp, maxTemp, units, conditions } = userData;

  const initialState = {
    postalCode,
    countryCode,
    minTemp,
    maxTemp,
    units
  }

  useEffect(() => {

    if (userData) {
      setFormData({
        postalCode,
        countryCode,
        minTemp,
        maxTemp,
        units
      });
      setIsLoading(false);
    }

  }, [userData])

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleTempChange(tempArray) {
    setFormData(formData => ({
      ...formData,
      minTemp: tempArray[0],
      maxTemp: tempArray[1]
    }));
  }

  if (isLoading) return (<b>Loading...</b>)

  return (
    <Container>
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
        <FormLabel id="units">Units</FormLabel>
        <RadioGroup
          aria-labelledby="units"
          defaultValue={formData.units}
          name="units"
          onChange={handleChange}
        >
          <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
          <FormControlLabel value="metric" control={<Radio />} label="Metric" />
        </RadioGroup>
        <RangeSlider
          handleTempChange={handleTempChange}
          units={formData.units}
          vals={[minTemp, maxTemp]}
        />
        <FormControlLabel
          control={
            <Switch checked={formData.gilad} onChange={handleChange} name="gilad" />
          }
          label="Cloudy"
        />
        <FormControlLabel
          control={
            <Switch checked={formData.jason} onChange={handleChange} name="jason" />
          }
          label="Rainy"
        />
        <FormControlLabel
          control={
            <Switch checked={formData.antoine} onChange={handleChange} name="antoine" />
          }
          label="Windy"
        />
      </FormControl>
    </Container>
  );
}

export default ProfileForm;