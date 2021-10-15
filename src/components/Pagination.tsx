import styled from "styled-components";
import type { ResponseData } from "../types/ResponseData";

// styling
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

type Props = {
  handlePageChange: (isNext: boolean) => void;
  page: number;
  data: ResponseData | null;
};

const Pagination = ({ handlePageChange, page, data }: Props) => {
  return (
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
  );
};

export default Pagination;
