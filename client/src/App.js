import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const get = () => {
    axios.get('/test')
      .then(() => {
        console.log('yay');
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={get}></button>
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
      </header>
    </div>
  );
}

export default App;
