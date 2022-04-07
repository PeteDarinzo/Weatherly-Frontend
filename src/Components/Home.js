import React from "react";
import MovieSearchForm from "./SearchComponents/MovieSearchForm";
import SearchList from "./SearchComponents/SearchList";

const Home = ({ getMovies, searchResults, saveMovie }) => {

  return (
    <div>
      <MovieSearchForm getMovies={getMovies} />
      <SearchList movies={searchResults} saveMovie={saveMovie} />
    </div>
  );
}

export default Home;