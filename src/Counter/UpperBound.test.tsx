import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import UpperBound from "./UpperBound";

test("renders the number passed to it", () => {
  const { getByLabelText } = render(
    <UpperBound upperBound={243} setUpperBound={() => {}} />
  );
  const upperBoundInput = getByLabelText(/Counter Limit:/);
  expect(upperBoundInput).toHaveValue(243);
});

test("the onChange function returns the number passed into it", () => {
  const mockFunc = jest.fn();

  const { getByLabelText } = render(
    <UpperBound upperBound={0} setUpperBound={mockFunc} />
  );
  const counterLimit = getByLabelText(/Counter Limit:/);

  userEvent.type(counterLimit, "1");
  expect(mockFunc).toHaveBeenCalledWith(1);
});
