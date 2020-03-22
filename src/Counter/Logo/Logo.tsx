import React from "react";
import styled from "styled-components/macro";

import Count from "./Count";
import Smile from "./Smile";

const CharactersWrap = styled.div`
  font-size: 75px;
  font-family: "Fredoka One", sans-serif;
  display: flex;
  line-height: 2em;
  justify-items: center;
`;
const LogoLetter = styled.h2`
  margin-right: 13.5%;
  margin-left: -7%;
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
