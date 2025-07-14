import { useState, useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';

import {
  BarChartView,
  LineChartView,
  ChartModeSelect,
  LabelFilters,
  ChartWrapper,
} from './chart';
import { ChartContext } from '../store/ChartProvider';
import { randomColorGenerator } from '../lib/utils';

function DataChart() {
  const chartCtx = useContext(ChartContext);
  const data = chartCtx.body || null;

  const [chartMode, setChartMode] = useState('bar');
  const [dataToChart, setDataToChart] = useState([]);
  const [filters, setFilters] = useState([]);

  const activeKeys = useMemo(() => {
    return filters.filter((label) => label.activated);
  }, [filters]);
  const XAxisItem = useMemo(() => chartCtx.labels[0], [chartCtx.labels]);

  useEffect(() => {
    // 새로운 데이터 파일이 입력될 때 초기화 하는 작업
    if (data?.length) {
      const [, ...restKeys] = chartCtx.labels;

      // 라벨 필터링을 위한 적절한 형태로 변환
      const labelFilters = restKeys.map((chartKey) => ({
        name: chartKey,
        activated: false, // 활성화 여부
        color: randomColorGenerator(), // 라벨 컬러
      }));

      setFilters(labelFilters);
      setDataToChart(data);
      setChartMode('bar');
    }
  }, [data, chartCtx]);

  if (!data?.length) {
    return null;
  }

  return (
    <DataChartDiv>
      <StyledH1>Data Chart</StyledH1>

      <div className="buttons">
        <ChartModeSelect mode={chartMode} setMode={setChartMode} />
        <LabelFilters labels={filters} setLabels={setFilters} />
      </div>

      <ChartWrapper>
        {chartMode === 'bar' && (
          <BarChartView
            keys={activeKeys}
            data={dataToChart}
            XAxisItem={XAxisItem}
          />
        )}
        {chartMode === 'line' && (
          <LineChartView
            keys={activeKeys}
            data={dataToChart}
            XAxisItem={XAxisItem}
          />
        )}
      </ChartWrapper>
    </DataChartDiv>
  );
}

export default DataChart;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
`;

const DataChartDiv = styled.div`
  margin: 2em 0;
`;
