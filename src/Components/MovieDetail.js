import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchMovieFromAPI } from "../Actions/actions";
import { deleteFromWatchList } from "../Actions/actions";

import Button from '@mui/material/Button';


const MovieDetail = () => {

  const { movieId } = useParams();
  let movie = useSelector(store => store.movies[movieId]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {

    async function getMovie() {
      await dispatch(fetchMovieFromAPI(movieId));
    }

    if (!movie) {
      getMovie();
    }

  }, [dispatch, movieId, movie]);

  function handleClick() {
    dispatch(deleteFromWatchList(1, movieId));
    history.push("/");
  }


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
      <Button onClick={handleClick} variant="contained" color="error">
        Remove
      </Button>
    </div>
  );
}

export default MovieDetail;