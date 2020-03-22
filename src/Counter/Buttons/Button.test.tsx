import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

test("renders the text passed to it", () => {
  const { getByLabelText } = render(
    <Button label="button" disabled={false}>
      test text
    </Button>
  );
  const button = getByLabelText("button");

  expect(button).toHaveTextContent("test text");
});

test("on click should be called when the button is clicked", () => {
  const mockFunc = jest.fn();

  const { getByLabelText } = render(
    <Button label="button" onClick={mockFunc} disabled={false}>
      Button Test
    </Button>
  );
  const button = getByLabelText("button");
  expect(mockFunc).not.toHaveBeenCalled();
  userEvent.click(button);
  expect(mockFunc).toHaveBeenCalled();
});
test("button is disabled when boolean is set to true", () => {
  const mockFunc = jest.fn();

  const { getByLabelText } = render(
    <Button label="button" onClick={mockFunc} disabled={true}>
      Button Test
    </Button>
  );
  const button = getByLabelText("button");

  expect(button).toBeDisabled();
});
