import React from "react";
import styled from "styled-components/macro";

import { letterDropDown } from "../../animation";

export const CountWrap = styled.h2`
  width: 145px;
  font-size: 300%;
  animation: ${letterDropDown} 0.3s ease-out 1;
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
