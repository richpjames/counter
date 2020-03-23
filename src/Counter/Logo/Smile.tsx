import React from "react";
import styled from "styled-components/macro";

import { smileDropDown } from "../../animation";

const smileSize = 175;
const blankerSize = smileSize * 0.625;

const SmileWrap = styled.div`
  animation: ${smileDropDown} 0.25s ease-in-out 1;
`;

const CornerCapRow = styled.div`
  display: flex;
  width: 100%;
`;
const CornerCapContainer = styled.div`
  display: flex;
  height: 8px;
  position: inline-block;
  width: 18.9%;
  :first-child {
    margin-right: auto;
  }
  :last-child {
    margin-left: auto;
  }
`;

const CornerCap = styled.div`
  height: 8px;
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
  background-color: #ffffff;
  width: 100%;
`;

const SmileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmileWhite = styled.div`
  height: ${smileSize}px;
  width: ${smileSize * 2}px;
  border-bottom-left-radius: ${smileSize * 2}px;
  border-bottom-right-radius: ${smileSize * 2}px;
  background-color: #ffffff;
  display: inline-block;
`;

const SmileBlanker = styled.div`
  height: ${blankerSize}px;
  width: ${blankerSize * 2}px;
  border-bottom-left-radius: ${blankerSize * 2}px;
  border-bottom-right-radius: ${blankerSize * 2}px;
  background: #7fba23;
  position: absolute;
`;

const Smile = () => {
  return (
    <SmileWrap>
      <CornerCapRow>
        <CornerCapContainer>
          <CornerCap />
        </CornerCapContainer>
        <CornerCapContainer>
          <CornerCap />
        </CornerCapContainer>
      </CornerCapRow>
      <SmileContainer>
        <SmileBlanker />
        <SmileWhite />
      </SmileContainer>
    </SmileWrap>
  );
};

export default Smile;
