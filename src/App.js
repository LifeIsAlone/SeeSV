import React, { useContext } from 'react';
import DataChart from './components/DataChart';
import DataInput from './components/DataInput';
import DataView from './components/DataView';
import styled from 'styled-components';
import './App.css';
import { ChartContext } from './store/ChartProvider';

function App() {
  const chartCtx = useContext(ChartContext);

  return (
    <div className="App">
      <PageMain>
        <PageTitle>Take a look!</PageTitle>
        <DataInput />
        {chartCtx.input.length > 0 && <DataView />}
        {chartCtx.input.length > 0 && <DataChart />}
      </PageMain>
      <Footer>
        <p>ⓒ제작자: 김미소 (cozups)</p>
        <a
          href="https://github.com/cozups"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
            alt=""
          />
        </a>
      </Footer>
    </div>
  );
}

export default App;

const PageTitle = styled.h1`
  font-size: 2rem;
`;

const PageMain = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  margin-top: 6rem;
  background: #b8bedd;
  height: 6rem;
  color: #474973;
  font-size: 0.75rem;
  padding: 1em 0 0 6em;

  & img {
    height: 2.5rem;
  }
`;
