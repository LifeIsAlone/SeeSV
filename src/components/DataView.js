import React from 'react';
import styled from 'styled-components';

function DataView({ data }) {
  const header = data[0];
  const body = data.slice(1, data.length);
  return (
    <DataViewDiv>
      <StyledH1>Your Data</StyledH1>
      <DataTableWrap>
        <DataTable>
          <thead>
            <tr>
              {header.map((elem, index) => (
                <td key={'header' + index}>{elem}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, index) => {
              return (
                <tr key={'tbody tr' + index}>
                  {row.map((elem, idx) => (
                    <td key={'tr' + index + ' td' + idx}>{elem}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </DataTable>
      </DataTableWrap>
    </DataViewDiv>
  );
}

export default DataView;

const StyledH1 = styled.h1`
  font-size: 24px;
`;

const DataViewDiv = styled.div`
  width: 100%;
  margin: 36px 0;
`;

const DataTableWrap = styled.div`
  width: fit-content;
  max-height: 400px;
  overflow: scroll;
  margin: 0 auto;
`;

const DataTable = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
  text-align: center;

  & thead {
    background: linear-gradient(135deg, #6411ad 0%, #390099 100%);
    color: white;
  }

  & thead td {
    padding: 8px;
  }

  & td {
    min-width: 100px;
    padding: 4px 8px;
  }

  & tr {
    border-bottom: 1px solid #390099;
  }
`;
