import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import NavBar from "./NavBar";
import Routes from "./Routes";
import WeatherlyApi from './Api';
import jwt_decode from "jwt-decode";
import { fetchForecastFromAPI, saveUserData, sendMovieToAPI, fetchTitlesFromAPI } from '../Actions/actions';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { TitleSharp } from '@mui/icons-material';


function App() {

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const forecast = useSelector(store => store.forecast);
  const titles = useSelector(store => store.titles);

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [signupError, setSignupError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("weatherlyToken")) {
      const token = JSON.parse(localStorage.getItem("weatherlyToken"));
      WeatherlyApi.token = token; // set token for future requests
      setUserToken(token);
    }
  }, []);

  useEffect(() => {

    async function loadUserData() {
      const decoded = jwt_decode(userToken);
      const username = decoded.username;
      const userData = await WeatherlyApi.getUserData(username);
      setUserData(userData);
      dispatch(saveUserData(userData));
    }

    if (userToken) loadUserData();

    setSignupError("");

  }, [userToken]);

  useEffect(() => {

    async function loadTitles(username) {
      await dispatch(fetchTitlesFromAPI(username));
      // setIsLoading(false);
    }

    async function loadForecast(lat, lon, units) {
      await dispatch(fetchForecastFromAPI(lat, lon, units))
    }

    const data = Object.keys(userData);

    if (data.length) {

      const { lat, lon, units, username } = userData;

      if (!forecast.length) {
        loadForecast(lat, lon, units);
      }

      if (!titles.length) {
        loadTitles(username);
      }
    }

  }, [userData]);


  /** Search OMDB for movies */
  async function getMovies(title) {
    const res = await WeatherlyApi.searchMoviesByTitle(title);
    setSearchResults(res.Search);
  }


  /** Register a new user */

  async function register(userData) {
    const { username, password, postalCode, countryCode } = userData;
    try {
      // setIsLoading(true);
      const token = await WeatherlyApi.register(userData);
      localStorage.setItem("weatherlyToken", JSON.stringify(token));
      setUserToken(token);
      history.push("/");
    } catch (err) {
      setSignupError(err[0]);
      // setIsLoading(false);
    }
  }

  async function login(user) {
    const userObj = {
      username: user.username,
      password: user.password,
    }
    const token = await WeatherlyApi.getToken(userObj);
    localStorage.setItem("weatherlyToken", JSON.stringify(token));
    setUserToken(token);
    history.push("/");
  }

  function logout() {
    localStorage.removeItem("weatherlyToken");
    setUserToken("");
  }

  function saveMovie(movie) {
    dispatch(sendMovieToAPI(movie, userData.username));
  }

  async function updateUser(data) {
    const updatedUser = await WeatherlyApi.updateUser(userData.username, data);
    dispatch(saveUserData(updatedUser));
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh" }}>
        <NavBar loggedIn={userToken} logout={logout} />
        <Routes
          getMovies={getMovies}
          searchResults={searchResults}
          register={register}
          login={login}
          loggedIn={userToken}
          saveMovie={saveMovie}
          username={userData.username}
          updateUser={updateUser}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
