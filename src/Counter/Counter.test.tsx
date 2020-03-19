import { render } from "@testing-library/react";
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
  const minusButton = getByText("-");
});
