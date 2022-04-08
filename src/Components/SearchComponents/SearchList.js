import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: 20
  }
});


const SearchList = ({ movies, saveMovie }) => {

  const classes = useStyles();


  return (
    <Container className={classes.container} maxWidth="sm">
      <Stack spacing={4}>
        {movies.map(movie => (<SearchCard movie={movie} saveMovie={saveMovie} key={movie.imdbID} />))}
      </Stack>
    </Container>
  );
}

export default SearchList;