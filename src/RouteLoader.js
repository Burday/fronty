import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styled-theming';
import DarkThemeProvider from './components/redux/DarkThemeProvider';
import store from './components/redux/store';
import Home from './components/routes/Home';
import Settings from './components/routes/MoreSettings';

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

const RouteLoader = () => {
	const Container = styled.div`
		background: ${body};
		color: ${text};
	`;

	return (
		<ReduxProvider store={store}>
			<DarkThemeProvider>
				<Container>
					<Router>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/settings" component={Settings} />
						</Switch>
					</Router>
				</Container>
			</DarkThemeProvider>
		</ReduxProvider>
	);
};

export default RouteLoader;
