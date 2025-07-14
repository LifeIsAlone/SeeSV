import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.25em 0.5em;
  margin-right: 0.5em;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1em;
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
