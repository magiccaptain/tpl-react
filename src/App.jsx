import "./App.less";
import { Button } from "antd";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Button type="primary">测试</Button>
    </Container>
  );
}

export default App;
