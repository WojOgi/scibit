import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { nrCountriesWithAtLeastOnePublication } from "../../sourceData/sourceData.ts";

export default function MyBarChart() {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <>
        <h3
          style={{
            maxWidth: "350px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Number of countries with at least one publication in a given year
        </h3>
        <BarChart
          width={400}
          height={300}
          data={nrCountriesWithAtLeastOnePublication}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="countriesCount"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </>
    </ResponsiveContainer>
  );
}
