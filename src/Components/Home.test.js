
import React from 'react';
import Home from "./Home";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
import renderWithRedux from "../Helpers/renderWithRedux";

it("renders home without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});

// it("matches the home snapshot", () => {
//   const { asFragment } = renderWithRedux(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   );
//   expect(asFragment()).toMatchSnapshot();
// });
