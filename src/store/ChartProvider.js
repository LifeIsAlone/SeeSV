import { createContext, useState } from 'react';

export const ChartContext = createContext({
  labels: null,
  body: null,
  rawData: null,
  setLabels: () => {},
  setBody: () => {},
  setRawData: () => {},
  init: () => {},
});

const ChartProvider = ({ children }) => {
  const [labels, setLabels] = useState(null);
  const [body, setBody] = useState(null);
  const [rawData, setRawData] = useState(null);

  const chartContext = {
    labels,
    body,
    rawData,
    setLabels,
    setBody,
    setRawData,
    init: () => {
      setLabels(null);
      setBody(null);
      setRawData(null);
    },
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
