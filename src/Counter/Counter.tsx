import React, { useState } from "react";
import Button from "./Button";
import {
  CounterContainer,
  ButtonsContainer,
  Count,
  Title
} from "./Counter-styles";
import UpperBound from "./UpperBound";

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
      <Title>Counter</Title>
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
      <UpperBound upperBound={upperBound} setUpperBound={setUpperBound} />
    </CounterContainer>
  );
}

export default Counter;
