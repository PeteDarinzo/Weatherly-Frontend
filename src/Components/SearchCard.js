import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sendMovieToAPI } from "../Actions/actions";

// const SearchCard = ({ id, title, posterUrl }) => {
const SearchCard = ({ movie }) => {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(sendMovieToAPI(movie));
  }

  // function handleClick() {
  //   dispatch(sendMovieToAPI(1, id, title, posterUrl));
  // }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.Poster}
        alt={movie.Title}
        sx={{ maxWidth: "50%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Save</Button>
      </CardActions>
    </Card>
  );
}

export default SearchCard;