
import React from 'react';
import Home from "./Home";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"

it("renders home without crashing", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});

// it("matches the home snapshot", () => {
//   const { asFragment } = render(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   );
//   expect(asFragment()).toMatchSnapshot();
// });
