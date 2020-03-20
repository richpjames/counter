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
