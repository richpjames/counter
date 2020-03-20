import styled from "styled-components/macro";

export const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: #ffffff;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (orientation: portrait) {
    margin-top: 8.5%;
  }
  @media screen and (orientation: landscape) {
    margin-top: 1%;
  }
`;
export const Title = styled.h1``;

export const Count = styled.h2`
  font-family: "Fredoka One", sans-serif;
  font-weight: 200;
  @media only screen and (max-width: 600px) {
    margin-top: 15%;
    margin-bottom: 15%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  margin-top: 20px;
  height: 100px;
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
  @media only screen and (max-width: 600px) {
    margin-top: 5%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 0;
  }
`;
