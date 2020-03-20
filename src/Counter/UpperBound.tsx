import React from "react";
import { UpperBoundContainer, UpperBoundInput } from "./Counter-styles";

interface IProps {
  upperBound: number;
  setUpperBound: React.Dispatch<React.SetStateAction<number>>;
}

const UpperBound: React.FC<IProps> = (props: IProps) => {
  const { upperBound, setUpperBound } = props;
  return (
    <UpperBoundContainer>
      <label htmlFor="counter-limit">Counter Limit:</label>
      <UpperBoundInput
        type="number"
        id="counter-limit"
        value={upperBound}
        onChange={({ target }) => setUpperBound(+target.value)}
      />
    </UpperBoundContainer>
  );
};

export default UpperBound;
