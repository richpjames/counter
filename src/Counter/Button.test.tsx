import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

test("renders the text passed to it", () => {
  const { getByLabelText } = render(
    <Button textToDisplay="test text" label="button" />
  );
  const button = getByLabelText("button");

  expect(button).toHaveTextContent("test text");
});
