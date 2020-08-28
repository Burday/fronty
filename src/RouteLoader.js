import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/routes/Home';
import Settings from './components/routes/MoreSettings';
const RouteLoader = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/settings" component={Settings} />
			</Switch>
		</Router>
	);
};

export default RouteLoader;
