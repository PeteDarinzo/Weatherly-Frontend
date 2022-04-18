import React from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Scale from "./Scale";

const styles = {
  media: {
    height: 100,
    width: 100
  }
}

const ForecastPaper = ({ day, date, description, feelsLike, icon, units, compatibility }) => {
  return (
    <Paper
      elevation={12}
      style={{
        padding: 8,
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: "1.7rem" }}>{day}</Typography>
          <Typography sx={{ fontSize: "1.3rem" }}>{date}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Scale compatibility={compatibility} />
        </Grid>
        <Grid item xs={10}>
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt={description}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            style={{
              backgroundColor: "lightskyblue"
            }}
          />
          <Typography
            sx={{ fontSize: "1.5rem" }}>
            {Math.round(feelsLike)} &deg;{units}
          </Typography>
          <Typography
            sx={{ fontsize: "1.3rem" }}
            variant="body1">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Paper >
  );
}

export default ForecastPaper;