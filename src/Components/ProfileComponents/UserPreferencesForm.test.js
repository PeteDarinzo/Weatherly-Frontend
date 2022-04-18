import UserPreferencesForm from "./UserPreferencesForm";
import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";

it("renders user preferences form without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <UserPreferencesForm minTemp={40} maxTemp={60} units="F" thunderstorm={false} drizzle={false} rain={false} snow={true} overcast={true} updateUserPreferences={() => { }} />
    </MemoryRouter>
  );
});


it("matches the user preferences form snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <UserPreferencesForm minTemp={40} maxTemp={60} units="F" thunderstorm={false} drizzle={false} rain={false} snow={true} overcast={true} updateUserPreferences={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
