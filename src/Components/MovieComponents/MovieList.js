import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from "../../Actions/actions";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  container: {
    padding: 40
  }
});

const MovieList = ({ username }) => {
  
  const classes = useStyles();

  const titles = useSelector(store => store.titles);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTitles() {
      await dispatch(fetchTitlesFromAPI(username));
      setIsLoading(false);
    }

    if (isLoading) loadTitles();

  }, [dispatch, isLoading]);

  if (isLoading) return (<b>Loading...</b>);

  if (!titles.length) return (<b>No movies to show!</b>);

  return (
    <Container className={classes.container}>
      <Typography my={5} variant="h2">Your Movies:</Typography>
      <Grid container spacing={4} >
          {titles.map(m => {
            return (
              <Grid item xs={12} sm={4} md={3} lg={2}>
                <MovieCard id={m.id} title={m.title} img={m.posterUrl} plot={m.plot} key={m.id} />
              </Grid>);
          })}
      </Grid>
    </Container>
  );
}

export default MovieList;