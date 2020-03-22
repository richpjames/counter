import styled, { keyframes } from "styled-components/macro";

export const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: #ffffff;
  @media screen and (orientation: portrait) and (max-width: 600px) {
    margin-top: 2.5%;
    width: 90%;
  }
  @media screen and (min-width: 600px) and (orientation: landscape) {
    margin-top: 2.5%;
  }
`;
export const LettersWrap = styled.div`
  font-size: 75px;
  font-family: "Fredoka One", sans-serif;
  display: flex;
  line-height: 2.5em;
  justify-items: center;
`;
export const LogoLetter = styled.h2`
  margin-right: 13.5%;
  margin-left: -7%;
`;
const rotate = keyframes`
  0% {transform: translateY(-60%);}
  80% {transform: transateY(+30%);}
  100% {transform: translateY(0);}
`;
export const Count = styled.h2`
  font-size: 300%;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  @media only screen and (max-width: 600px) {
    margin-top: 15%;
    margin-bottom: 15%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const UpperBoundContainer = styled.div`
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
export const UpperBoundInput = styled.input`
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
