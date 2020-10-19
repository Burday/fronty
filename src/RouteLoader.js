import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DarkThemeProvider from './components/redux/DarkThemeProvider';
import { body, text } from './components/redux/differentThemes';
import store from './components/redux/store';
import Home from './components/routes/Home';
const Container = styled.div`
	background: ${body};
	color: ${text};
	transition: all 0.2s linear;
`;

const RouteLoader = () => {
	return (
		<ReduxProvider store={store}>
			<DarkThemeProvider>
				<Container>
					<Router>
						<Switch>
							<Route path="/" exact component={Home} />
						</Switch>
					</Router>
				</Container>
			</DarkThemeProvider>
		</ReduxProvider>
	);
};

export default RouteLoader;
