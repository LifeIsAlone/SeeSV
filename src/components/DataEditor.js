import { useContext, useState } from 'react';
import { ChartContext } from '../store/ChartProvider';

import { DataTable, DataTableWrap } from './styled/table';
import { IoIosRefresh } from 'react-icons/io';
import { Button, SubmitButton } from './styled/common';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

function DataEditor() {
  const chartCtx = useContext(ChartContext);
  const [selectedRow, setSelectedRow] = useState([]);
  const data = chartCtx.rawData || null;
  const labels = Object.keys(chartCtx.rawData[0]) || null;
  const navigate = useNavigate();

  if (!data?.length) {
    return null;
  }

  const onClickRow = (index) => {
    if (selectedRow.includes(index)) {
      setSelectedRow(selectedRow.filter((row) => row !== index));
      return;
    }

    setSelectedRow((prev) => [...prev, index]);
  };

  const onSubmit = () => {
    if (selectedRow.length === 0) {
      toast.warning('1개 이상의 데이터를 선택해주세요.');
      return;
    }

    chartCtx.setBody(data.filter((_, index) => selectedRow.includes(index)));
    navigate('/chart');
  };

  return (
    <Container>
      <ButtonField>
        <Button onClick={() => setSelectedRow([])}>
          <IoIosRefresh />
        </Button>
        <Button
          onClick={() =>
            setSelectedRow(Array.from({ length: data.length }, (_, i) => i))
          }
        >
          전체 선택하기
        </Button>
        <Description>{selectedRow.length}개 데이터 선택됨</Description>
      </ButtonField>
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
            {data.map((row, index) => {
              return (
                <tr
                  key={row[labels[0]]}
                  onClick={onClickRow.bind(null, index)}
                  className={`selectable ${
                    selectedRow.includes(index) ? 'active' : ''
                  }`}
                >
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

      <SubmitButton onClick={onSubmit}>차트 보기</SubmitButton>
    </Container>
  );
}

export default DataEditor;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonField = styled.div`
  align-self: flex-start;
`;

const Description = styled.span`
  color: #808080;
  font-size: 0.9rem;
`;
