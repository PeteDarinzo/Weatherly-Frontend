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
import SearchPage from "./SearchComponents/SearchPage";

const Routes = ({ getMovies, searchResults, register, login, loggedIn, saveMovie, username, updateUser }) => {

  return (
    <Switch>

      <Route exact path="/">
        {loggedIn ? (<Home />)
          : <HomeAnon />}
      </Route>

      <Route exact path="/search">
        {loggedIn
          ? <SearchPage getMovies={getMovies} searchResults={searchResults} saveMovie={saveMovie} />
          : <Redirect to="/login" />}
      </Route>

      <Route exact path="/movies">
        {loggedIn
          ? <MovieList username={username} />
          : <Redirect to="/login" />}
      </Route>

      <Route exact path="/forecast" >
        {loggedIn
          ? <Forecast />
          : <Redirect to="/login" />}
      </Route>

      <Route exact path="/movies/:movieId">
        {loggedIn
          ? <MovieDetail />
          : <Redirect to="/login" />}
      </Route>

      <Route exact path="/profile">
        {loggedIn
          ? <UserDashboard updateUser={updateUser} />
          : <Redirect to="/login" />}
      </Route>

      <Route exact path="/signup">
        {!loggedIn
          ? <SignupForm register={register} />
          : <Redirect to="/home" />}
      </Route>

      <Route exact path="/login">
        {!loggedIn
          ? <LoginForm login={login} />
          : <Redirect to="/home" />}
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;