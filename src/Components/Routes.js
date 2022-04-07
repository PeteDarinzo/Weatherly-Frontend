import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieComponents/MovieDetail";
import SignupForm from "./SignupForm";
import MovieList from "./MovieComponents/MovieList";
import HomeAnon from "./HomeAnon";
import LoginForm from "./LoginForm";
import Forecast from "./ForecastComponents/Forecast";
import UserDashboard from "./ProfileComponents/UserDashboard";

const Routes = ({ getMovies, searchResults, register, login, loggedIn, saveMovie, username, updateUser }) => {

  return (
    <Switch>

      <Route exact path="/">
        {loggedIn ? (<Home getMovies={getMovies} searchResults={searchResults} saveMovie={saveMovie} />)
          : <HomeAnon />}
      </Route>

      <Route exact path="/movies" >
        <MovieList username={username} />
      </Route>

      <Route exact path="/forecast" >
        <Forecast />
      </Route>

      <Route exact path="/movies/:movieId">
        <MovieDetail />
      </Route>

      <Route exact path="/profile">
        <UserDashboard updateUser={updateUser} />
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