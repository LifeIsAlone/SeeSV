import { SelectButton } from '../styled/chart';

function ChartModeSelect({ mode, setMode }) {
  const handleChartMode = (e) => {
    setMode(e.target.innerText);
  };

  return (
    <div>
      <SelectButton
        onClick={handleChartMode}
        className={mode === 'Bar' ? 'active' : ''}
      >
        Bar
      </SelectButton>
      <SelectButton
        onClick={handleChartMode}
        className={mode === 'Line' ? 'active' : ''}
      >
        Line
      </SelectButton>
    </div>
  );
}

export default ChartModeSelect;
