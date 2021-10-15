import styled from "styled-components";

// type import
import type { ResponseData } from "../types/ResponseData";

const TableContainer = styled.table`
  width: 100%;
  border: 1px solid hsl(240, 20%, 75%);
  border-radius: 8px;
`;

const TableHeadContainer = styled.thead`
  text-align: left;
  background-color: hsl(240, 20%, 98%);
`;

const TableHead = styled.th`
  padding-block: 1em;
  padding-left: 1em;
  font-weight: 700;
  font-size: 0.875em;
  letter-spacing: 1px;
  color: hsl(237.5, 11%, 44%);
  border-bottom: 1px solid hsl(240, 20%, 75%);
`;

const TableData = styled.td`
  padding: 1em;
  border-bottom: 1px solid hsl(240, 20%, 90%);
`;

type Props = {
  data: ResponseData | null;
};

const Table = ({ data }: Props) => {
  const columns = ["Name", "Height", "Mass", "Hair Color", "Skin Color"];

  return (
    <TableContainer>
      <TableHeadContainer>
        <tr>
          {columns.map((col, index) => {
            return <TableHead key={index}>{col.toUpperCase()}</TableHead>;
          })}
        </tr>
      </TableHeadContainer>
      <tbody>
        {data &&
          data.results.map((row, index) => {
            return (
              <tr key={index}>
                <TableData>{row.name}</TableData>
                <TableData>{row.height}</TableData>
                <TableData>{row.mass}</TableData>
                <TableData>{row.hair_color}</TableData>
                <TableData>{row.skin_color}</TableData>
              </tr>
            );
          })}
      </tbody>
    </TableContainer>
  );
};

export default Table;
