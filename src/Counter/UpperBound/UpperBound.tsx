import React from "react";
import styled from "styled-components/macro";

const UpperBoundContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  text-align: center;
  font-size: 25px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 200px;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    width: ;
  }
`;
const UpperBoundInput = styled.input`
  width: 60px;
  height: 25px;
  font-size: 20px;
  font-family: "Fredoka One", sans-serif;
  margin-left: 7.5px;
  border-radius: 8px;
  color: #6fa912;
  :focus {
    border: 2px solid grey;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 5%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 0;
  }
`;

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
