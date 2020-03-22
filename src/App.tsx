import React, { useState } from "react";
import Counter from "./Counter/Counter";
import styled from "styled-components/macro";
import { CircleQuestion } from "grommet-icons";
import Dialog from "./Dialog";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;
const HelpIcon = styled.nav`
  position: absolute;
  top: 15px;
  left: 15px;
`;
function App() {
  const [showHelp, setShowHelp] = useState(false);
  const hideDialog = () => setShowHelp(() => false);
  return (
    <>
      <AppContainer>
        <HelpIcon onClick={() => setShowHelp(true)}>
          <CircleQuestion color="#FFFFFF" />
        </HelpIcon>
        <Counter />
      </AppContainer>
      {showHelp && (
        <Dialog
          hide={hideDialog}
          confirm={hideDialog}
          confirmText="OK"
          title="Info"
          text="This app was created for demo purposes by Rich James. It is not endorsed or produced by ao.com"
        />
      )}
    </>
  );
}

export default App;
