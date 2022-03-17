import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const SearchList = ({ movie }) => {

  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        {Object.keys(movie).length ? (<SearchCard movie={movie} />) : (<b>Search for some movies!</b>)}
      </Stack>
    </Container>
  );
}

export default SearchList;