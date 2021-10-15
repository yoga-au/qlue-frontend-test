import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styled from "styled-components";

// import type
import { ResponseData } from "../types/ResponseData";

const ChartContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 3em;
`;

type Props = {
  data: ResponseData | null;
};

const Chart = ({ data }: Props) => {
  const chartData = data !== null ? data.results : undefined;

  return (
    <>
      {data && (
        <ChartContainer>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tickFormatter={(params: string) => {
                  return params.split(" ")[0];
                }}
              />
              <YAxis
                domain={[
                  (min: number) => {
                    if (isFinite(min)) {
                      return 0;
                    } else {
                      return 0;
                    }
                  },
                  (max: number) => {
                    if (isFinite(max)) {
                      return 250;
                    } else {
                      return 1;
                    }
                  },
                ]}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="mass" fill="#82ca9d" />
              <Bar dataKey="height" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      )}
    </>
  );
};

export default Chart;
