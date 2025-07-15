import styled from 'styled-components';
import domtoimage from 'dom-to-image';

import { FiDownload } from 'react-icons/fi';

function ChartWrapper({ children }) {
  const saveChartImage = () => {
    const element = document.querySelector('.recharts-responsive-container');

    // 항상 1500px width로 캡쳐하기 위함
    const width = 1500;
    const ratio = width / element.clientWidth;

    domtoimage
      .toJpeg(element, {
        bgcolor: 'white',
        width: element.clientWidth * ratio,
        height: element.clientHeight * ratio,
        style: {
          transform: `scale(${ratio})`,
          'transform-origin': 'top left',
        },
      })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'my-chart-image.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <DataChartContainer>
      {children}
      <SaveButton onClick={saveChartImage}>
        <FiDownload color="white" /> 차트 저장
      </SaveButton>
    </DataChartContainer>
  );
}

export default ChartWrapper;

const DataChartContainer = styled.div`
  width: 100%;
`;

const SaveButton = styled.button`
  background: #390099;
  color: white;
  font-size: 1rem;
  padding: 0.5em 1em;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  margin: 2rem auto;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.5em;
  }
`;
