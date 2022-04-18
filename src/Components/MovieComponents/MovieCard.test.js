import MovieCard from "./MovieCard";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("renders movie card without crashing", () => {
  render(
    <MemoryRouter>
      <MovieCard id="1" title="test" img="testimg" />
    </MemoryRouter>
  );
});


it("matches the movie card snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <MovieCard id="1" title="test" img="testimg" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
