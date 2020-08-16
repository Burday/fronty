import React, {useState} from 'react';
import './components/css/App.css';
import Settings from "./components/Main/Settings.js"
import Header from './components/Main/Header.js'
import HeaderStyle from './components/themes/HeaderStyle'
import styled,{ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/themes/globalStyles";
import { lightTheme, darkTheme } from "./components/themes/Theme"

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
        <HeaderStyle>
          <Header/>
        </HeaderStyle>
      </header>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;

