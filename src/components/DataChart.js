import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import BarChartView from './BarChartView';
import LineChartView from './LineChartView';
import { ChartContext } from '../store/ChartProvider';
import domtoimage from 'dom-to-image';
import { FiDownload } from 'react-icons/fi';

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
  const [chartKey, setchartKey] = useState([]);
  const [XAxisItem, setXAxisItem] = useState(null);

  useEffect(() => {
    const [item, ...restKeys] = Object.keys(data[0]);
    const newchartKey = restKeys.map((chartKey) => ({
      name: chartKey,
      activated: false,
      color: randomColorGenerator(),
    }));
    setchartKey(newchartKey);
    setDataToChart(data);
    setChartMode('Bar');
    setXAxisItem(item);
  }, [data]);

  const toggleActivation = (index) => {
    const updatedChartKey = chartKey.map((data, i) => {
      if (i !== index) return data;
      return {
        ...data,
        activated: !data.activated,
      };
    });

    const activatedKeys = updatedChartKey.filter((data) => data.activated);

    setchartKey(updatedChartKey);
    setActiveKeys(activatedKeys);
  };

  const handleChartMode = (e) => {
    setChartMode(e.target.innerText);
  };

  const saveChartImage = () => {
    domtoimage
      .toJpeg(document.querySelector('.recharts-wrapper'))
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'my-chart-image.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
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

        {chartKey.map((data, index) => (
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
          <BarChartView
            keys={activeKeys}
            data={dataToChart}
            XAxisItem={XAxisItem}
          />
        )}
        {chartMode === 'Line' && (
          <LineChartView
            keys={activeKeys}
            data={dataToChart}
            XAxisItem={XAxisItem}
          />
        )}
      </DataChartWrap>
      <SaveButtonDiv>
        <SaveButton onClick={saveChartImage}>
          <FiDownload color="white" /> 차트 저장
        </SaveButton>
      </SaveButtonDiv>
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

const SaveButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
`;

const SaveButton = styled.button`
  background: #390099;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;
