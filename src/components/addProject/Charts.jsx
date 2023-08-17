/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = ({ data }) => {
  return (
    <>
      <LineChart
        width={700}
        height={700}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="KP" />
        <YAxis dataKey="X" type="number" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="X"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

export default Charts;
