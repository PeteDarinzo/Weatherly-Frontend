import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import RangeSlider from "./RangeSlider";
import { makeStyles } from "@mui/styles";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { fetchForecastFromAPI } from "../../Actions/actions";

const useStyles = makeStyles({
  box: {
    marginTop: 40,
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
      <Box className={classes.box} sx={{border: "2px solid white", padding: "10px"}}>
        <Stack spacing={2}>
          <Typography variant="h5">Instructions:</Typography>
          <Typography>1. Select units of measurement.</Typography>
          <Typography>2. Select temperature range. You will not be recommended days where the temperature is between the two sliders.</Typography>
          <Typography>3. Select your preferred weather conditions.</Typography>
          <Typography>4. Click "SAVE PREFERENCES".</Typography>
        </Stack>
      </Box>
      <FormControl>
        <Box className={classes.box}>
          <FormLabel id="units" sx={{ fontSize: "1.5rem" }}>Units</FormLabel>
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
        </Box>

        <Box className={classes.box}>
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.5rem" }}>Temperatures:</FormLabel>
          <RangeSlider
            handleTempChange={handleTempChange}
            units={formData.units}
            vals={[formData.minTemp, formData.maxTemp]}
          />
        </Box>

        <Box className={classes.box}>
          <FormControl
            component="fieldset"
            variant="standard"
          >
            <FormLabel
              component="legend"
              sx={{ fontSize: "1.5rem" }}>Weather Conditions:</FormLabel>
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
        </Box>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="secondary"
          sx={{ marginTop: "40px" }}>Save Preferences</Button>

      </FormControl >
    </Box>
  );
}

export default UserPreferencesForm;