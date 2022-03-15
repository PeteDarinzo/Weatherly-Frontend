import React from "react";
import Button from '@mui/material/Button';


const MovieDetail = ({ title, year, rating, runtime, genre, plot, poster, }) => {

  return (
    <div>
      <img src={poster} />
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{genre}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      <p>{plot}</p>
      <Button variant="contained" color="error">
        Remove
      </Button>
    </div>
  );
}

export default MovieDetail;