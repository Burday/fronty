import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../themes/Theme';
const lelocal = window.localStorage.getItem('theme');
const localTheme = JSON.parse(lelocal);

export const useDarkMode = () => {
	const [theme, setTheme] = useState(localTheme);
	const [themeMode, setThemeMode] = useState();
	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setThemeMode(theme === false ? lightTheme : darkTheme);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === false ? setMode(true) : setMode(false);
	};

	useEffect(() => {
		localTheme ? setTheme(localTheme) : setMode(false);
	}, []);
	return [theme, themeToggler, themeMode];
};
