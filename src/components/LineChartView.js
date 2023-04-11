import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function LineChartView({ keys, data, XAxisItem }) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisItem} />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key, index) => {
          return (
            <Line
              type="monotone"
              dataKey={key.name}
              stroke={key.color}
              key={index}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartView;
