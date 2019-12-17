// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";
//renders without crashing
test("renders without crashing", () => {
  render(<Display />);
});
//renders unlocks
test("renders unlocked", () => {
  const { getByText } = render(<Display locked={false} />);

  getByText(/^unlocked$/i);
});
//renders locked
test("renders locked", () => {
  const { getByText } = render(<Display locked={true} />);

  getByText(/^locked$/i);
});
//renders open
test("renders open", () => {
  const { getByText } = render(<Display closed={false} />);

  getByText(/^open$/i);
});
//renders closed
test("renders closed", () => {
  const { getByText } = render(<Display closed={true} />);

  getByText(/^closed$/i);
});
