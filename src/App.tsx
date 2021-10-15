import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";

// type import
import type { AxiosResponse } from "axios";
import type { ResponseData } from "./types/ResponseData";

// component import
import Table from "./components/Table";
import Chart from "./components/Chart";

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
  // state definiton
  const [data, setData] = useState<ResponseData | null>(null);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    if (localStorage.getItem(`page${page}-qlueFeTestYoga`)) {
      const result = localStorage.getItem(`page${page}-qlueFeTestYoga`);
      setData(result && JSON.parse(result));
      return;
    }

    try {
      const response: AxiosResponse<ResponseData> = await axios.get(
        `people/?page=${page}`
      );
      const result = response.data;
      setData(result);

      if (!localStorage.getItem(`page${page}-qlueFeTestYoga`)) {
        localStorage.setItem(
          `page${page}-qlueFeTestYoga`,
          JSON.stringify({ page, ...result })
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePageChange = (isNext: boolean) => {
    if (isNext) {
      setPage((prev) => prev + 1);
      return;
    }

    setPage((prev) => prev - 1);
  };

  // this return null
  // const test = localStorage.getItem("page1");
  // console.log(test);

  // const dest = { foo: "1", bar: "2" };
  // localStorage.setItem("page1", JSON.stringify({ page: "1", ...dest }));

  // const obj = localStorage.getItem(`page${1}`);
  // console.log(obj && JSON.parse(obj));

  return (
    <>
      <Container>
        <Title>Qlue Test</Title>
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
