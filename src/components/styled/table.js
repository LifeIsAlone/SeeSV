import styled from 'styled-components';

export const DataTableWrap = styled.div`
  width: 100%;
  min-height: 8rem;
  max-width: 100%;
  max-height: 25rem;
  overflow: auto;
  font-size: 1rem;
  margin: 0 auto;
`;

export const DataTable = styled.table`
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  text-align: center;

  & thead {
    background: linear-gradient(135deg, #6411ad 0%, #390099 100%);
    color: white;
  }

  & thead td {
    padding: 0.5em;
  }

  & td {
    padding: 0.25em 2em;
  }

  & tr {
    border-bottom: 1px solid rgba(128, 128, 128, 0.25);
  }

  & tr.selectable {
    cursor: pointer;
  }

  & tr:hover {
    background: rgba(128, 128, 128, 0.1);
  }

  & tr.active {
    background: rgba(57, 0, 153, 0.1);
  }
`;
