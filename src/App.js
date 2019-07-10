import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
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
          Learn React Now
        </a>
      </header>
      <main>
        <div>
          <p>This is the main content.</p>
          <ul>
            <li>Goku</li>
            <li>Vegeta</li>
            <li>Piccolo</li>
          </ul>
        </div>
      </main>
      <footer>
        <a href="https://maxjann.com">Jann Software</a>
      </footer>
    </div>
  );
}

export default App;
