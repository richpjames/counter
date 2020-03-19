import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2 title="counter">{count}</h2>
      <Button
        textToDisplay="+"
        label="increment"
        onClick={() => count < 10 && setCount(prevCount => prevCount + 1)}
      />
      <Button
        textToDisplay="-"
        label="decrement"
        onClick={() => count > 0 && setCount(prevCount => prevCount - 1)}
      />
    </section>
  );
}

export default Counter;
