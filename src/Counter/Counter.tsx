import React from "react";
import Button from "./Button";

function Counter() {
  return (
    <section>
      0<Button textToDisplay="+" label="increment" />
      <Button textToDisplay="-" label="decrement" />
    </section>
  );
}

export default Counter;
