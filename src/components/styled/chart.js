import styled from 'styled-components';

const Button = styled.button`
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1em;
  font-size: 1rem;
`;

export const SelectButton = styled(Button)`
  background: white;
  border: 1px solid #390099;
  color: #390099;

  &:hover,
  &.active {
    background: #390099;
    color: white;
  }
`;

export const FilterButton = styled(Button)`
  background: white;
  border: 1px solid
    ${(props) => (props.labelColor ? props.labelColor : '#390099')};
  color: ${(props) => (props.labelColor ? props.labelColor : '#390099')};
  &:hover,
  &.active {
    background: ${(props) => (props.labelColor ? props.labelColor : '#390099')};
    color: white;
  }
`;
