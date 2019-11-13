import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import Routes from './router';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Demo
        </a>
      </header>
      <div className="content">
        <div class="menu">
          <ul>
            <li>
              <a href="/">home</a>   
            </li>
            <li>
              <a href="/about">about</a>   
            </li>
          </ul>
        </div>
       
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
