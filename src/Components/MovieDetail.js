import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchMovieFromAPI } from "../Actions/actions";

import Button from '@mui/material/Button';


const MovieDetail = () => {

  const { movieId } = useParams();
  let movie = useSelector(store => store.movies[movieId]);

  const dispatch = useDispatch();


  useEffect(() => {

    async function getMovie() {
      console.log("dispatching get movie");
      await dispatch(fetchMovieFromAPI(movieId));
    }

    if (!movie) {
      console.log("getting movie");
      getMovie();
    }

  }, [dispatch, movieId, movie]);


  if (!movie) return (<b>Loading...</b>)

  return (
    <div>
      <img src={movie.Poster} />
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <p>{movie.Genre}</p>
      <p>{movie.imdbRating}</p>
      <p>{movie.Runtime}</p>
      <p>{movie.Plot}</p>
      <Button variant="contained" color="error">
        Remove
      </Button>
    </div>
  );
}

export default MovieDetail;