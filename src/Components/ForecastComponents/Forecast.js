import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { v4 as uuid } from "uuid";
import Grid from '@mui/material/Grid';
import ForecastPaper from "./ForecastPaper";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecastFromAPI } from "../../Actions/actions";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blue } from "@mui/material/colors";

const useStyles = makeStyles({
  box: {
    padding: 40,
    // margin: 20
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  },
  root: {
    color: "blue"
  }
});


const Forecast = () => {

  const classes = useStyles();

  const userData = useSelector(store => store.user);
  const { lat, lon, city, minTemp, maxTemp, units, thunderstorm, drizzle, rain, snow, overcast } = userData;
  const forecast = useSelector(store => store.forecast);
  const dispatch = useDispatch();
  const [userPrefs, setUserPrefs] = useState({})

  useEffect(() => {

    if (userData) {
      setUserPrefs({ minTemp, maxTemp, thunderstorm, drizzle, rain, snow, overcast });
      if (!forecast.length) {
        dispatch(fetchForecastFromAPI(lat, lon, units));
      }
    }

  }, [userData]);


  // function handleClick() {
  //   dispatch(fetchForecastFromAPI(lat, lon, units));
  // }

  function getCompatibility(day) {
    let conditionsMet;
    let tempMet;
    const conditionCode = day.weather[0].id;
    const temperature = day.feels_like.day;
    if (((200 <= conditionCode) && (conditionCode <= 232)) && (userPrefs.thunderstorm)) {
      conditionsMet = true;
    } else if (((300 <= conditionCode) && (conditionCode <= 321)) && (userPrefs.drizzle)) {
      conditionsMet = true;
    } else if (((500 <= conditionCode) && (conditionCode <= 531)) && (userPrefs.drizzle)) {
      conditionsMet = true;
    } else if (((600 <= conditionCode) && (conditionCode <= 622)) && (userPrefs.snow)) {
      conditionsMet = true;
    } else if (((801 <= conditionCode) && (conditionCode <= 804)) && (userPrefs.overcast)) {
      conditionsMet = true;
    } else {
      conditionsMet = false
    }

    if (temperature <= userPrefs.minTemp || userPrefs.maxTemp <= temperature) {
      tempMet = true;
    }

    if (conditionsMet && tempMet) {
      return 3;
    } else if (conditionsMet || tempMet) {
      return 2;
    } else {
      return 1;
    }
  }

  if (!forecast.length) return (<b>Loading forecast</b>)


  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ margin: "20px" }}
        color="textPrimary"
      >Forecast for {city}</Typography>
      <Grid container spacing={3}>
        {forecast.map(day => {

          let compatibility = getCompatibility(day);

          return (
            <Grid item xs={12} sm={6} md={3} key={uuid()}>

              <ForecastPaper
                day={day.name}
                date={day.date}
                min={day.temp.min}
                max={day.temp.max}
                feelsLike={day.feels_like.day}
                description={(day.weather[0]).description}
                icon={(day.weather[0]).icon}
                units={units === "imperial" ? "F" : "C"}
                compatibility={compatibility} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}

export default Forecast;