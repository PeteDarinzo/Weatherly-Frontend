import { Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RangeSlider from "./RangeSlider";
import { countryList, countryListAlpha2, codeListAlpha2 } from "../../countryData";
import { makeStyles } from "@mui/styles";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { fetchForecastFromAPI } from "../../Actions/actions";

const useStyles = makeStyles({
  box: {
    padding: 40,
    // margin: 20
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});

const UserPreferencesForm = ({ minTemp, maxTemp, units, thunderstorm, drizzle, rain, snow, overcast, updateUserPreferences }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user);

  let { lat, lon } = userData;

  const initialState = {
    minTemp,
    maxTemp,
    units,
    thunderstorm,
    drizzle,
    rain,
    snow,
    overcast
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      // [name]: value,
      minTemp: null,
      maxTemp: null,
      units: value
    }));
  }

  function handleTempChange(tempArray) {
    setFormData(formData => ({
      ...formData,
      minTemp: tempArray[0],
      maxTemp: tempArray[1]
    }));
  }

  function handleToggle(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  }

  function handleSubmit() {
    // refetch forecast in case units changed
    dispatch(fetchForecastFromAPI(lat, lon, formData.units));
    updateUserPreferences(formData);
  }

  return (
    <Box className={classes.box}>
      <Typography variant="h4">Change Watch Preferences</Typography>
      <FormControl>
        <FormLabel id="units">Units</FormLabel>
        <RadioGroup
          aria-labelledby="units"
          defaultValue={formData.units}
          name="units"
          onChange={handleChange}
        >
          <FormControlLabel
            value="imperial"
            control={<Radio />}
            label="Imperial"
          />
          <FormControlLabel
            value="metric"
            control={<Radio />}
            label="Metric"
          />
        </RadioGroup>
        <RangeSlider
          handleTempChange={handleTempChange}
          units={formData.units}
          vals={[formData.minTemp, formData.maxTemp]}
        />
        <FormControl
          component="fieldset"
          variant="standard"
        >
          <FormLabel
            component="legend">Toggle Watch Preferences</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.thunderstorm}
                  onChange={handleToggle}
                  name="thunderstorm" />
              }
              label="Thunderstorm"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData.drizzle}
                  onChange={handleToggle}
                  name="drizzle" />
              }
              label="Drizzle"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData.rain}
                  onChange={handleToggle}
                  name="rain" />
              }
              label="Rain"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData.snow}
                  onChange={handleToggle}
                  name="snow" />
              }
              label="Snow"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData.overcast}
                  onChange={handleToggle}
                  name="overcast" />
              }
              label="overcast"
            />
          </FormGroup>
        </FormControl>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="secondary">Save Preferences</Button>
      </FormControl >
    </Box>
  );
}

export default UserPreferencesForm;