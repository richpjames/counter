import React from "react";
import styled from "styled-components/macro";

const ButtonWrap = styled.button`
  border-radius: 8px;
  margin-left: 4px;
  margin-right: 4px;
  height: 75px;
  width: 75px;
  font-size: 30px;
  color: #6fa912;
  background-color: #fffff0;
  text-align: center;
  font-family: "Fredoka One", sans-serif;

  :focus {
    border: 2px solid grey;
  }
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }
`;
interface IProps {
  label: string;
  onClick?: () => void;
  children: string;
  disabled: boolean;
}

const Button = (props: IProps) => {
  const { label, onClick, children, disabled } = props;

  return (
    <ButtonWrap aria-label={label} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
