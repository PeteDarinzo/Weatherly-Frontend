import React from "react";
import ForecastCard from "./ForecastCard";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { v4 as uuid } from "uuid";
import Grid from '@mui/material/Grid';
import ForecastPaper from "./ForecastPaper";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecastFromAPI } from "../Actions/actions";
import { Typography } from "@mui/material";


const Forecast = () => {

  const userData = useSelector(store => store.user);
  const forecast = useSelector(store => store.forecast);
  const dispatch = useDispatch();

  const { lat, lon, city, minTemp, maxTemp, units, conditions } = userData;

  function handleClick() {
    dispatch(fetchForecastFromAPI(lat, lon, units));
  }

  return (
    <Container>
      <Box m={4}>
        <Button onClick={handleClick} variant="contained">Refresh</Button>
      </Box>
      <Typography variant="h3">Forecast for {city}</Typography>
      <Grid container >
        {forecast.map(day => {
          return (
            <Grid item xs={12} sm={6} md={3} key={uuid()}>

              <ForecastPaper day={day.name} min={day.temp.min} max={day.temp.max} feelsLike={day.feels_like.day} description={(day.weather[0]).description} icon={(day.weather[0]).icon} />

              {/* <ForecastCard min={day.temp.min} max={day.temp.max} feelsLike={day.feels_like.day} description={(day.weather[0]).description} icon={(day.weather[0]).icon} /> */}
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}

export default Forecast;