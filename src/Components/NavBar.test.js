import React from 'react';
import NavBar from "./NavBar";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
import renderWithRedux from "../Helpers/renderWithRedux";

it("renders a navbar without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <NavBar loggedIn="test-token" logout={() => { }} />
    </MemoryRouter>
  )
});

it("matches the navbar snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <NavBar loggedIn="test-token" logout={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches the navbar snapshot when logged out", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <NavBar loggedIn="" logout={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});