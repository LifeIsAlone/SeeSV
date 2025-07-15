import { Link, Route, Routes } from 'react-router';
import { Toaster } from 'sonner';
import styled from 'styled-components';
import './App.css';

import HomePage from './pages/HomePage';
import EditDataPage from './pages/EditDataPage';
import ChartPage from './pages/ChartPage';
import { DataInput } from './components';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Toaster richColors />
      <Header>
        <Link to="/">
          <PageTitle>SeeSV</PageTitle>
        </Link>
      </Header>
      <PageMain>
        <DataInput />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/edit" element={<EditDataPage />} />
            <Route path="/chart" element={<ChartPage />} />
          </Route>
        </Routes>
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

const PageMain = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
`;

const Header = styled.header`
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
