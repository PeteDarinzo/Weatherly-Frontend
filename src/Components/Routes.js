import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import SignupForm from "./SignupForm";
import MovieList from "./MovieList";


const Routes = ({ getMovies, addUser, searchResults }) => {

  return (
    <Switch>

      <Route exact path="/">
        <Home getMovies={getMovies} searchResults={searchResults} />
      </Route>

      <Route exact path="/movies" >
        <MovieList />
      </Route>

      <Route exact path="/movies/:movieId">
        <MovieDetail />
      </Route>

      <Route exact path="/signup">
        <SignupForm addUser={addUser} />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;