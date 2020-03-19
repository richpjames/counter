import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";
import "@testing-library/jest-dom/extend-expect";

test("renders the number 0", () => {
  const { getByText } = render(<Counter />);
  getByText("0");
});
test("renders a '+' and '-' button", () => {
  const { getByText } = render(<Counter />);

  const incrementButton = getByText("+");
  const decerementButton = getByText("-");
  expect(incrementButton).toBeInTheDocument();
  expect(decerementButton).toBeInTheDocument();
});

test("pressing the + button increments the counter by 1", () => {
  const { getByText, getByTitle } = render(<Counter />);

  const counter = getByTitle("counter");
  const incrementButton = getByText("+");

  expect(counter).toHaveTextContent("0");
  fireEvent.click(incrementButton);
  expect(counter).toHaveTextContent("1");
});
