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

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  /** Load user token from local storage if available */

  useEffect(() => {
    if (localStorage.getItem("weatherlyToken")) {
      const token = JSON.parse(localStorage.getItem("weatherlyToken"));
      WeatherlyApi.token = token; // set token for future requests
      setUserToken(token);
    }
  }, []);

  /** Load a user's data (username and profile settings) */

  useEffect(() => {

    async function loadUserData() {
      const decoded = jwt_decode(userToken);
      const username = decoded.username;
      const userData = await WeatherlyApi.getUserData(username);
      setUserData(userData);
      dispatch(saveUserData(userData));
    }

    if (userToken) loadUserData();

  }, [userToken]);

  /** Load a user's watchlist and get forecast */

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

      loadTitles(username);
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [userData]);


  /** Register a new user */

  async function register(userData) {
    try {
      const token = await WeatherlyApi.register(userData);
      localStorage.setItem("weatherlyToken", JSON.stringify(token));
      setUserToken(token);
      history.push("/");
      dispatch(setSnackbar(true, "success", "Welcome to Weatherly! Head to the profile page to setup your weather preferences."));
    } catch (err) {
      if (err[0].includes("Duplicate")) {
        dispatch(setSnackbar(true, "error", "Username Taken."));
      } else {
        dispatch(setSnackbar(true, "error", "Incorrect postal code or country."));
      }
    }
  }

  /** Login an existing user */
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
      dispatch(setSnackbar(true, "success", "Welcome back!"));
    } catch (e) {
      dispatch(setSnackbar(true, "error", "Incorrect Username or Password"));
    }
  }

  /** Logout a user */
  function logout() {
    localStorage.removeItem("weatherlyToken");
    setUserToken("");
    dispatch(setSnackbar(true, "success", "Logged Out!"));
  }

  /** Search OMDB for movies */

  async function getMovies(title) {
    const res = await WeatherlyApi.searchMoviesByTitle(title);
    setSearchResults(res.Search);
  }

  /** Save a movie, flash an alert for success, or warning if already saved */

  async function saveMovie(movie) {
    try {
      await dispatch(sendMovieToAPI(movie, userData.username));
      dispatch(setSnackbar(true, "success", "Saved!"));
    } catch (e) {
      dispatch(setSnackbar(true, "warning", "Already Saved!"));
    }
  }

  /** Remove a movie from user's watchlist */

  function removeMovie(movieId) {
    dispatch(deleteFromWatchList(userData.username, movieId));
    dispatch(setSnackbar(true, "success", "Deleted!"));
  }

  /** Update a user's profile or weather preferences */
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
          updateUser={updateUser}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
