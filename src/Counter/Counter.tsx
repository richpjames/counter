import React from "react";
import Button from "./Button";

function Counter() {
  return (
    <section>
      <h2 title="counter">0</h2>
      <Button textToDisplay="+" label="increment" />
      <Button textToDisplay="-" label="decrement" />
    </section>
  );
}

export default Counter;
