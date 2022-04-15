import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from "../../Actions/actions";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { ConstructionOutlined } from "@mui/icons-material";

const useStyles = makeStyles({
  container: {
    padding: 40
  }
});

const MovieList = () => {

  const classes = useStyles();

  const titles = useSelector(store => store.titles);

  if (!titles.length) return (<b>No movies to show!</b>);

  return (
    <Container className={classes.container}>
      <Typography mb={4} variant="h2">Your Movies:</Typography>
      <Grid container spacing={4} >
        {titles.map(m => {
          return (
            <Grid item xs={12} sm={4} md={3} lg={2} key={m.id}>
              <MovieCard id={m.id} title={m.title} img={m.posterUrl} plot={m.plot} />
            </Grid>);
        })}
      </Grid>
    </Container>
  );
}

export default MovieList;