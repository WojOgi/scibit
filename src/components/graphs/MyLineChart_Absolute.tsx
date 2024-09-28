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
import { colors } from "../../sourceData/consts.ts";
import { yearObjType } from "../../types/types.ts";
import { useCountriesDataContext } from "../../utils/utils.ts";

export default function MyLineChart_Absolute() {
  const context = useCountriesDataContext();
  const dataToPlot = context.dataPreparedForPlotting;

  const transformedDataAbsolute = dataToPlot[0].publicationsNumbers.map(
    (pub, index) => {
      const yearObj: yearObjType = { year: pub.year };

      dataToPlot.forEach((country) => {
        yearObj[country.countryName] =
          country.publicationsNumbers[index].publications;
      });

      return yearObj;
    },
  );

  return (
    <div className={"graph"}>
      <h3
        style={{
          maxWidth: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Number of scientific publications mentioning "Bitcoin"
      </h3>
      <ResponsiveContainer width="90%" height={300}>
        <>
          <LineChart
            width={400}
            height={300}
            data={transformedDataAbsolute}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              label={{
                value: "Number of Publications",
                angle: -90,
                position: "insideBottomLeft",
              }}
            />
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
        </>
      </ResponsiveContainer>
    </div>
  );
}
