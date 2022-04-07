import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const SearchList = ({ movies, saveMovie }) => {

  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        {movies.map(movie => (<SearchCard movie={movie} saveMovie={saveMovie} key={movie.imdbID} />))}
      </Stack>
    </Container>
  );
}

export default SearchList;