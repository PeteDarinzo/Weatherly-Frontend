import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux'
import { setSnackbar } from "../../Actions/actions";

const SearchCard = ({ movie, saveMovie }) => {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setSnackbar(true, "success", "Movie saved"));
    saveMovie(movie);
  }

  return (
    <Card sx={{ maxWidth: '275px', mx: "auto", my: 3, backgroundColor: "#2b2b2b" }} >
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