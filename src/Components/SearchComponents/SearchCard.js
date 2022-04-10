import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SearchCard = ({ movie, saveMovie }) => {

  function handleClick() {
    saveMovie(movie);
  }

  return (
    <Card sx={{ maxWidth: '275px' }}>
      <CardMedia
        component="img"
        image={movie.Poster}
        alt={movie.Title}
        sx={{ width: '100%', height: '100%' }}
      />
      <CardContent>
        <Typography variant="h6">
          {movie.Title}
        </Typography>
        <Typography>
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} variant="contained">Save</Button>
      </CardActions>
    </Card>
  );
}

export default SearchCard;