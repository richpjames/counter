import React from "react";
import Counter from "./Counter/Counter";
import styled from "styled-components/macro";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Counter />
    </AppContainer>
  );
}

export default App;
