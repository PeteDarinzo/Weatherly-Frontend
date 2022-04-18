import MovieSearchForm from "./MovieSearchForm";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("renders a search form without crashing", () => {
  render(
    <MemoryRouter>
      <MovieSearchForm getMovies={() => { }} />
    </MemoryRouter>
  );
});


it("matches the search form snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <MovieSearchForm getMovies={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
