import Forecast from "./Forecast";
import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";

it("renders forecast without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <Forecast />
    </MemoryRouter>
  );
});


it("matches the forecast snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <Forecast />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
