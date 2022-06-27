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

function LineChartView({ keys, data, colorSet }) {
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key, index) => {
          const colorCode = colorSet[index % 10];
          return (
            <Line
              type="monotone"
              dataKey={key}
              stroke={colorCode}
              key={index}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartView;
