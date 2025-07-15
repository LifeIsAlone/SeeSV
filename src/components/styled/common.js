import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.25rem 0.5rem;
  margin: 1rem 0.5rem 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  background: #dddddd;
  border: none;
  color: black;

  &:hover {
    background: #cccccc;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 0.5rem 1rem;
  background: #390099;
  color: white;

  &:hover {
    background: #290089;
  }
`;
