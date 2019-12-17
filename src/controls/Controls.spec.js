// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls.js";

//renders without crashing
test("renders without crashing", () => {
  render(<Controls />);
});
//render buttons
test("render buttons closed/locked", () => {
  const { getByText } = render(<Controls />);

  getByText(/close gate/i);

  getByText(/lock gate/i);
});
//render open
test("render open", () => {
  const { getByText } = render(<Controls closed={true} />);

  getByText(/open gate/i);
});
//render unlocked
test("render unlocked", () => {
  const { getByText } = render(<Controls locked={true} />);

  getByText(/unlock gate/i);
});
//close disable
test("closed button disabled gate locked", () => {
  const toggleClosed = jest.fn();

  const { getByText } = render(
    <Controls toggleClosed={toggleClosed} closed={true} locked={true} />
  );

  const openToggle = getByText(/open gate/i);

  fireEvent.click(openToggle);

  expect(toggleClosed).not.toHaveBeenCalled();
});
//lock disable
test("locked button disabled - gate open", () => {
  const toggleLocked = jest.fn();

  const { getByText } = render(
    <Controls toggleLocked={toggleLocked} closed={false} locked={false} />
  );

  const lockToggle = getByText(/lock gate/i);

  fireEvent.click(lockToggle);

  expect(toggleLocked).not.toHaveBeenCalled();
});
