import React from "react";
import MovieSearchForm from "./MovieSearchForm";
import SearchList from "./SearchList";

const Home = ({ getMovies, searchResults, saveMovie }) => {

  return (
    <div>
      <MovieSearchForm getMovies={getMovies} />
      <SearchList movie={searchResults} saveMovie={saveMovie} />
    </div>
  );
}

export default Home;