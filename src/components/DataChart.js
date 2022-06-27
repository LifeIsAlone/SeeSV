import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BarChartView from './BarChartView';
import LineChartView from './LineChartView';

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
  const [chartMode, setChartMode] = useState('bar');
  const [activeKeys, setActiveKeys] = useState([]);
  const dataToChart = makeData(data);
  const keys = Object.keys(dataToChart[0]);
  const chartKeys = keys.slice(1, keys.length);

  useEffect(() => {
    setActiveKeys([]);
  }, [data]);

  const colorSet = [
    '#4cc9f0',
    '#ffb703',
    '#06d6a0',
    '#560bad',
    '#d62828',
    '#f15bb5',
    '#4361ee',
    '#99d98c',
    '#5e548e',
    '#403d39',
  ];

  const isActive = (index) => {
    return activeKeys.includes(chartKeys[index]);
  };

  const handleKeys = (index) => {
    if (isActive(index)) {
      const newKeys = activeKeys.filter((item) => item !== chartKeys[index]);
      setActiveKeys(newKeys);
    } else {
      setActiveKeys([...activeKeys, chartKeys[index]]);
    }
  };

  return (
    <DataChartDiv>
      <StyledH1>Data Chart</StyledH1>
      <div className="buttons">
        <SelectButton
          onClick={() => {
            setChartMode('bar');
          }}
          className={chartMode === 'bar' ? 'active' : ''}
        >
          Bar
        </SelectButton>
        <SelectButton
          onClick={() => {
            setChartMode('line');
          }}
          className={chartMode === 'line' ? 'active' : ''}
        >
          Line
        </SelectButton>

        {chartKeys.map((chartkey, index) => (
          <SelectButton
            key={'key' + index}
            onClick={() => handleKeys(index)}
            className={isActive(index) ? 'active' : ''}
          >
            {chartkey}
          </SelectButton>
        ))}
      </div>
      <DataChartWrap>
        {chartMode === 'bar' && (
          <BarChartView
            keys={activeKeys}
            data={dataToChart}
            colorSet={colorSet}
          />
        )}
        {chartMode === 'line' && (
          <LineChartView
            keys={activeKeys}
            data={dataToChart}
            colorSet={colorSet}
          />
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
