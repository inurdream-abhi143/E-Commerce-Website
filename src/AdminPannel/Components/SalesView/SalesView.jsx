import React from "react";
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

const data = [
  { date: "Mon", sales: 120 },
  { date: "Tue", sales: 200 },
  { date: "Wed", sales: 150 },
  { date: "Thu", sales: 250 },
  { date: "Fri", sales: 300 },
  { date: "Sat", sales: 180 },
  { date: "Sun", sales: 100 },
];

const SalesView = (props) => {
  // const { totalSales } = props;
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesView;
