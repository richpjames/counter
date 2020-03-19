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

test("pressing the - button decrements the counter by 1", () => {
  const { getByText, getByTitle } = render(<Counter />);

  const counter = getByTitle("counter");
  const decerementButton = getByText("-");
  const incrementButton = getByText("+");

  //the counter needs to be incremented first as it shouldn't decrement below zero
  fireEvent.click(incrementButton);
  expect(counter).toHaveTextContent("1");
  fireEvent.click(decerementButton);
  expect(counter).toHaveTextContent("0");
});

test("the counter can't be incremented to more than 10", () => {
  const { getByText, getByTitle } = render(<Counter />);

  const counter = getByTitle("counter");
  const incrementButton = getByText("+");

  expect(counter).toHaveTextContent("0");
  for (let i = 0; i < 11; i++) {
    fireEvent.click(incrementButton);
  }
  expect(counter).toHaveTextContent("10");
});

test("the counter can't be decremented to less than 0", () => {
  const { getByText, getByTitle } = render(<Counter />);

  const counter = getByTitle("counter");
  const decerementButton = getByText("-");

  expect(counter).toHaveTextContent("0");
  fireEvent.click(decerementButton);
  expect(counter).toHaveTextContent("0");
});

test("renders a '+3' and '-3' button", () => {
  const { getByText } = render(<Counter />);

  const incrementBy3Button = getByText("+3");
  const decerementBy3Button = getByText("-3");
  expect(incrementBy3Button).toBeInTheDocument();
  expect(decerementBy3Button).toBeInTheDocument();
});

test("+3 should increment the count by 3", () => {
  const { getByText, getByTitle } = render(<Counter />);

  const counter = getByTitle("counter");
  const incrementBy3Button = getByText("+3");

  expect(counter).toHaveTextContent("0");
  fireEvent.click(incrementBy3Button);
  expect(counter).toHaveTextContent("3");
});

test("-3 should decrement the count by 3", () => {
  const { getByText, getByTitle } = render(<Counter />);

  const counter = getByTitle("counter");
  const decrementBy3Button = getByText("-3");
  const incrementBy3Button = getByText("+3");

  fireEvent.click(incrementBy3Button);
  expect(counter).toHaveTextContent("3");
  fireEvent.click(decrementBy3Button);
  expect(counter).toHaveTextContent("0");
});
