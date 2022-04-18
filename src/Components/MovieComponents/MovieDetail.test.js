import MovieDetail from "./MovieDetail";
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http://localhost:3001/movies/id", (req, res, ctx) => {
    return res(
      ctx.json({
        Title: "test",
        Year: "1999",
        Genre: "action",
        imdbRating: "10",
        Runtime: "60",
        Plot: "test plot"
      })
    )
  }
  ))


it("renders movie detail without crashing", () => {
  renderWithRedux(
    <MemoryRouter initialEntries={["/movies/id/1"]}>
      <MovieDetail removeMovie={() => { }} />
    </MemoryRouter>
  );
});


it("matches the movie detail snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <MovieDetail removeMovie={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
