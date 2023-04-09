import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from './analysis.png';
import { ChartContext } from '../store/ChartProvider';

function readFile(e) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      const dataRead = reader.result.split(/\r\n/);
      const parsedData = dataRead.map((elem) => elem.split(','));
      const data = parsedData.map((row) => {
        return row.map((elem) => {
          if (isNaN(elem)) {
            return elem;
          } else {
            return Number(elem);
          }
        });
      });

      resolve(data);
    };
    reader.onerror = reject;
    reader.readAsText(e.target.files[0], 'EUC-KR');
  });
}

function DataInput() {
  const chartCtx = useContext(ChartContext);

  const handleFileRead = async (e) => {
    const result = await readFile(e);
    chartCtx.setInput(result);
  };

  return (
    <DataInputDiv>
      <div>
        <StyledH1>csv 파일을 삽입하세요.</StyledH1>
        <input type="file" onChange={handleFileRead} />
      </div>
      <img src={logo} alt="Data icon" />
    </DataInputDiv>
  );
}

export default DataInput;

const StyledH1 = styled.h1`
  font-size: 24px;
`;

const DataInputDiv = styled.div`
  background: linear-gradient(135deg, #6411ad 0%, #390099 100%);
  height: 500px;
  border-radius: 16px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 300px;
    height: 300px;
    margin-left: 100px;
  }
`;
