import SearchCard from "./SearchCard";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("renders a search card without crashing", () => {
  render(
    <MemoryRouter>
      <SearchCard movie={{ Title: "test", Year: "1999", Poster: "image_url" }} saveMovie={() => { }} />
    </MemoryRouter>
  );
});


it("matches the search card snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SearchCard movie={{ Title: "test", Year: "1999", Poster: "image_url" }} saveMovie={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
