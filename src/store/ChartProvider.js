import { createContext, useState } from 'react';

export const ChartContext = createContext({
  input: [],
  setInput: (data) => {},
});

const ChartProvider = ({ children }) => {
  const [input, setInput] = useState([]);

  const saveInput = (data) => {
    setInput(data);
  };

  const chartContext = {
    input,
    setInput: saveInput,
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
