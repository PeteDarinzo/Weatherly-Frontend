import React from "react";
import Container from '@mui/material/Container';
import { v4 as uuid } from "uuid";
import Grid from '@mui/material/Grid';
import ForecastPaper from "./ForecastPaper";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import determineMatch from "../../Helpers/determineMatch";


const Forecast = () => {

  const userData = useSelector(store => store.user);
  const forecast = useSelector(store => store.forecast);

  if (!forecast.length) return (<b>Loading forecast</b>)


  return (
    <Container>
      <Typography variant="h2" sx={{ m: 5 }}>
        Forecast for {userData.city}:
      </Typography>
      <Grid container spacing={3}>
        {forecast.map(day => {
          let compatibility = determineMatch(day, userData);
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
                units={userData.units === "imperial" ? "F" : "C"}
                compatibility={compatibility} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Forecast;