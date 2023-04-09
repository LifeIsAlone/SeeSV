import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import BarChartView from './BarChartView';
import LineChartView from './LineChartView';
import { ChartContext } from '../store/ChartProvider';

function makeData(data) {
  const header = data[0];
  const body = data.slice(1, data.length);
  const result = body.map((arr) => {
    const obj = {};
    arr.forEach((elem, index) => {
      if (index === 0) {
        obj['name'] = elem;
      } else {
        obj[header[index]] = elem;
      }
    });

    return obj;
  });
  return result;
}

function randomColorGenerator() {
  let color = '#';

  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 127 + 128).toString(16);
  }

  return color;
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
  }, [data]);

  const handleKeys = (index) => {
    const newChartData = [...chartData];
    newChartData[index] = {
      ...newChartData[index],
      activated: !newChartData[index].activated,
    };
    const newActivatedKeys = newChartData.filter(
      (chartKey) => chartKey.activated
    );
    setChartData(newChartData);
    setActiveKeys(newActivatedKeys);
  };

  const handleChartMode = (e) => {
    const chartType = e.target.innerText;
    setChartMode(chartType);
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
            onClick={() => handleKeys(index)}
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
