import React from "react";
import MovieSearchForm from "./SearchComponents/MovieSearchForm";
import SearchList from "./SearchComponents/SearchList";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Home = ({ getMovies, searchResults, saveMovie }) => {

  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <MovieSearchForm getMovies={getMovies} />
        </Grid>
        <Grid item md={6}> 
          <SearchList movies={searchResults} saveMovie={saveMovie} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;