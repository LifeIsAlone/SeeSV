import React from 'react';

function readFile(e) {
  return new Promise((resolve) => {
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
    reader.readAsText(e.target.files[0], 'EUC-KR');
  });
}

function DataInput({ setData }) {
  return (
    <div id="data-input">
      <h1>csv 파일을 삽입하세요.</h1>
      <input
        type="file"
        onChange={async (e) => {
          const result = await readFile(e);
          setData(result);
        }}
      />
    </div>
  );
}

export default DataInput;
