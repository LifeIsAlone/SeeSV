import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function BarChartView({ data, keys, XAxisItem }) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisItem} />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key, index) => {
          return <Bar dataKey={key.name} fill={key.color} key={index} />;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartView;
