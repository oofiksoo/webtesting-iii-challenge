// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";
import "@testing-library/jest-dom/extend-expect";

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
//locked/closed red-led
test("red-led toHaveclass locked or closed", () => {
  const { getByText } = render(<Display closed locked />);

  const lock = getByText(/locked/i);

  const close = getByText(/closed/i);

  expect(lock).toHaveClass("red-led");

  expect(close).toHaveClass("red-led");
});
