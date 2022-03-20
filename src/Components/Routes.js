import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import SignupForm from "./SignupForm";
import MovieList from "./MovieList";
import HomeAnon from "./HomeAnon";
import LoginForm from "./LoginForm";


const Routes = ({ getMovies, searchResults, register, login, loggedIn, saveMovie, username}) => {

  return (
    <Switch>

      <Route exact path="/">
        {loggedIn ? (<Home getMovies={getMovies} searchResults={searchResults} saveMovie={saveMovie} />)
          : <HomeAnon />}

      </Route>

      <Route exact path="/movies" >
        <MovieList username={username} />
      </Route>

      <Route exact path="/movies/:movieId">
        <MovieDetail />
      </Route>

      <Route exact path="/signup">
        <SignupForm register={register} />
      </Route>

      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;