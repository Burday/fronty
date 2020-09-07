import React from 'react';
import '../css/App.css';
import Header from '../Main/Header.js';
import Settings from '../Main/Settings.js';
import { useDarkMode } from '../Main/useDarkMode';
import { useGreeting } from '../Main/useGreeting';
import HeaderStyle from '../themes/HeaderStyle';
import { darkTheme, lightTheme } from '../themes/Theme';

function App() {
	const [theme, themeToggler] = useDarkMode();

	const themeMode = theme === false ? lightTheme : darkTheme;

	const [greeting, greetingToggler] = useGreeting();
	return (
		<div className="App">
			<header className="App-header">
				<Settings
					theme={theme}
					themeToggler={themeToggler}
					greeting={greeting}
					greetingToggler={greetingToggler}
				/>
				<HeaderStyle>
					<Header greeting={greeting} greetingToggler={greetingToggler} />
				</HeaderStyle>
			</header>
		</div>
	);
}

export default App;
