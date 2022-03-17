import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const SearchList = ({ movie }) => {

  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <SearchCard id={movie.imdbID} title={movie.Title} posterUrl={movie.Poster} />
      </Stack>
    </Container>
  );
}

export default SearchList;