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
  { date: "2025-12-01", orders: 10 },
  { date: "2025-12-02", orders: 15 },
  { date: "2025-12-03", orders: 12 },
];

const OrdersLineChart = () => (
  <div className="">
    <h2 className="font-bold text-center text-2xl my-7 text-blue-800 dark:text-white">
      Orders Over Time
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default OrdersLineChart;
