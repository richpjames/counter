import React from "react";
import styled from "styled-components/macro";
import Button from "./Button";

const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  opacity: 1;
  width: 60%;
  height: 40%;
  border-radius: 8px;
  opacity: 1;
  background-color: #ffffff;
`;
const Layer = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h3`
  margin-top: 5%;
  margin-bottom: 2.5%;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  width: 80%;
`;

const ButtonsBox = styled.div`
  margin-top: 25px;
  margin-right: 150px;
  margin-bottom: 25px;
  margin-left: 150px;
`;

interface Props {
  title: string;
  text?: string;
  confirm: () => void;
  confirmText: string;
}

function Dialog(props: Props) {
  const { title, text, confirm, confirmText } = props;
  return (
    <Layer>
      <DialogWrapper>
        <Heading>{title}</Heading>
        <Text>{text}</Text>
        <ButtonsBox>
          <Button label="Ok" onClick={() => confirm()} disabled={false}>
            {confirmText}
          </Button>
        </ButtonsBox>
      </DialogWrapper>
    </Layer>
  );
}

export default Dialog;
