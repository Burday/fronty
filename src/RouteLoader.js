import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/Main/useDarkMode';
import Home from './components/routes/Home';
import Settings from './components/routes/MoreSettings';
import { GlobalStyles } from './components/themes/globalStyles';
import { darkTheme, lightTheme } from './components/themes/Theme';
const RouteLoader = () => {
	const [theme, themeToggler] = useDarkMode();

	const themeMode = theme === false ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={themeMode}>
			<div>
				<GlobalStyles />
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/settings" component={Settings} />
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default RouteLoader;
