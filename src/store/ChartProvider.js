import { createContext, useState } from 'react';

export const ChartContext = createContext({
  labels: null,
  body: null,
  setLabels: () => {},
  setBody: () => {},
  init: () => {},
});

const ChartProvider = ({ children }) => {
  const [labels, setLabels] = useState(null);
  const [body, setBody] = useState(null);

  const chartContext = {
    labels,
    body,
    setLabels,
    setBody,
    init: () => {
      setLabels(null);
      setBody(null);
    },
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
