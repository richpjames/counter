import React from "react";
import styled from "styled-components/macro";

interface IProps {
  textToDisplay: string;
  label: string;
  onClick?: () => void;
}

const ButtonWrap = styled.button`
  border-radius: 8px;
  margin-left: 4px;
  margin-right: 4px;
  height: 75px;
  width: 75px;
  font-size: 30px;
  color: #6fa912;
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }
`;

const Button = (props: IProps) => {
  const { textToDisplay, label, onClick } = props;

  return (
    <ButtonWrap aria-label={label} onClick={onClick}>
      {textToDisplay}
    </ButtonWrap>
  );
};

export default Button;
