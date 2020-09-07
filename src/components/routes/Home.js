import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import '../css/App.css';
import Header from '../Main/Header.js';
import Settings from '../Main/Settings.js';
import { useDarkMode } from '../Main/useDarkMode';
import { useGreeting } from '../Main/useGreeting';
import { darkTheme, lightTheme } from '../themes/Theme';

export const body = theme('theme', {
	light: '#FFF',
	dark: '#363537',
});

export const text = theme('theme', {
	light: '#363537',
	dark: '#adadad',
});

export const borderColor = theme('theme', {
	light: '#adadad',
	dark: '#363537',
});

export const toggleBorder = theme('theme', {
	light: '#FFF',
	dark: '#6B8096',
});

export const background = theme('theme', {
	light: '#363537',
	dark: '#242424',
});

export const headerBackground = theme('theme', {
	light: '#dedede',
	dark: '#303030',
});

export const shadow = theme('theme', {
	light: '#b5b5b5',
	dark: '#202020',
});

export const inputBG = theme('theme', {
	light: '',
	dark: '#242424',
});

function App() {
	const Container = styled.div`
		background: ${headerBackground};
		background-color: ${headerBackground};
		border-color: ${borderColor};
		color: ${text};
		font-size: 15px;
		text-align: center;
		padding-top: 20px;
		padding-bottom: 20px;
		position: relative;
		border-radius: 25px;
		left: auto;
		right: auto;
		margin: auto;
		box-shadow: 10px 5px ${shadow};
	`;
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
				<Container>
					<Header greeting={greeting} greetingToggler={greetingToggler} />
				</Container>
			</header>
		</div>
	);
}

export default App;
