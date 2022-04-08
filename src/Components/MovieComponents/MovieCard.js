import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = ({ id, title, img, plot }) => {
  return (
    <Card sx={{height: '100%'}}>
      <CardActionArea
        component={Link}
        to={`/movies/${id}`}>
        <CardMedia
          component="img"
          image={img}
          alt={title}
        />
        <CardContent>
          <Typography
            variant="subtitle1" >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            {plot}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
