import styled from "styled-components";

// component import
import Table from "./components/Table";

function App() {
  const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
  `;

  const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    margin-block: 1em;
  `;

  return (
    <>
      <Container>
        <Title>Qlue Test</Title>
        <Table />
      </Container>
    </>
  );
}

export default App;
