import SearchList from "./SearchList";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("renders a search list without crashing", () => {
  render(
    <MemoryRouter>
      <SearchList movies={[]} saveMovie={() => { }} />
    </MemoryRouter>
  );
});


it("matches the search list snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SearchList movies={[]} saveMovie={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
