import MovieList from "./MovieList";
import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";


it("renders the movie list without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <MovieList />
    </MemoryRouter>
  );
});


it("matches the movie list snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <MovieList  />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
