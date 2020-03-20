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
  const countBottomBound = count <= 0;
  const countUpperBound = count >= upperBound;
  return (
    <CounterContainer>
      <Title>Counter</Title>
      <Count title="counter">{count}</Count>
      <ButtonsContainer>
        <Button
          label="decrement by 3"
          onClick={() => decrementCount(3)}
          disabled={countBottomBound}
        >
          -3
        </Button>
        <Button
          label="decrement"
          onClick={() => decrementCount(1)}
          disabled={countBottomBound}
        >
          -
        </Button>
        <Button
          label="increment"
          onClick={() => incrementCount(1)}
          disabled={countUpperBound}
        >
          +
        </Button>
        <Button
          label="increment by 3"
          onClick={() => incrementCount(3)}
          disabled={countUpperBound}
        >
          +3
        </Button>
      </ButtonsContainer>
      <UpperBound upperBound={upperBound} setUpperBound={setUpperBound} />
    </CounterContainer>
  );
}

export default Counter;
