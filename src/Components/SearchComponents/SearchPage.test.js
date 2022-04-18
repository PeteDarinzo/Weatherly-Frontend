import SearchPage from "./SearchPage";
import { render } from '@testing-library/react';
import { MemoryRouter} from "react-router-dom";

it("renders a search page without crashing", () => {
  render(
    <MemoryRouter>
      <SearchPage getMovies={() => { }} searchResults={[]} saveMovie={() => { }} />
    </MemoryRouter>
  );
});


it("matches the search page snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SearchPage getMovies={() => { }} searchResults={[]} saveMovie={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
