import { useState } from "react";
import styled from "styled-components";

// component import
import Table from "./components/Table";
import Chart from "./components/Chart";

// custom hooks import
import useFetch from "./hooks/useFetch";

// styling
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 1em 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content: flex-end;
  align-items: center;
`;

const PageNumber = styled.div`
  padding: 0.5em 1em;
`;

const ButtonReset = styled.button`
  all: unset;
`;

const Button = styled(ButtonReset)`
  padding: 0.5em 1em;
  border-radius: 8px;
  cursor: pointer;
  background: hsl(240, 20%, 65%);
  color: white;

  &:disabled {
    background: hsl(240, 20%, 85%);
    cursor: not-allowed;
  }
`;

function App() {
  const [page, setPage] = useState(1);

  const { data } = useFetch(page);

  const handlePageChange = (isNext: boolean) => {
    if (isNext) {
      setPage((prev) => prev + 1);
      return;
    }

    setPage((prev) => prev - 1);
  };

  return (
    <>
      <Container>
        <Title>Qlue Frontend Test</Title>
        <PaginationContainer>
          <div style={{ marginRight: "0.875em" }}>Page</div>
          <Button
            disabled={page === 1 ? true : false}
            onClick={() => handlePageChange(false)}
          >
            {"<"}
          </Button>
          <PageNumber>{page}</PageNumber>
          <Button
            onClick={() => handlePageChange(true)}
            disabled={data && !data.next ? true : false}
          >
            {">"}
          </Button>
        </PaginationContainer>
        <Table data={data} />
        <Chart data={data} />
        <PaginationContainer>
          <div style={{ marginRight: "0.875em" }}>Page</div>
          <Button
            disabled={page === 1 ? true : false}
            onClick={() => handlePageChange(false)}
          >
            {"<"}
          </Button>
          <PageNumber>{page}</PageNumber>
          <Button
            onClick={() => handlePageChange(true)}
            disabled={data && !data.next ? true : false}
          >
            {">"}
          </Button>
        </PaginationContainer>
      </Container>
    </>
  );
}

export default App;
