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
    <div className="salesview-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#373f51" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#b8b8ff" }}
            axisLine={{ stroke: "#373f51" }}
          />
          <YAxis tick={{ fill: "#b8b8ff" }} axisLine={{ stroke: "#373f51" }} />
          <Tooltip
            contentStyle={{
              background: "#262a32",
              border: "none",
              color: "#ffe066",
            }}
            labelStyle={{ color: "#ffe066" }}
            itemStyle={{ color: "#ffe066" }}
          />
          <Legend wrapperStyle={{ color: "#ffe066" }} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#7c3aed"
            strokeWidth={3}
            activeDot={{
              r: 8,
              fill: "#ffe066",
              stroke: "#7c3aed",
              strokeWidth: 3,
            }}
            dot={{ stroke: "#7c3aed", strokeWidth: 2, fill: "#23272b" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesView;
