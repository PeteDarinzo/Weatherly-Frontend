import React from "react";
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";
import renderWithRedux from "../Helpers/renderWithRedux";

afterEach(cleanup);


// function renderWithRedux(component, { initialState, store = createStore(rootReducer, initialState) } = {}
// ) {
//   return {
//     ...render(
//       <Provider store={store}>
//         {component}
//       </Provider>)
//   }
// }

test('renders App component with redux', () => {
  renderWithRedux(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});


it("matches the home snapshot", () => {
  const { asFragment } = renderWithRedux(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
