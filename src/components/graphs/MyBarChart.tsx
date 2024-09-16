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

type BarChartProps = {
  dataToPlot: { year: number; countriesCount: number }[];
};

export default function MyBarChart({ dataToPlot }: BarChartProps) {
  return (
    <ResponsiveContainer width="90%" height={300}>
      <>
        <h3>
          Number of countries with at least one publication in a given year
        </h3>
        <BarChart
          width={400}
          height={300}
          data={dataToPlot}
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
