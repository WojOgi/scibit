import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../utils/utils";

type yearObjType = {
  year: number;
  [key: string]: number;
};

type MyLineChartProps = {
  dataToPlot: {
    countryName: string;
    publicationsNumbers: {
      year: number;
      publications: number;
    }[];
  }[];
};

export default function MyLineChart({ dataToPlot }: MyLineChartProps) {
  console.log("dataToPlot", dataToPlot);

  const transformedData = dataToPlot[0].publicationsNumbers.map(
    (pub, index) => {
      const yearObj: yearObjType = { year: pub.year };

      dataToPlot.forEach((country) => {
        yearObj[country.countryName] =
          country.publicationsNumbers[index].publications;
      });

      return yearObj;
    },
  );

  console.log("transformedData", transformedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={transformedData}
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
        <Legend />
        {dataToPlot.map((countryData, index) => (
          <Line
            key={countryData.countryName}
            type="monotone"
            dataKey={countryData.countryName}
            stroke={colors[index % colors.length]} // Cycle through colors
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
