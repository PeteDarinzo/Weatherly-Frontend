import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";
import Routes from "./Routes";

const API_URL = "http://localhost:3001";


function App() {

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [userCredentials, setUserCredentials] = useState("");
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    if (localStorage.getItem("weatherlyToken")) {
      const token = JSON.parse(localStorage.getItem("weatherlyToken"));
      setUserToken(token);
    }
  }, []);


  /** Search OMDB for movies */
  async function getMovies(title) {
    const res = await axios.get(`${API_URL}/movies/title/${title}`);
    setSearchResults(res.data);
  }

  /** Register a new users */
  async function register(user) {
    const userObj = {
      username: user.username,
      password: user.password,
      zipCode: user.zipCode
    }
    // setIsLoading(true);
    const res = await axios.post(`${API_URL}/auth/register`, userObj);
    const token = res.data.token;
    localStorage.setItem("weatherlyToken", JSON.stringify(token));
    setUserToken(token);
    history.push("/");
  }

  async function login(user) {
    const userObj = {
      username: user.username,
      password: user.password,
    }
    const res = await axios.post(`${API_URL}/auth/token`, userObj);
    const token = res.data.token;
    localStorage.setItem("weatherlyToken", JSON.stringify(token));
    setUserToken(token);
    history.push("/");
  }

  function logout() {
    localStorage.removeItem("weatherlyToken");
    setUserToken("");
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
      />
    </div>
  );
}

export default App;
