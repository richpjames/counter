import React from "react";

interface IProps {
  textToDisplay: string;
  label: string;
}

const Button = (props: IProps) => {
  const { textToDisplay, label } = props;
  return <button aria-label={label}>{textToDisplay}</button>;
};

export default Button;
