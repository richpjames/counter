import React, { useState } from "react";
import Button from "./Button";
import {
  CounterContainer,
  ButtonsContainer,
  UpperBoundInput,
  UpperBoundContainer,
  Count
} from "./Counter-styles";

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
    <CounterContainer>
      <h1>Counter</h1>
      <Count title="counter">{count}</Count>
      <ButtonsContainer>
        <Button
          textToDisplay="-3"
          label="decrement by 3"
          onClick={() => decrementCount(3)}
        />
        <Button
          textToDisplay="-"
          label="decrement"
          onClick={() => decrementCount(1)}
        />
        <Button
          textToDisplay="+"
          label="increment"
          onClick={() => incrementCount(1)}
        />
        <Button
          textToDisplay="+3"
          label="increment by 3"
          onClick={() => incrementCount(3)}
        />
      </ButtonsContainer>
      <UpperBoundContainer>
        <label htmlFor="counter-limit">Counter Limit</label>
        <UpperBoundInput
          type="number"
          id="counter-limit"
          value={upperBound}
          onChange={({ target }) => setUpperBound(+target.value)}
        />
      </UpperBoundContainer>
    </CounterContainer>
  );
}

export default Counter;
