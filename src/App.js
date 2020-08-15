import React from 'react';
import './components/css/App.css';
import Header from "./components/Main/Header.js"
import Settings from "./components/Main/Settings.js"
import Weather from './components/Main/Weather.js'
import Input from './components/Main/Input.js'
import Websites from './components/Main/Websites.js'
import Greeting from './components/Main/Greeting.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Settings/>
        <div className="Header-div">
            <Greeting/>
          <nav className="Header-nav">
            <Header/>
            <Weather/>
            <Input/>
            <Websites/>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
