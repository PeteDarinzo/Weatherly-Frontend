import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchMovieFromAPI } from "../../Actions/actions";
import { deleteFromWatchList } from "../../Actions/actions";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: 40
  }
});


const MovieDetail = () => {

  const classes = useStyles();

  const { movieId } = useParams();
  let movie = useSelector(store => store.movies[movieId]);

  const dispatch = useDispatch();
  const history = useHistory();

  /** the movie may already be present in the store, if not, it is fetched from the API */
  useEffect(() => {

    async function getMovie() {
      await dispatch(fetchMovieFromAPI(movieId));
    }

    if (!movie) {
      getMovie();
    }

  }, [dispatch, movieId, movie]);

  function handleClick() {
    dispatch(deleteFromWatchList("peter", movieId));
    history.push("/");
  }

  if (!movie) return (<b>Loading...</b>)

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item md={4}>
          <img width="250px" src={movie.Poster} />
        </Grid>
        <Grid item md={4}>
          <Stack spacing={2}>
            <Typography variant="h3">{movie.Title}</Typography>
            <Typography><b>Year:</b> {movie.Year}</Typography>
            <Typography><b>Genre:</b> {movie.Genre}</Typography>
            <Typography><b>IMDB Rating:</b> {movie.imdbRating}</Typography>
            <Typography><b>Length:</b> {movie.Runtime}</Typography>
            <Typography><b>Plot:</b> {movie.Plot}</Typography>
            <Button
              onClick={handleClick}
              variant="contained"
              color="error"
            >
              Remove
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieDetail;