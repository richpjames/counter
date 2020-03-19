import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";
import "@testing-library/jest-dom/extend-expect";

const setup = () => {
  const utils = render(<Counter />);
  const incrementButton = utils.getByText("+");
  const decerementButton = utils.getByText("-");
  const incrementBy3Button = utils.getByText("+3");
  const decrementBy3Button = utils.getByText("-3");
  const counter = utils.getByTitle("counter");

  return {
    counter,
    incrementButton,
    decerementButton,
    incrementBy3Button,
    decrementBy3Button,
    ...utils
  };
};

test("renders the number 0", () => {
  const { getByText } = setup();
  getByText("0");
});

test("renders a '+' and '-' button", () => {
  const { getByText, incrementButton, decerementButton } = setup();

  expect(incrementButton).toBeInTheDocument();
  expect(decerementButton).toBeInTheDocument();
});

test("pressing the + button increments the counter by 1", () => {
  const { incrementButton, counter } = setup();

  expect(counter).toHaveTextContent("0");
  fireEvent.click(incrementButton);
  expect(counter).toHaveTextContent("1");
});

test("pressing the - button decrements the counter by 1", () => {
  const { incrementButton, decerementButton, counter } = setup();

  //the counter needs to be incremented first as it shouldn't decrement below zero
  fireEvent.click(incrementButton);
  expect(counter).toHaveTextContent("1");
  fireEvent.click(decerementButton);
  expect(counter).toHaveTextContent("0");
});

test("the counter can't be incremented to more than 10", () => {
  const { counter, incrementButton } = setup();

  expect(counter).toHaveTextContent("0");
  for (var i = 0; i < 11; i++) {
    fireEvent.click(incrementButton);
  }
  expect(counter).toHaveTextContent("10");
});

test("the counter can't be decremented to less than 0", () => {
  const { counter, decerementButton } = setup();

  expect(counter).toHaveTextContent("0");
  fireEvent.click(decerementButton);
  expect(counter).toHaveTextContent("0");
});

test("renders a '+3' and '-3' button", () => {
  const { incrementBy3Button, decrementBy3Button } = setup();

  expect(incrementBy3Button).toBeInTheDocument();
  expect(decrementBy3Button).toBeInTheDocument();
});

test("+3 should increment the count by 3", () => {
  const { counter, incrementBy3Button } = setup();

  expect(counter).toHaveTextContent("0");
  fireEvent.click(incrementBy3Button);
  expect(counter).toHaveTextContent("3");
});

test("-3 should decrement the count by 3", () => {
  const { counter, incrementBy3Button, decrementBy3Button } = setup();

  fireEvent.click(incrementBy3Button);
  expect(counter).toHaveTextContent("3");
  fireEvent.click(decrementBy3Button);
  expect(counter).toHaveTextContent("0");
});

test("When pressing the +3 button if the action is going to make the number go above 10, it should display 10 ", () => {
  const { counter, incrementBy3Button } = setup();

  expect(counter).toHaveTextContent("0");
  for (var i = 0; i < 4; i++) {
    fireEvent.click(incrementBy3Button);
  }
  expect(counter).toHaveTextContent("10");
});

test("When pressing the -3 button if the action is going to make the number go below 0, it should display 0", () => {
  const { counter, decrementBy3Button, incrementButton } = setup();

  fireEvent.click(incrementButton);
  fireEvent.click(decrementBy3Button);
  expect(counter).toHaveTextContent("0");
});

// test("the upper bound is configurable by the user", () => {
//   const { getByText, getByTitle, getByLabelText } = setup();

//   const counter = getByTitle("counter");
//   const counterLimit = getByLabelText("counter limit");
//   const incrementBy3Button = getByText("+3");

//   fireEvent.click(decrementBy3Button);
//   expect(counter).toHaveTextContent("0");
// });
