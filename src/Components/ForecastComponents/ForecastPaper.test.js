import ForecastPaper from "./ForecastPaper";
import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";

it("renders forecast paper without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <ForecastPaper day="mon" date="1/1" description="cloudy" feelsLike="55" icon="" units="F" compatibility={1} />
    </MemoryRouter>
  );
});


it("matches the forecast paper snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <ForecastPaper day="mon" date="1/1" description="cloudy" feelsLike="55" icon="" units="F" compatibility={1} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
