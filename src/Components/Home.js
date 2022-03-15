import React from "react";
import MovieSearchForm from "./MovieSearchForm";
import MovieList from "./MovieList";
import SearchCard from "./SearchCard";
import SearchList from "./SearchList";

const Home = ({ getMovies, saveMovie, searchResults }) => {

  let movies = [{
    id: "tt2294629",
    title: "Frozen",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condi"
  },
  {
    id: "tt2294629",
    title: "Frozen",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condi"
  },
  {
    id: "tt2294629",
    title: "Frozen",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condi"
  },
  {
    id: "tt2294629",
    title: "Frozen",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condi"
  },
  {
    id: "tt2294629",
    title: "Frozen",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condi"
  }]

  return (
    <div>
      <MovieSearchForm getMovies={getMovies} />
      <SearchList movie={searchResults} saveMovie={saveMovie} />
    </div>
  );
}

export default Home;