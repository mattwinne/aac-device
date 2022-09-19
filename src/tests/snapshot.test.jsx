import { render, screen } from "@testing-library/react";
import App from "../components/layout/App";
import React from "react";

it("renders correctly", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
