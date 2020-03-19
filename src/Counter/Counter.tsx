import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [upperBound, setUpperBound] = useState(10);

  const incrementCount = (amountToIncrement: number) => {
    if (count + amountToIncrement <= upperBound) {
      setCount(prevCount => prevCount + amountToIncrement);
    } else if (count + amountToIncrement > upperBound) {
      setCount(() => upperBound);
    }
  };

  const decrementCount = (amountToDecrement: number) => {
    if (count - amountToDecrement >= 0) {
      setCount(prevCount => prevCount - amountToDecrement);
    } else if (count - amountToDecrement < 0) {
      setCount(() => 0);
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
        onClick={() => decrementCount(1)}
      />
      <Button
        textToDisplay="-3"
        label="decrement by 3"
        onClick={() => decrementCount(3)}
      />
      <label htmlFor="counter-limit">Counter Limit</label>
      <input
        type="number"
        id="counter-limit"
        onChange={({ target }) => setUpperBound(+target.value)}
      />
    </section>
  );
}

export default Counter;
