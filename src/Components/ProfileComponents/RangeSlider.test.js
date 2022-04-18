import RangeSlider from "./RangeSlider";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("renders the range slider without crashing", () => {
  render(
    <MemoryRouter>
      <RangeSlider handleTempChange={() => { }} units="F" vals={[45, 80]} />
    </MemoryRouter>
  );
});


it("matches the range slider snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <RangeSlider handleTempChange={() => { }} units="F" vals={[45, 80]} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
