import { useContext } from 'react';
import { FilterButton } from '../styled/chart';
import { ChartContext } from '../../store/ChartProvider';

function LabelFilters({ labels, setLabels }) {
  const { body } = useContext(ChartContext);
  const toggleActivation = (labelName) => {
    const updatedFilters = labels.map((label) =>
      label.name === labelName
        ? {
            ...label,
            activated: !label.activated,
          }
        : label
    );

    setLabels(updatedFilters);
  };

  const isChartable = (label) => {
    return !body.find((data) => isNaN(data[label]));
  };

  return (
    <>
      {labels.map((label) => (
        <FilterButton
          labelColor={label.color}
          key={`filter-${label.name}`}
          onClick={() => toggleActivation(label.name)}
          className={label.activated ? 'active' : ''}
          disabled={!isChartable(label.name)}
        >
          {label.name}
        </FilterButton>
      ))}
    </>
  );
}

export default LabelFilters;
