import styled from 'styled-components';
import './App.css';
import { DataInput, DataTableView, DataChart } from './components';

function App() {
  return (
    <div className="App">
      <PageMain>
        <PageTitle>SeeSV</PageTitle>
        <DataInput />
        <DataTableView />
        <DataChart />
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
  font-size: 1.5rem;
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
