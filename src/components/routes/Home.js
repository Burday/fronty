import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../css/App.css';
import Header from '../Main/Header.js';
import Settings from '../Main/Settings.js';
import { useDarkMode } from '../Main/useDarkMode';
import { useGreeting } from '../Main/useGreeting';
import { GlobalStyles } from '../themes/globalStyles';
import HeaderStyle from '../themes/HeaderStyle';
import { darkTheme, lightTheme } from '../themes/Theme';

function App() {
	const [theme, themeToggler] = useDarkMode();

	const themeMode = theme === false ? lightTheme : darkTheme;

	const [greeting, greetingToggler] = useGreeting();
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
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
			</>
		</ThemeProvider>
	);
}

export default App;
