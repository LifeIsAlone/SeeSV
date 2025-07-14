import { FilterButton } from '../styled/chart';

function LabelFilters({ labels, setLabels }) {
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

  return (
    <>
      {labels.map((label) => (
        <FilterButton
          labelColor={label.color}
          key={`filter-${label.name}`}
          onClick={() => toggleActivation(label.name)}
          className={label.activated ? 'active' : ''}
        >
          {label.name}
        </FilterButton>
      ))}
    </>
  );
}

export default LabelFilters;
