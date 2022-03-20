import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import NavBar from "./NavBar";
import Routes from "./Routes";
import WeatherlyApi from './Api';
import jwt_decode from "jwt-decode";
import { sendMovieToAPI } from '../Actions/actions';
import { useDispatch } from "react-redux";

function App() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [userCredentials, setUserCredentials] = useState("");
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    if (localStorage.getItem("weatherlyToken")) {
      const token = JSON.parse(localStorage.getItem("weatherlyToken"));
      // WeatherlyApi.token = token; // set token for future reqeusts
      setUserToken(token);
    }
  }, []);

  useEffect(() => {
    if (userToken) {
      const decoded = jwt_decode(userToken);
      const username = decoded.username;
      setUserCredentials(username);
    }
  }, [userToken]);

  /** Search OMDB for movies */
  async function getMovies(title) {
    const res = await WeatherlyApi.searchMovies(title);
    setSearchResults(res);
  }


  /** Search OMDB for movies */
  // async function getMovies(title) {
  //   const res = await axios.get(`${API_URL}/movies/title/${title}`);
  //   setSearchResults(res.data);
  // }

  /** Register a new users */
  async function register(user) {
    const userObj = {
      username: user.username,
      password: user.password,
      zipCode: user.zipCode
    }
    // setIsLoading(true);
    const token = await WeatherlyApi.register(userObj);
    // const res = await axios.post(`${API_URL}/auth/register`, userObj);
    // const token = res.data.token;
    localStorage.setItem("weatherlyToken", JSON.stringify(token));
    setUserToken(token);
    history.push("/");
  }

  async function login(user) {
    const userObj = {
      username: user.username,
      password: user.password,
    }
    const token = await WeatherlyApi.getToken(userObj);
    // const res = await axios.post(`${API_URL}/auth/token`, userObj);
    // const token = res.data.token;
    localStorage.setItem("weatherlyToken", JSON.stringify(token));
    setUserToken(token);
    history.push("/");
  }

  function logout() {
    localStorage.removeItem("weatherlyToken");
    setUserToken("");
  }

  function saveMovie(movie) {
    dispatch(sendMovieToAPI(movie, userCredentials));
  }

  return (
    <div>
      <NavBar loggedIn={userToken} logout={logout} />
      <Routes
        getMovies={getMovies}
        searchResults={searchResults}
        register={register}
        login={login}
        loggedIn={userToken}
        saveMovie={saveMovie}
        username={userCredentials}
      />
    </div>
  );
}

export default App;
