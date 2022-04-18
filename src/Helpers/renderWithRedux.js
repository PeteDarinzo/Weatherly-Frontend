import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk"


export default function renderWithRedux(component, { store = createStore(rootReducer, applyMiddleware(thunk)) } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>)
  }
}