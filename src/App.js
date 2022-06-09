import React, { useState } from 'react';
import DataChart from './components/DataChart';
import DataInput from './components/DataInput';
import DataView from './components/DataView';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <DataInput setData={setData} />
      {data && <DataView data={data} />}
      {data && <DataChart data={data} />}
    </div>
  );
}

export default App;
