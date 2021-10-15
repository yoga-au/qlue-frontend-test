import { useState } from "react";
import styled from "styled-components";

// component import
import Table from "./components/Table";
import Chart from "./components/Chart";
import Pagination from "./components/Pagination";

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
        <Pagination
          handlePageChange={handlePageChange}
          page={page}
          data={data}
        />
        <Table data={data} />
        <Chart data={data} />
        <Pagination
          handlePageChange={handlePageChange}
          page={page}
          data={data}
        />
      </Container>
    </>
  );
}

export default App;
