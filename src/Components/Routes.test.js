import React from 'react';
import Routes from "./Routes";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"


it("renders routes without crashing", () => {
  render(
    <MemoryRouter>
      <Routes getMovies={() => { }} searchResults={[]} register={() => { }} login={() => { }} loggedIn="" saveMovie={() => { }} removeMovie={() => { }} updateUser={() => { }} />
    </MemoryRouter>
  )
});

it("render matches the router snapshot when logged out", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Routes getMovies={() => { }} searchResults={[]} register={() => { }} login={() => { }} loggedIn="" saveMovie={() => { }} removeMovie={() => { }} updateUser={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("render matches the router snapshot when logged in", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Routes getMovies={() => { }} searchResults={[]} register={() => { }} login={() => { }} loggedIn="" saveMovie={() => { }} removeMovie={() => { }} updateUser={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});