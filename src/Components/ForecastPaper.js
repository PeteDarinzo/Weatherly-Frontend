import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const styles = {
  media: {
    height: 100,
    width: 100
  }
}

const ForecastPaper = ({ day, description, min, max, feelsLike, icon }) => {
  return (
    <Paper
      elevation={12}
      style={{
        padding: 8,
        border: "1px solid black",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>{day}</Typography>
      <Typography>
        {description}
      </Typography>
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
      <Typography>
        Min: {min}
      </Typography>
      <Typography>
        Max: {max}
      </Typography>
      <Typography>
        Feels Like: {feelsLike}
      </Typography>
    </Paper >
  );
}

export default ForecastPaper;