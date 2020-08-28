import React from 'react';
import './components/css/App.css';
import Settings from "./components/Main/Settings.js"
import Header from './components/Main/Header.js'
import HeaderStyle from './components/themes/HeaderStyle'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/themes/globalStyles";
import { lightTheme, darkTheme } from "./components/themes/Theme"
import {useDarkMode} from "./components/Main/useDarkMode"
import {useGreeting} from './components/Main/useGreeting'

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === false ? lightTheme : darkTheme;
  
  const [greeting, greetingToggler] = useGreeting()
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div className="App">
      <header className="App-header">
      <Settings theme={theme} themeToggler={themeToggler} greeting={greeting} greetingToggler={greetingToggler}/>
        <HeaderStyle>
          <Header greeting={greeting} greetingToggler={greetingToggler}/>
        </HeaderStyle>
      </header>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;

