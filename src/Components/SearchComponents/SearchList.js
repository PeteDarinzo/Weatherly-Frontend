import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  container: {
    padding: 20
  }
});


const SearchList = ({ movies, saveMovie }) => {

  const classes = useStyles();

  if (movies === undefined) {
    return (
      <Typography>No results</Typography>
    )
  }

  return (
    <Container className={classes.container} maxWidth="sm">
      <Stack>
        {movies.map(movie => (<SearchCard movie={movie} saveMovie={saveMovie} key={movie.imdbID} />))}
      </Stack>
    </Container>
  );
}

export default SearchList;