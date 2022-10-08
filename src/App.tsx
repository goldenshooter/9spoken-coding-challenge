import React, { useState } from 'react'
import './App.css'
import Homepage from './components/home'
import 'antd/dist/antd.css'
function App() {
  // const [jsonData, setJsonData] = useState<any>();
  // const readFile = (e: any) => {
  //   console.log("hello????????");
  //   console.log(e.currentTarget.files);
  //   let file = e.currentTarget.files[0];
  //   let reader = new FileReader();

  //   reader.readAsText(file);

  //   reader.onload = function () {
  //     setJsonData(reader.result);
  //     console.log(reader.result);
  //   };

  //   reader.onerror = function () {
  //     console.log(reader.error);
  //   };
  // };
  return (
    <div className='App'>
      <Homepage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={readFile} type="file" />
        {jsonData}
      </header> */}
    </div>
  )
}

export default App
