import { createContext, useState } from 'react';

export const ChartContext = createContext({
  labels: [],
  body: [],
  setLabels: () => {},
  setBody: () => {},
});

const ChartProvider = ({ children }) => {
  const [labels, setLabels] = useState([]);
  const [body, setBody] = useState([]);

  const chartContext = {
    labels,
    body,
    setLabels,
    setBody,
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
