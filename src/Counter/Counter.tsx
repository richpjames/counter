import React, { useState } from "react";
import styled from "styled-components/macro";

import ButtonsContainer from "./ButtonsContainer";
import Logo from "./Logo/Logo";
import UpperBound from "./UpperBound/UpperBound";

const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: #ffffff;
  @media screen and (orientation: portrait) and (max-width: 600px) {
    margin-top: 15%;
  }
  @media screen and (min-width: 600px) and (orientation: landscape) {
    margin-top: 1.5%;
  }
`;

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
    <CounterContainer title="counter">
      <Logo count={count} />
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
