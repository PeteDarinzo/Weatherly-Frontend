import React from 'react';
import LoginForm from "./LoginForm";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
import renderWithRedux from "../Helpers/renderWithRedux";

it("renders the login form without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <LoginForm login={() => { }} />
    </MemoryRouter>
  );
});

it("matches the login form snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <LoginForm login={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
