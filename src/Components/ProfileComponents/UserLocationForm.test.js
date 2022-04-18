import UserLocationForm from "./UserLocationForm";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("renders user location form without crashing", () => {
  render(
    <MemoryRouter>
      <UserLocationForm postalCode="12345" countryCode="US" updateUserLocation={() => { }} />
    </MemoryRouter>
  );
});


it("matches the user location form snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <UserLocationForm postalCode="12345" countryCode="US" updateUserLocation={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
