import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import NavBar from "./NavBar";
import Routes from "./Routes";
import WeatherlyApi from './Api';
import jwt_decode from "jwt-decode";
import { saveUserData, sendMovieToAPI } from '../Actions/actions';
import { useDispatch } from "react-redux";

function App() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState({});
  const [searchResults, setSearchResults] = useState({});
  const [signupError, setSignupError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("weatherlyToken")) {
      const token = JSON.parse(localStorage.getItem("weatherlyToken"));
      WeatherlyApi.token = token; // set token for future reqeusts
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

  /** Search OMDB for movies */
  async function getMovies(title) {
    const res = await WeatherlyApi.searchMovies(title);
    setSearchResults(res);
  }


  /** Register a new user */

  async function register(userData) {
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
        username={userData.username}
      />
    </div>
  );
}

export default App;
