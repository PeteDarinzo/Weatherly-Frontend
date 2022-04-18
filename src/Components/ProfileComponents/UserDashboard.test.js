import { MemoryRouter } from "react-router-dom";
import renderWithRedux from "../../Helpers/renderWithRedux";
import UserDashboard from "./UserDashboard";

it("renders user dashboard without crashing", () => {
  renderWithRedux(
    <MemoryRouter>
      <UserDashboard updateUser={() => { }} />
    </MemoryRouter>
  );
});


it("matches the user dashboard snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <UserDashboard updateUser={() => { }} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
