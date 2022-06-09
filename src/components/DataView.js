import React from 'react';

function DataView({ data }) {
  const header = data[0];
  const body = data.slice(1, data.length);
  return (
    <div id="dataView">
      <h1>Your Data</h1>
      <table id="dataTable">
        <thead>
          <tr>
            {header.map((elem, index) => (
              <td key={'header' + index}>{elem}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, index) => {
            return (
              <tr key={'tbody tr' + index}>
                {row.map((elem, idx) => (
                  <td key={'tr' + index + ' td' + idx}>{elem}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataView;
