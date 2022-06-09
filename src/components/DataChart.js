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

function makeData(data) {
  const header = data[0];
  const body = data.slice(1, data.length);
  const result = body.map((arr) => {
    const obj = {};
    arr.forEach((elem, index) => {
      if (index === 0) {
        obj['name'] = elem;
      } else obj[header[index]] = elem;
    });

    return obj;
  });

  return result;
}

function DataChart({ data }) {
  const dataToChart = makeData(data);
  const keys = Object.keys(dataToChart[0]);
  const chartKeys = keys.slice(1, keys.length);
  return (
    <>
      <h1>Data Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={dataToChart}
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
          {chartKeys.map((key, index) => {
            const colorCode =
              '#' + Math.round(Math.random() * 0xeeeeee).toString(16);
            return <Bar dataKey={key} fill={colorCode} />;
          })}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default DataChart;
