import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const styles = {
  media: {
    height: 100,
    width: 100
  }
}

const ForecastCard = ({ description, min, max, feelsLike, icon }) => {
  return (
    <Card sx={{ maxWidth: 150 }} variant="outlined">
      <CardContent>
        <Typography gutterBottom>
          Monday
        </Typography>
        <Typography>
          {description}
        </Typography>
        <CardMedia
          component="img"
          image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Paella dish"
          style={styles.media}
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
      </CardContent>
    </Card>
  );
}

export default ForecastCard;