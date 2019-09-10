import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [header, setHeader] = useState('');

  const asyncGetHeader = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/tech-test', {})
    setHeader(res.data.header);
  };

  useEffect(() => {
    asyncGetHeader()
  }, []);

  return (
    <div className="App">
      {
        header
          ? parse(header)
          : null
      }
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

export default App;
