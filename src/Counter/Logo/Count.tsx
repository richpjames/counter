import React from "react";
import styled, { keyframes } from "styled-components/macro";

const rotate = keyframes`
  0% {transform: translateY(-40%);}
  100% {transform: translateY(0);}
`;

export const CountWrap = styled.h2`
  width: 145px;
  font-size: 300%;
  animation-name: ${rotate};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  margin-top: 10%;
  margin-bottom: 10%;
`;

interface IProps {
  count: number;
}
const Count = (props: IProps) => {
  const { count } = props;
  return <CountWrap key={count}>{count}</CountWrap>;
};

export default Count;
