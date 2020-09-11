import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const DarkThemeProvider = ({ children }) => {
	const darkThemeEnabled = useSelector(
		(state) => state.preferences.darkThemeEnabled,
		(state) => state.preferences.greetingEnabled,
	);
	return (
		<ThemeProvider theme={{ theme: darkThemeEnabled ? 'dark' : 'light' }}>
			{children}
		</ThemeProvider>
	);
};

export default DarkThemeProvider;
