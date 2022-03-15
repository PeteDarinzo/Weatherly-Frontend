import './App.css';
import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Routes from "./Routes";

const API_URL = "http://localhost:3001";


function App() {

  const [searchResults, setSearchResults] = useState({
    "Title": "Frozen",
    "Year": "2013",
    "Rated": "PG",
    "Released": "27 Nov 2013",
    "Runtime": "102 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Chris Buck, Jennifer Lee",
    "Writer": "Jennifer Lee, Hans Christian Andersen, Chris Buck",
    "Actors": "Kristen Bell, Idina Menzel, Jonathan Groff",
    "Plot": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condi",
    "Language": "English, Norwegian",
    "Country": "United States",
    "Awards": "Won 2 Oscars. 82 wins & 60 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.4",
    "imdbVotes": "605,423",
    "imdbID": "tt2294629",
    "Type": "movie",
    "DVD": "18 Mar 2014",
    "BoxOffice": "$400,953,009",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  });

  async function getMovies(title) {
    const res = await axios.post(`${API_URL}/movies`, { title });
    setSearchResults(res.data);
  }

  async function addUser(user) {
    const userObj = {
      username: user.username,
      password: user.password,
      zipCode: user.zipCode
    }
    const res = await axios.post(`${API_URL}/auth/register`, userObj);
  }

  async function saveMovie(movie) {
    const movieObj = {
      id: movie.id,
      title: movie.title,
      posterUrl: movie.posterUrl
    }
    const res = await axios.post(`${API_URL}/movies/save`, movieObj);
  }

  return (
    <div>
      <NavBar />
      <Routes getMovies={getMovies} addUser={addUser} saveMovie={saveMovie} searchResults={searchResults} />
    </div>
  );
}

export default App;
