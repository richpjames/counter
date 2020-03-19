import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = (amountToIncrement: number) => {
    if (count < 10) {
      setCount(prevCount => prevCount + amountToIncrement);
    }
  };

  return (
    <section>
      <h2 title="counter">{count}</h2>
      <Button
        textToDisplay="+3"
        label="increment by 3"
        onClick={() => incrementCount(3)}
      />
      <Button
        textToDisplay="+"
        label="increment"
        onClick={() => incrementCount(1)}
      />
      <Button
        textToDisplay="-"
        label="decrement"
        onClick={() => count > 0 && setCount(prevCount => prevCount - 1)}
      />
      <Button textToDisplay="-3" label="decrement by 3" />
    </section>
  );
}

export default Counter;
