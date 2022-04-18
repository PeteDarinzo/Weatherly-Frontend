import React from 'react';
import SignupForm from "./SignupForm";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
import renderWithRedux from "../Helpers/renderWithRedux";

it("renders the signup form without crashing", () => {
  render(
    <MemoryRouter>
      <SignupForm register={() => { }} />
    </MemoryRouter>
  );
});

it("matches the signup form snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SignupForm register={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
