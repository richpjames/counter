import React, { useState } from "react";

import ButtonsContainer from "./ButtonsContainer";
import {
  CounterContainer,
  Count,
  LettersWrap,
  LogoLetter
} from "./Counter-styles";
import UpperBound from "./UpperBound";
import Smile from "./Smile";

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
      {/* <Title>Counter</Title> */}
      <LettersWrap>
        <LogoLetter>a</LogoLetter>
        <Count title="counter">{count}</Count>
      </LettersWrap>
      <Smile />
      <ButtonsContainer
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        countBottomBound={countBottomBound}
        countUpperBound={countUpperBound}
      />
      <UpperBound upperBound={upperBound} setUpperBound={setUpperBound} />
    </CounterContainer>
  );
}

export default Counter;
