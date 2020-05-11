import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>API root: {process.env.REACT_APP_API_ROOT}</p>
      </header>
    </div>
  );
}

export default App;
