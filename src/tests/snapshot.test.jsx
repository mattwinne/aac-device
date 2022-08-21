import App from "../components/App";
import React from "react";
import { render, screen } from "@testing-library/react";

it("renders correctly", () => {
  const tree = render(<App />)
  expect(tree).toMatchSnapshot();
});
