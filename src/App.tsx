import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import QRScan from "./components/qrreader";
// import Test from "./components/qr";


///// TEMP DISABLE!!  import Html5QrcodePlugin from './components/Html5QrcodePlugin';


import { ScanListItem } from './components/scanneditem';

const initialScans: Scan[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];


function App() {

  const [scans, setScans] = useState(initialScans);
  const [data, setData] = useState<string[]>([]);

  // useEffect(() => {
  //   setData(prevData => [...prevData, str])
  // }, [])

  const handleScan = (str: string) => {

    console.log("handleScan!");
    console.log(str);
    console.log(data);
    if (!data.includes(str)) {
      console.log(`setting property ${data} using setData(${str})!`);
      setData(prevData => [...prevData, str])
    }
  };

  const handleError = (err: string) => {
      console.error(err);
  };


  return (
    <div className="App">
      <h1>HTML5 Code Reader</h1>
      
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}

      <div className='myscan'>
        SCANNER HERE!
        {/* <Html5QrcodePlugin 
            fps={10}
            qrbox={500}
            disableFlip={false}
            qrCodeSuccessCallback={handleScan}/> */}
      </div>

      {new Date().toISOString()}

      {/* {scans.map((scan) => (
        <ScanListItem key={scan.text} scan={scan} />
      ))} */}

    </div>
  );
}

export default App;
