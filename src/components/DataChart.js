import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import BarChartView from './BarChartView';
import LineChartView from './LineChartView';
import { ChartContext } from '../store/ChartProvider';

function makeData(data) {
  console.log(data);
  const [header, ...body] = data;
  const result = body.map((arr) =>
    Object.fromEntries(header.map((key, i) => [key, arr[i]]))
  );
  return result;
}

function randomColorGenerator() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 20 + 50);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function DataChart() {
  const chartCtx = useContext(ChartContext);
  const data = chartCtx.input;

  const [chartMode, setChartMode] = useState('Bar');
  const [activeKeys, setActiveKeys] = useState([]);
  const [dataToChart, setDataToChart] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const parsedData = makeData(data);
    const newChartData = Object.keys(parsedData[0])
      .slice(1)
      .map((chartKey) => ({
        name: chartKey,
        activated: false,
        color: randomColorGenerator(),
      }));
    setChartData(newChartData);
    setDataToChart(parsedData);
    setChartMode('Bar');
  }, [data]);

  const toggleActivation = (index) => {
    const updatedChartData = chartData.map((data, i) => {
      if (i !== index) return data;
      return {
        ...data,
        activated: !data.activated,
      };
    });

    const activatedKeys = updatedChartData.filter((data) => data.activated);

    setChartData(updatedChartData);
    setActiveKeys(activatedKeys);
  };

  const handleChartMode = (e) => {
    setChartMode(e.target.innerText);
  };

  return (
    <DataChartDiv>
      <StyledH1>Data Chart</StyledH1>
      <div className="buttons">
        <SelectButton
          onClick={handleChartMode}
          className={chartMode === 'Bar' ? 'active' : ''}
        >
          Bar
        </SelectButton>
        <SelectButton
          onClick={handleChartMode}
          className={chartMode === 'Line' ? 'active' : ''}
        >
          Line
        </SelectButton>

        {chartData.map((data, index) => (
          <SelectButton
            key={'key' + index}
            onClick={() => toggleActivation(index)}
            className={data.activated ? 'active' : ''}
          >
            {data.name}
          </SelectButton>
        ))}
      </div>
      <DataChartWrap>
        {chartMode === 'Bar' && (
          <BarChartView keys={activeKeys} data={dataToChart} />
        )}
        {chartMode === 'Line' && (
          <LineChartView keys={activeKeys} data={dataToChart} />
        )}
      </DataChartWrap>
    </DataChartDiv>
  );
}

export default DataChart;

const StyledH1 = styled.h1`
  font-size: 24px;
`;

const DataChartWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const DataChartDiv = styled.div`
  margin: 36px 0;
  min-height: 500px;
`;

const SelectButton = styled.button`
  background: white;
  border: 1px solid #390099;
  color: #390099;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover,
  &.active {
    background: #390099;
    color: white;
  }
`;
