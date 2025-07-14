import React, { useContext, useState } from 'react';
import Papa from 'papaparse';
import styled from 'styled-components';
import logo from './analysis.png';
import { ChartContext } from '../store/ChartProvider';
import { useNavigate } from 'react-router';

function DataInput() {
  const chartCtx = useContext(ChartContext);
  const isFileUploaded = chartCtx?.body?.length;
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleFileRead = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true, // 첫 번째 행을 헤더로 사용
      dynamicTyping: true, // 숫자 자동 변환
      encoding: 'EUC-KR', // 인코딩 설정
      skipEmptyLines: true,
      complete: (result) => {
        setFileName(file.name);
        chartCtx.setLabels(Object.keys(result.data[0]));
        chartCtx.setBody(result.data);
        navigate('/edit');
      },
    });
  };

  return (
    <DataInputDiv isFileUploaded={isFileUploaded}>
      {isFileUploaded ? (
        <>
          <p>{fileName} 파일 입력됨</p>
          <InputDiv>
            <label htmlFor="file">다른 파일 업로드</label>
            <input
              type="file"
              onChange={handleFileRead}
              id="file"
              accept=".csv"
            />
          </InputDiv>
        </>
      ) : (
        <>
          <img src={logo} alt="Data icon" />
          <div>
            <StyledH1>csv 파일을 삽입하세요.</StyledH1>
            <InputDiv>
              <label htmlFor="file">파일 선택</label>
              <input
                type="file"
                onChange={handleFileRead}
                id="file"
                accept=".csv"
              />
            </InputDiv>
          </div>
        </>
      )}
    </DataInputDiv>
  );
}

export default DataInput;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
`;

const DataInputDiv = styled.div`
  height: ${(props) => (props.isFileUploaded ? '8rem' : '30rem')};
  background: linear-gradient(135deg, #6411ad 0%, #390099 100%);
  border-radius: 16px;
  color: white;
  padding: 0 2rem;

  display: flex;
  justify-content: ${(props) =>
    props.isFileUploaded ? 'space-between' : 'center'};
  align-items: center;

  & img {
    width: 18rem;
    margin-right: 7em;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    /* phone */
    flex-direction: column;

    & img {
      width: 10rem;
      margin: 0 0 1em 0;
    }
  }

  @media screen and (max-width: 319px) {
    /* phone */
    flex-direction: column;

    & img {
      width: 10rem;
      margin: 0 0 1em 0;
    }
  }
`;

const InputDiv = styled.div`
  label {
    border: 1px solid white;
    border-radius: 8px;
    padding: 0.5em 1em;
    font-size: 0.9rem;
    cursor: pointer;
  }

  label:hover {
    background: white;
    color: #390099;
  }

  input {
    display: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    /* phone */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 319px) {
    /* phone */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
