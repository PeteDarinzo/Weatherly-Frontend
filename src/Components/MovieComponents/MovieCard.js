import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = ({ id, title, img }) => {
  return (
    <Card sx={{ height: '100%', backgroundColor: "#2b2b2b" }}>
      <CardActionArea
        component={Link}
        to={`/movies/${id}`}
        sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image={img}
          alt={title}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "1.2rem" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
