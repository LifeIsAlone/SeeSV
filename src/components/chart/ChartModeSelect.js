import { SelectButton } from '../styled/chart';

function ChartModeSelect({ mode, setMode }) {
  const handleChartMode = (e) => {
    setMode(e.target.name);
  };

  return (
    <div>
      <SelectButton
        name="bar"
        onClick={handleChartMode}
        className={mode === 'bar' ? 'active' : ''}
      >
        막대 차트
      </SelectButton>
      <SelectButton
        name="line"
        onClick={handleChartMode}
        className={mode === 'line' ? 'active' : ''}
      >
        선 차트
      </SelectButton>
    </div>
  );
}

export default ChartModeSelect;
