import { useContext } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../store/ChartProvider';
import { DataTable, DataTableWrap } from './styled/table';

function DataTableView() {
  const chartCtx = useContext(ChartContext);
  const data = chartCtx.body || null;
  const labels = chartCtx.labels || null;

  if (!data?.length) {
    return null;
  }

  return (
    <DataViewDiv>
      <StyledH1>데이터 테이블</StyledH1>
      <DataTableWrap>
        <DataTable>
          <thead>
            <tr>
              {labels.map((label) => (
                <td key={label}>{label}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row[labels[0]]}>
                  {Object.values(row).map((elem, labelIndex) => (
                    <td key={`${row[labels[0]]}-${labels[labelIndex]}`}>
                      {elem}
                    </td>
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

export default DataTableView;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
`;

const DataViewDiv = styled.div`
  margin: 0;
`;
