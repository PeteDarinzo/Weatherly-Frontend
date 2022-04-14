import Forecast from "./Forecast";
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from "react-router-dom";

it("renders forecast without crashing", () => {
  render(
    <Forecast />
  );
});