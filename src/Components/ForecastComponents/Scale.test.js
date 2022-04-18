import Scale from "./Scale";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";

it("renders scale without crashing", () => {
  render(
    <MemoryRouter>
      <Scale compatibility={2} />
    </MemoryRouter>
  );
});


it("matches scale snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <Scale compatibility={2} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
