import React from "react";
import styled from "styled-components/macro";

import Button from "../Button";

const ButtonsWrap = styled.section`
  display: flex;
  height: 100px;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 20%;
  }
`;

declare type setStateWithCount = (amountChangeBy: number) => void;

interface IProps {
  decrementCount: setStateWithCount;
  incrementCount: setStateWithCount;
  countBottomBound: boolean;
  countUpperBound: boolean;
}

const ButtonsContainer: React.FC<IProps> = (props: IProps) => {
  const {
    incrementCount,
    decrementCount,
    countBottomBound,
    countUpperBound
  } = props;
  return (
    <ButtonsWrap>
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
    </ButtonsWrap>
  );
};
export default ButtonsContainer;
