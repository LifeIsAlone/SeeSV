import styled from 'styled-components';
import { DataEditor } from '../components';

function EditDataPage() {
  return (
    <>
      <Description>
        <p>차트로 시각화할 데이터를 선별해주세요.</p>
        <p>20개 이하를 권장합니다.</p>
      </Description>
      <DataEditor />
    </>
  );
}

export default EditDataPage;

const Description = styled.div`
  color: #666666;
  padding: 2rem 0 1rem;
  text-align: center;

  p {
    margin: 0;
  }
`;
