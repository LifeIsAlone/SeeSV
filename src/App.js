import React, { useState } from 'react';
import DataChart from './components/DataChart';
import DataInput from './components/DataInput';
import DataView from './components/DataView';
import styled from 'styled-components';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <PageMain>
        <PageTitle>
          <h1>Page</h1>
        </PageTitle>
        <DataInput setData={setData} />
        {data && <DataView data={data} />}
        {data && <DataChart data={data} />}
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

const PageTitle = styled.div``;

const PageMain = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Footer = styled.footer`
  margin-top: 100px;
  background: #b8bedd;
  height: 100px;
  color: #474973;
  font-size: 12px;
  padding: 25px 0 0 5%;

  & img {
    height: 40px;
  }
`;
