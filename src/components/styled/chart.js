import styled from 'styled-components';
import { Button } from './common';

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
