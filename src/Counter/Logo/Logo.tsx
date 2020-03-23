import React from "react";
import styled from "styled-components/macro";

import Count from "./Count";
import Smile from "./Smile";
import { letterDropDown } from "../../animation";

const CharactersWrap = styled.div`
  font-size: 75px;
  font-family: "Fredoka One", sans-serif;
  display: flex;
  line-height: 2em;
  justify-content: center;
`;
const LogoLetter = styled.h2`
  margin-right: 13.5%;
  margin-left: -7%;
  animation: ${letterDropDown} 0.3s ease-in-out 1;
`;

interface IProps {
  count: number;
}
const Logo = (props: IProps) => {
  const { count } = props;
  return (
    <>
      <CharactersWrap>
        <LogoLetter>a</LogoLetter>
        <Count count={count} />
      </CharactersWrap>
      <Smile />
    </>
  );
};

export default Logo;
