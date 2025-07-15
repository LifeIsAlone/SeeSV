import styled from 'styled-components';

function CustomTooltip({ active, payload, label }) {
  const isVisible = active && payload && payload.length;
  return (
    <TooltipContainer>
      <Item>{label}</Item>
      {isVisible &&
        payload.map((data) => (
          <LabelWrapper key={data.dataKey}>
            <Label color={data.color}>{data.dataKey}</Label>
            <p>{data.value}</p>
          </LabelWrapper>
        ))}
    </TooltipContainer>
  );
}

export default CustomTooltip;

const TooltipContainer = styled.div`
  background: white;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
`;

const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 1rem;

  p {
    margin: 0.3rem;
  }
`;

const Label = styled.p`
  background: ${(props) => (props.color ? props.color : 'black')};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
`;

const Item = styled.p`
  font-weight: bold;
`;
