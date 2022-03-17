import React from "react";
import MovieSearchForm from "./MovieSearchForm";
import SearchList from "./SearchList";

const Home = ({ getMovies, searchResults }) => {

  return (
    <div>
      <MovieSearchForm getMovies={getMovies} />
      <SearchList movie={searchResults}  />
    </div>
  );
}

export default Home;