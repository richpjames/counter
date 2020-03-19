import React from "react";

interface IProps {
  textToDisplay: string;
  label: string;
  onClick: () => void;
}

const Button = (props: IProps) => {
  const { textToDisplay, label, onClick } = props;
  return (
    <button aria-label={label} onClick={onClick}>
      {textToDisplay}
    </button>
  );
};

export default Button;
