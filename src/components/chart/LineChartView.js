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
import CustomTooltip from './CustomTooltip';

function LineChartView({ keys, data, XAxisItem }) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisItem} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
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
