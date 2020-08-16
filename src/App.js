import React, {useState} from 'react';
import './components/css/App.css';
import Header from "./components/Main/Header.js"
import Settings from "./components/Main/Settings.js"
import Weather from './components/Main/Weather.js'
import Input from './components/Main/Input.js'
import Websites from './components/Main/Websites.js'
import Greeting from './components/Main/Greeting.js'


import styled,{ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/css/globalStyles";
import { lightTheme, darkTheme } from "./components/css/Theme"

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <div className="App">
      <header className="App-header">
      <Settings theme={theme} themeToggler={themeToggler}/>
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
    </>
    </ThemeProvider>
  );
}

export default App;

