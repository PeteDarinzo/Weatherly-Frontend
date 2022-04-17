import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import NavBar from "./NavBar";
import Routes from "./Routes";
import WeatherlyApi from './Api';
import jwt_decode from "jwt-decode";
import { fetchForecastFromAPI, saveUserData, sendMovieToAPI, fetchTitlesFromAPI, deleteFromWatchList } from '../Actions/actions';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import { green } from '@mui/material/colors';
import CustomizedSnackbars from './Snackbar';
import { setSnackbar } from "../Actions/actions";

import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: '#039be5',
      },
      secondary: green,
    },
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const forecast = useSelector(store => store.forecast);
  // const titles = useSelector(store => store.titles);

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState({});
  const [searchResults, setSearchResults] = useState([]);

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
    }

    async function loadForecast(lat, lon, units) {
      await dispatch(fetchForecastFromAPI(lat, lon, units))
    }

    const data = Object.keys(userData);

    if (data.length) {

      setIsLoading(true);

      const { lat, lon, units, username } = userData;

      if (!forecast.length) {
        loadForecast(lat, lon, units);
      }

      // if (!titles.length) {
        loadTitles(username);
      // }

      setIsLoading(false);

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
      const token = await WeatherlyApi.register(userData);
      localStorage.setItem("weatherlyToken", JSON.stringify(token));
      setUserToken(token);
      history.push("/");
    } catch (err) {
      dispatch(setSnackbar(true, "error", "Username Taken"));
    }
  }

  async function login(user) {
    try {
      const userObj = {
        username: user.username,
        password: user.password,
      }
      const token = await WeatherlyApi.getToken(userObj);
      localStorage.setItem("weatherlyToken", JSON.stringify(token));
      setUserToken(token);
      history.push("/");
    } catch (e) {
      dispatch(setSnackbar(true, "error", "Incorrect Username or Password"));
    }
  }

  function logout() {
    localStorage.removeItem("weatherlyToken");
    setUserToken("");
    dispatch(setSnackbar(true, "success", "Logged Out!"));
  }

  async function saveMovie(movie) {
    try {
      await dispatch(sendMovieToAPI(movie, userData.username));
      dispatch(setSnackbar(true, "success", "Saved!"));
    } catch (e) {
      dispatch(setSnackbar(true, "warning", "Already Saved!"));
    }
  }

  function removeMovie(movieId) {
    dispatch(deleteFromWatchList(userData.username, movieId));
    dispatch(setSnackbar(true, "success", "Deleted!"));
  }

  async function updateUser(data) {
    const updatedUser = await WeatherlyApi.updateUser(userData.username, data);
    dispatch(saveUserData(updatedUser));
  }

  if (isLoading) return (<b>loading</b>)

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh" }}>
        <NavBar loggedIn={userToken} logout={logout} />
        <CustomizedSnackbars />
        <Routes
          getMovies={getMovies}
          searchResults={searchResults}
          register={register}
          login={login}
          loggedIn={userToken}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
          username={userData.username}
          updateUser={updateUser}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
